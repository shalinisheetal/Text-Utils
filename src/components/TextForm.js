import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const handleLowClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const handleSpeech = () => {
    const message = document.getElementById("myBox").value;
    const Speech = new SpeechSynthesisUtterance();
    Speech.lang = "eng";
    Speech.text = message;
    window.speechSynthesis.speak(Speech);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="12"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpeech}>
          Speak
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.trim().length} characters</p>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
