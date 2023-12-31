import "./App.css";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="main">
        <Meme />
      </section>
    </>
  );
}

export default App;
