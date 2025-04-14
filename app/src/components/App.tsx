import React, { useState } from "react";
import Sidebar from "./sidebar";
import Content from "./content";
import "../css/app.css";
import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router";

const App: React.FC = () => {
  const [OpenContent, setOpenContent] = useState<string>(""); // Content to be opened
  const [isContentOpen, setisContentOpen] = useState<boolean>(true);

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
