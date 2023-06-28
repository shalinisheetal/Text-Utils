import React, { useState } from "react";
import { jsPDF } from "jspdf";

function TextForm(props) {
  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const handleLowClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const handleRemove = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };
  const handleClear = () => {
    setText("");
  };
  const handleCopy = () => {
    let textArea = document.getElementById("myBox");
    textArea.select();
    document.execCommand("copy");
  };
  const handleSpeech = () => {
    const message = document.getElementById("myBox").value;
    const Speech = new SpeechSynthesisUtterance();
    Speech.lang = "eng";
    Speech.text = message;
    window.speechSynthesis.speak(Speech);

    props.showAlert("Keep volume up.", "warning");
  };
  const handlePdfClick = () => {
    // eslint-disable-next-line no-undef
    var doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("Text-Utils-DOC.pdf");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleRemove}
        >
          Remove white spaces
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleSpeech}
        >
          Speak
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-success mx-2 my-1"
          onClick={handlePdfClick}
        >
          Convert to PDF
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-1"
          onClick={handleClear}
        >
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>{text.replace(/\n/g, "").trim().length} characters</p>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words
        </p>
        <p>
          {0.008 * text.split(" ").filter((value) => value !== "").length}{" "}
          minutes to read.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview."}</p>
      </div>
    </>
  );
}

export default TextForm;
