import { TodosType } from "@/types/todosType";

export default function TodoItem({ todo }: { todo: TodosType }) {
  return (
    <div
      className={`w-full text-white h-full flex justify-between  items-center p-4 rounded-lg ${
        todo.completed ? "bg-green-600" : "bg-rose-700"
      }`}
    >
      <h2>
        {todo.id} - {todo.title}
      </h2>
      <h3 className="text-sm">{todo.completed ? "DONE" : "NOT COMPLETED !"}</h3>
    </div>
  );
}
