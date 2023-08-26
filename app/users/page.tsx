"use client";
import { signOut, useSession } from "next-auth/react";

const Users = () => {
  const session = useSession();

  console.log(session);

  return (
    <div>
      <button onClick={() => signOut()}>LOG OUT</button>
    </div>
  );
};

export default Users;
