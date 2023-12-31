import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    setMemeImage(memesData.data.memes[Math.floor(Math.random() * 100)].url);
  }

  return (
    <main>
      <div id="meme-form">
        <div className="input-wrapper">
          <label htmlFor="top-text">Top text</label>
          <input type="text" placeholder="Shut up" id="top-text" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="bottom-text">Bottom text</label>
          <input type="text" placeholder="And take my money" id="bottom-text" />
        </div>
        <button onClick={getMemeImage} className="submit-btn">
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} />
    </main>
  );
}
