import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stories from "./components/stories/Stories";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
