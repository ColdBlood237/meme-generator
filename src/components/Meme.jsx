export default function Meme() {
  return (
    <form id="meme-form">
      <div className="flex-container">
        <div className="input-wrapper">
          <label htmlFor="top-text">Top text</label>
          <input type="text" placeholder="Shut up" id="top-text" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="bottom-text">Bottom text</label>
          <input type="text" placeholder="And take my money" id="bottom-text" />
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Get a new meme image 🖼
      </button>
    </form>
  );
}
