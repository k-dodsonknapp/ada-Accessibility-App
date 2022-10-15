// import logo from "./logo.svg";
import logo from "./TeamShotADA.png";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Tracker from "./components/Tracker";
import Resources from "./components/Resources";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/tracker" element={<Tracker />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
