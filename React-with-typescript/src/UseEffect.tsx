import { useEffect, useState } from "react";
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}
const url = "https://jsonplaceholder.typicode.com/users";

const UseEffect = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      setIsloading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: User[] = await response.json();
        console.log("fetch data", data);
        setUsers(data);
      } catch (error) {
        console.log("error exist during fetching Api", error);
      } finally {
        setIsloading(false);
      }
    };
    fetchUsers();
  }, []);

  if (users.length === 0) {
    return <h2>No users found.</h2>;
  }

  return (
    <>
      <div>
        {isLoading ? (
          <h2>loading...</h2>
        ) : (
          users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>

              <h3>Address</h3>
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
              <p>{user.address.city}</p>
              <p>{user.address.zipcode}</p>
              <p>
                Lat: {user.address.geo.lat} | Lng: {user.address.geo.lng}
              </p>

              <h3>Company</h3>
              <p>{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p>

              <hr />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default UseEffect;
