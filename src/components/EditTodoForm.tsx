import { useState } from "react"
import type { TodoType } from "../types/TodoType";

interface EditTodoFormProps {
  updateTodo: (value: string, todoId: string) => void
  cancelEdit: (id: string) => void;
  todo: TodoType
}


export const EditTodoForm = ({ updateTodo, cancelEdit, todo}: EditTodoFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit: (e: React.FormEvent) => void = (e) => {
    e.preventDefault();
    updateTodo(value, todo.id);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Update task"
      value={value}
      onChange={(e) => setValue(e.target.value)}/>
      <button type="submit">Update</button>
      <button type="button" onClick={() => cancelEdit(todo.id)}>Cancel</button>
    </form>
  )
}
