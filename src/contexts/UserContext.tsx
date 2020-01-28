import React, { createContext, useState } from "react";

interface IUser {
  user: String;
  role: String;
}

export const UserContext = createContext<IUser>({ user: "", role: "" });

const UserContextProvider: React.FC = props => {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  return (
    <UserContext.Provider value={{ user, role }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
