// Library imports
import React from "react";

// Context imports
import UserContextProvider from "./contexts/UserContext";

// Component imports
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
      </UserContextProvider>
    </div>
  );
};

export default App;
