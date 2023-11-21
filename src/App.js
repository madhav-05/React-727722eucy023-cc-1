import React, { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [hideText, setHideText] = useState(true);
  const [text, settext] = useState("hide");

  function changeR() {
    setHideText(!hideText);
    if (hideText) {
      settext("show");
    } else {
      settext("hide");
    }
  }

  const Text = () => <div>skcet coimbatore</div>;
  return (
    <div>
      <Button variant="contained" onClick={changeR} size="small">
        {text}
      </Button>
      {hideText ? <Text /> : null}
    </div>
  );
}

export default App;
