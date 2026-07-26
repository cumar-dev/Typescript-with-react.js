// how to useStateintypeScript
import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<{ name: string; age: number } | null>(null);
  // const [userData, setUserData] = useState<[]>([]);
  const handleDecrement = (): void => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incriment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>Name: {data?.name}</p>
      <p>Age: {data?.age}</p>
      <button onClick={() => setData({ name: "omar", age: 21 })}>
        click me
      </button>
      <button onClick={()=> setData(null)}>Reset</button>
    </div>
  );
};

export default UseState;
