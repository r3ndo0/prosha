import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TodosType } from "@/types/todosType";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getSomeTodos: builder.query<TodosType[], string>({
      query: (startNumber) => `todos?_start=${startNumber}&_limit=5`,
    }),
  }),
});
export const { useGetSomeTodosQuery } = todosApi;
