import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { css } from "glamor";

css.global("*", {
    fontFamily: "'Hammersmith One', sans-serif"
});

css.global("a", {
    color: "inherit",
    textDecoration: "inherit"
});

css.global("body", {
    backgroundColor: "#E7EDEA"
});

import App from "./src/App";

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
// (ReactDOM as any).unstable_createRoot(root).render(<App />);
