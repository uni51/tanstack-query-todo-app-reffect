import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTodoList = async () => {
  const res = await axios.get("http://localhost:3001/todos");
  return res.data;
};

const Todo = () => {
  const {
    isLoading,
    isError,
    data: todos,
    error,
  } = useQuery(["todos"], fetchTodoList);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    console.log(error);
    return <span>Error: {error.response.data.message}</span>;
  }

  return (
    <>
      <h1>Todo一覧</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
