import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
};

export default App;