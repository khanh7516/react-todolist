import type { TodoType } from "../types/TodoType";

interface TodoProps {
  todo: TodoType;
  toggleComplete: (id: string) => void;
  editItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

export const Todo = ({ todo, toggleComplete, editItem, deleteItem }: TodoProps) => {
  return (
    <div className="todo-item">
      <p
      className={`task-text ${todo.completed ? "completed" : ""}`}
      onClick={() => toggleComplete(todo.id)}
      >{todo.task}</p>
      <div className="button-group">
        <button
        onClick={() => editItem(todo.id)}
        >Edit</button>
        <button
        onClick={() => deleteItem(todo.id)}
        >Delete</button>
      </div>
    </div>
  );
};

