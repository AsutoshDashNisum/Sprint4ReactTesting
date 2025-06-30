// src/components/UserCard.js
import React, { useEffect, useState } from "react";
import { getUserById } from "../services/userService";

export default function UserCard({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(userId).then(data => setUser(data));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
