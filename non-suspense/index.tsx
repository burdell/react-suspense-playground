import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { css } from "glamor";

css.global("*", {
    fontFamily: "'Hammersmith One', sans-serif"
});

css.global("body", {
    backgroundColor: "#E7EDEA"
});

import App from "./src/App";

ReactDOM.render(<App />, document.getElementById("root"));
