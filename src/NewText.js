import React, { useState } from "react";
import ".//App.css";
import { TextField, Button } from "@mui/material";
// import DemoFrame from "./demoFrame";
function NewText() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("")

  const upperCaseHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearHandler = () => {
    setText("");
  };
  return (
    <div className="container">
      <br />
      <div className="container ">
        <h2 className="opac">This Section For Your PracticE</h2>
        <TextField
          value={text}
          label="Enter Your Text Here!"
          fullWidth
          onChange={(e) => setText(e.target.value)}
        />
        <br /> <br />
        <p style={{ font: "small-caption" }} className="left">
          Words is :{text.length}
          <p style={{ font: "small-caption" }}>
            Charecters is :{text.split(" ").length}
          </p>
        </p>
        <Button variant="contained" onClick={() => upperCaseHandler()}>
          Convet UpperCase
        </Button>
        <Button
          variant="contained"
          className="m-2"
          onClick={() => lowerCaseHandler()}
        >
          Convet LowerCase
        </Button>
        <Button variant="outlined" onClick={() => clearHandler()}>
          {" "}
          Clear
        </Button>
        <br />
        <h5>
          <u>Summry</u>
          <p style={{ font: "small-caption" }}>{text}</p>
        </h5>
      </div>
      {/* New Topic Start */}
      <div className="row">
        <div className="col box">
          <div className="col">
            <iframe src="https://www.wikipedia.org/" width="100%" height="400px" />
          </div>
          <br />
          <br />
        </div>
        <div className="col">

        </div>
      </div>
      {/* New Topic End */}

    </div>
  );
}
export default NewText;
