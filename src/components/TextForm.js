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

    props.showAlert("Keep volume up.", "warning");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const getTheme = () => {
    let color = "black",
      backgroundColor = "white";
    if (props.mode === "dark") {
      color = "white";
      backgroundColor = "black";
    } else if (props.mode === "pastel") {
      color = "8294C4";
      backgroundColor = "FFEAD2";
    }
    return { color, backgroundColor };
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: `${getTheme().color}`,
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="12"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: `${getTheme().backgroundColor}`,
              color: `${getTheme().color}`,
            }}
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
      <div
        className="container my-3"
        style={{
          color: `${getTheme().color}`,
        }}
      >
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
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview it here."}
        </p>
      </div>
    </>
  );
}

export default TextForm;
