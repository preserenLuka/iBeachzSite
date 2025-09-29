import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Content from "./content";
import "../css/app.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const App: React.FC = () => {
  const [OpenContent, setOpenContent] = useState<string>(""); // Content to be opened
  const [isContentOpen, setisContentOpen] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/ping`).catch(() => {});
  }, []);

  return (
    <div className="app-container">
      <Sidebar
        OpenContent={OpenContent}
        isContentOpen={isContentOpen}
        setOpenContent={setOpenContent}
        setisContentOpen={setisContentOpen}
      />
      <Content isContentOpen={isContentOpen} />
    </div>
  );
};

export default App;
