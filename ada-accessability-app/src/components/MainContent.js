import "../App.css";
import { About } from "./views";
import { Routes, Route, Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="routes">
      <Routes>
        <Route exact path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default MainContent;
