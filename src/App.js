import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import ContextStore from "./context/ContextStore";

function App() {
  return (
    <ContextStore>
      <div>
        <Home />
      </div>
    </ContextStore>
  );
}

export default App;
