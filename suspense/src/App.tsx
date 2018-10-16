import React from "react";
import { Router } from "@reach/router";
import styled from "react-emotion";

import Home from "./Home";
import Person from "./People/Person";
import Planet from "./Planets/Planet";
import Starship from "./Starships/Starship";

const Title = styled("h1")({
    fontFamily: "Londrina Shadow",
    color: "#655643",
    fontSize: "2.5em",
    paddingLeft: ".6em"
});

export default () => (
    <div>
        <Title>Star Warz</Title>
        <Router>
            <Home path="/" />
            <Person path="/person/:id" />
            <Planet path="/planet/:id" />
            <Starship path="/ship/:id" />
        </Router>
    </div>
);
