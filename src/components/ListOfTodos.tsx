import { useState } from "react";
import { useGetSomeTodosQuery } from "@/features/todos/todosApi";
import TodoItem from "./TodoItem";

function ListOfTodos() {
  //Tracking The Pagination Dynamic Number
  const [pageNumber, setPageNumber] = useState(0);
  //Fetching Data From JsonPaceHolder With RTK-QUERY
  const { data, error, isLoading } = useGetSomeTodosQuery(
    pageNumber.toString()
  );
  //Loading State UI
  if (isLoading) return <div>LOADING...</div>;
  //ERROR State UI
  if (error) return <div className="text-7xl text-rose-600">ERROR...</div>;

  return (
    <div className="h-full w-full flex px-12 flex-col gap-8">
      {data &&
        data.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      <div className="flex mt-8 justify-center items-center gap-8">
        <button
          onClick={() => {
            setPageNumber(pageNumber - 5);
          }}
          disabled={pageNumber === 0}
          className="py-2 px-4 bg-sky-300 disabled:bg-gray-200 text-gray-900 rounded-lg"
        >
          Last Page
        </button>
        <button
          onClick={() => {
            setPageNumber(pageNumber + 5);
          }}
          className="py-2 px-4 bg-sky-300 text-gray-900 rounded-lg"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
export default ListOfTodos;
