//today i learned how to use props in typescript

interface UserCardProps {
    name: string;
    description: string;
    price: number;
}
const UserCard = (props: UserCardProps) => {
    console.log(props);
  return (
   <div style={{ padding: 0, margin: 0 }}>
    <h1>{props.name.toUpperCase()}</h1>
    <p>{props.description}</p>
    <strong>${props.price.toFixed(2)}</strong>
    </div>
  )
}

export default UserCard;