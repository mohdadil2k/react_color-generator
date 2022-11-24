import { useState } from "react";
import "./index.css";
import Values from "values.js";

import SingleColor from "./SingleColor";
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorData, setColorData] = useState(new Values("#f11520").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!color) alert("values can't be empty");
      let colors = new Values(color).all(10);
      setColorData(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="input-section">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="color">color generator</label>
          <input
            type="text"
            id="color"
            className={`input-text ${error ? "warning" : null}`}
            value={color}
            autoFocus
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </section>
      <section className="color-section">
        {colorData.map((color, index) => {
          return (
            <SingleColor 
            key={index} 
            {...color} 
            hexcolor={color.hex} 
            index={index} />
          );
        })}
      </section>
    </>
  );
}

export default App;
