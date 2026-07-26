import { useState } from "react";
interface formProps {
    onSubmit: (value: string) => void;
}
const Form = ({onSubmit}: formProps) => {
  const [input, setInput] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void=> {
    e.preventDefault();
    console.log("input data", input);
    onSubmit(input);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
