// import logo from "./logo.svg";
import logo from "./TeamShotADA.png";
import "./App.css";
import MainContent from "./components/MainContent";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>welcome to our mental health app!</h1>
        <p>Hung, Emmer, Kenneth, Maryna, Hahn, Tedi</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <MainContent />
    </div>
  );
}

export default App;
