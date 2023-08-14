import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Organizations from "./components/OrganizationPanel/Organizations";
import Messages from "./components/MessagePanel/Messages";
import Filters from "./components/Filter/Filters";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container flex">
        <Organizations />
        <div className="messages-filter-container flex">
          <Filters />
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default App;
