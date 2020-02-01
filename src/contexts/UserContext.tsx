import React, { createContext, useState } from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

interface IUser {
  user: String;
  role: String;
  data?: any;
}

const GET_USERS_QUERY = gql`
  query getUsers {
    users {
      email
      name
    }
  }
`
type User = {
  email: string,
  name: string
}

export const UserContext = createContext<IUser>({ user: "", role: "", data: [] });

const UserContextProvider: React.FC = props => {
  const { loading, error, data } = useQuery(GET_USERS_QUERY);
  console.log(data);
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  return (
    <UserContext.Provider value={{ user, role, data }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
