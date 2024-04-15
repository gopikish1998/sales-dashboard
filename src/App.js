import logo from "./logo.svg";
import "./App.css";
import Map from "./Components/Map";
import LandingPage from "./Pages/LandingPage";
import { Router } from "./Router";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
