import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Team from "./pages/team/Team";
import Reviews from "./pages/reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Team />
      <Reviews />
    </div>
  );
}

export default App;
