import "./App.css";
import "./yeti.css";

//Components
import HomeScreen from "./screens/HomeScreen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
    </div>
  );
}

export default App;
