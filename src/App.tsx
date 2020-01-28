import React from "react";
import UserContextProvider from "./contexts/UserContext";

const App: React.FC = () => {
  return (
    <div className="App">
      <UserContextProvider></UserContextProvider>
    </div>
  );
};

export default App;
