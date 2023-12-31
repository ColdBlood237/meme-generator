import trollFace from "../assets/troll-face.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="icon" src={trollFace} alt="troll face icon" />
      <h1 className="title">Meme Generator</h1>
    </nav>
  );
}
