import { useState } from "react";
import Form from "./Form";
import TodoApp from "./TodoApp";
import UserCard from "./UserCard";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import useLocalStoarge from "./Hooks/UseLocalStorage";
import useNumberLocalStorage from "./Hooks/UseNumberLocalStorage";
import useUserObjects from "./Hooks/UseUserObjectsStorage";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
   const [user, setUser] = useLocalStoarge("user", "Hamuuda");
   const [score, setScore] = useNumberLocalStorage("score", 888);
   const [currentUser, setCurrentUser] = useUserObjects("user", {name: "omar", email: "omar@hotmail.com"})
  const handleSubmit = (data: string) => {
    console.log(data.toUpperCase());
  };
  const addTODO = (todo: string) => {
    setTodos((prev) => [...prev, todo]);
  };
  return (
    <>
      <div style={{ padding: "10px" }}>
        <UserCard
          name="T-shirt"
          description="Welcome to these new T-shirts. We have different brands like Nike, Adidas, and Puma."
          price={20}
        />
        <UseState />
        <Form onSubmit={handleSubmit} />
        <TodoApp onSubmit={addTODO} />
        <ul style={{ listStyle: "none" }}>
          {todos.map((todo, index) => (
            <li style={{ textDecoration: "none" }} key={index}>
              {todo}
            </li>
          ))}
        </ul>
        <UseEffect />
      </div>

      <div>
      <p>{user}</p>
      <button onClick={() => setUser("yess")}>
        Change User
      </button>
    </div>

    <div>
      <p>{score}</p>
      <button onClick={()=> setScore(score + 1)}>change Score</button>
    </div>

   <div>
  <p>Name: {currentUser.name}</p>
  <p>Email: {currentUser.email}</p>

  <button
    onClick={() =>
      setCurrentUser({
        name: "Ahmed",
        email: "ahmed@example.com",
      })
    }
  >
    Change Current User
  </button>
</div>
    </>
  );
}

export default App;
