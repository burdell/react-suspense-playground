import React from "react";
import { Router } from "@reach/router";
import styled from "react-emotion";

import Home from "./Home";
import { PersonRoute } from "./People/Person";
import { PlanetRoute } from "./Planets/Planet";
import { StarshipRoute } from "./Starships/Starship";

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
            <PersonRoute path="/person/:id" />
            <PlanetRoute path="/planet/:id" />
            <StarshipRoute path="/ship/:id" />
        </Router>
    </div>
);
