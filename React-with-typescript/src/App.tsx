import { useState } from "react";
import Form from "./Form";
import TodoApp from "./TodoApp";
import UserCard from "./UserCard";
import UseState from "./UseState";
function App() {
  const [todos, setTodos] = useState<string []>([]);
  const handleSubmit = (data: string)=> {
  console.log(data.toUpperCase());
  }
  const addTODO = (todo: string) => {
     setTodos((prev) => [...prev, todo])
  }
  return (
    <div style={{padding: "10px"}}>
      <UserCard
        name="T-shirt"
        description="Welcome to these new T-shirts. We have different brands like Nike, Adidas, and Puma."
        price={20}
      />
      <UseState />
      <Form onSubmit={handleSubmit} />
      <TodoApp onSubmit={addTODO}/>
      <ul style={{listStyle: "none"}}>
        {todos.map((todo, index) => (
          <li style={{textDecoration: "none"}} key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
