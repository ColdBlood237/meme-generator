import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  //const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    let randomNumber = Math.floor(Math.random() * 100);
    setMeme((prev) => ({
      ...prev,
      randomImage: allMemeImages.data.memes[randomNumber].url,
    }));
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
      <img src={meme.randomImage} className="meme-image" />
    </main>
  );
}
