import React from "react";

export default function About(props) {
  //   const [myStyle, setMyStyle] = useState({
  //     color: "black",
  //     backgroundColor: "white",
  //   });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About us</h1>
      <p>Welcome to our free and user-friendly text utilities website!</p>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Here, you can effortlessly analyze and manipulate your texts with
              a variety of powerful tools. Convert your text to uppercase or
              lowercase with a simple click, enabling you to easily transform
              your content to match your specific needs. But that's not all – we
              go beyond simple case conversion. You can also convert your text
              to speech, allowing you to listen to your words being spoken out
              loud. Whether you're looking to enhance your writing, conduct
              linguistic analysis, or simply explore the capabilities of text
              manipulation, our website provides a comprehensive suite of tools
              to assist you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Best of all, it's completely free to use, ensuring that anyone can
              take advantage of these invaluable text utilities. Start
              optimizing your text today with our intuitive and accessible
              platform!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our text utilities website is designed to be fully compatible with
              all major browsers, ensuring a seamless experience regardless of
              your preferred web browser. Whether you're using Chrome, Firefox,
              Safari, or any other browser, you can access and utilize our tools
              without any compatibility issues. Moreover, our website is built
              with responsiveness in mind, adapting to different screen sizes
              and devices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
