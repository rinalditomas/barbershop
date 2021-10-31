import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
