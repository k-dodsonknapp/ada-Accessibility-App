import "../App.css";
import { Home, Contact, Tracker, Resources, Community } from "./views";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="routes">
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/tracker" element={<Tracker />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainContent;
