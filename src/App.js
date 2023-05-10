import axios from "axios";
import React from "react";

import Title from "./Title";
import Story from "./Story";
import NewText from "./NewText";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Crud from "./Crud";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/story" element={<Story />} />
          <Route path="/" element={<Crud />} />
          <Route path="/Text" element={<NewText />} />
        </Routes>
      </BrowserRouter>

      <br />
    </div>
  );
}
export default App;
