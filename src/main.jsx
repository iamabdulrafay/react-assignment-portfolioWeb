// src/main.jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Call from "./components/Call/Call.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Blog from "./components/Blog/Blog.jsx";
import BlogDetails from "./components/BlogDetails/BlogDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Call />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:userid" element={<BlogDetails />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
