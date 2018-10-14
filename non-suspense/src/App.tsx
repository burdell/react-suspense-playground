import React from "react";
import { Router } from "@reach/router";
import styled from "react-emotion";

import Home from "./Home";
import Film from "./Films/Film";
import Person from "./People/Person";
import Planet from "./Planets/Planet";
import Starship from "./Starships/Starship";
import Vehicle from "./Vehicles/Vehicle";
import Specie from "./Species/Specie";

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
            <Film path="/film/:id" />
            <Person path="/person/:id" />
            <Planet path="/planet/:id" />
            <Starship path="/ship/:id" />
            <Vehicle path="/vehicle/:id" />
            <Specie path="/specie/:id" />
        </Router>
    </div>
);
