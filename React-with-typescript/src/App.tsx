import UserCard from "./UserCard";
import UseState from "./UseState";
function App() {
  return (
    <>
      <UserCard
        name="T-shirt"
        description="Welcome to these new T-shirts. We have different brands like Nike, Adidas, and Puma."
        price={20}
      />
      <UseState />
    </>
  );
}

export default App;
