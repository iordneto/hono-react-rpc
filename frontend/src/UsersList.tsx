import { useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
};
export const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users").then(async (res) => {
      const { users } = await res.json();

      setUsers(users);
    });
  }, []);

  if (!users) return <div>no users</div>;

  return (
    <div>
      {users?.map((u) => (
        <div>
          {u.name} - {u.email}
        </div>
      ))}
    </div>
  );
};
