import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import type { TodoType } from "../types/TodoType";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false
      }
    ]);
  };

  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? 
      {
        ...todo, completed: !todo.completed
      } 
      : todo
    ));
  }

  const deleteItem = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleEdit = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? 
      {
        ...todo, isEditing: !todo.isEditing
      } 
      : todo
    ));
  }

  const updateTodo = (taskValue: string, id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? 
      {
        ...todo, task: taskValue, isEditing: !todo.isEditing
      } 
      : todo
    ));
  }

  const cancelEdit = (id: string) => {
    setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, isEditing: false } : todo
    ));
  };

  return (
    <div className="todo-wrapper">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
        {todos.map((todo) =>
        todo.isEditing ? (
            <EditTodoForm
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            cancelEdit={cancelEdit}
            />
        ) : (
            <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            editItem={toggleEdit}
            deleteItem={deleteItem}
            />
        )
        )}
    </div>
  );
};
