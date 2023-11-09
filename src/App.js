import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/bil/" element={<Hero />}></Route>
          <Route exact path="/bil/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
