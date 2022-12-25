import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import Project from "./Routes/Project";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Project" element={<Project />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}
