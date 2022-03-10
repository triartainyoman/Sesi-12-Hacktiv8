import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import Example from "./components/Example";
import HaluFetch from "./components/HaluFetch";

function App() {
  return (
    <div className="container">
      <Clock />
      <hr />
      <Example />
      <hr />
      <HaluFetch />
    </div>
  );
}

export default App;
