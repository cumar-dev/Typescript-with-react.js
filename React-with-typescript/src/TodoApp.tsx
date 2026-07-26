import { useState } from "react"
interface formProps {
    onSubmit: (value: string) => void;
}
const TodoApp = ({onSubmit}: formProps) => {
    const [input, setInput] = useState<string>("");
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
      e.preventDefault();
      console.log("new TODO", input);
      onSubmit(input);
      setInput("");
    }
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="new-TODO" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default TodoApp