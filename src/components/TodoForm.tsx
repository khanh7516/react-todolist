import { useState } from "react"

interface TodoFormProps {
  addTodo: (value: string) => void;
}


export const TodoForm = ({addTodo}: TodoFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (value.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    addTodo(value.trim());
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="What is your plan?"
      value={value}
      onChange={(e) => setValue(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  )
}
