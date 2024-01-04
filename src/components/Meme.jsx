import { useEffect, useState } from "react";

export default function Meme() {
  //const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    let randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme((prev) => ({
      ...prev,
      randomImage: allMemes[randomNumber].url,
    }));
  }

  function handleInputChange(event) {
    const { value, name } = event.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div id="meme-form">
        <div className="input-wrapper">
          <label htmlFor="top-text">Top text</label>
          <input
            type="text"
            placeholder="Shut up"
            id="top-text"
            name="topText"
            value={meme.topText}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="bottom-text">Bottom text</label>
          <input
            type="text"
            placeholder="And take my money"
            id="bottom-text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={getMemeImage} className="submit-btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
