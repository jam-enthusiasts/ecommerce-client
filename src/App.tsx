// Library imports
import React from "react";
import { ApolloProvider } from '@apollo/react-hooks';

// local imports
import { client } from './lib/apollo';

// Context imports
import UserContextProvider from "./contexts/UserContext";

// Component imports
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <UserContextProvider>
          <Header />
        </UserContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
