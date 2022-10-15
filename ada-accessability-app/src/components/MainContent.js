import "../App.css";
import { Home } from "./views";
import { Routes, Route, Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="routes">
      <Routes>
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainContent;
