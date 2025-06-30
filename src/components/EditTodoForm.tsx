import { useState } from "react"
import type { TodoType } from "../types/TodoType";

interface EditTodoFormProps {
  updateTodo: (value: string, todoId: string) => void
  cancelEdit: (id: string) => void;
  todo: TodoType
}


export const EditTodoForm = ({ updateTodo, cancelEdit, todo}: EditTodoFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    updateTodo(value.trim(), todo.id);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" placeholder={`old task: ${todo.task}`}
      value={value}
      onChange={(e) => setValue(e.target.value)}/>
      <button type="submit">Update</button>
      <button type="button" onClick={() => cancelEdit(todo.id)}>Cancel</button>
    </form>
  )
}
