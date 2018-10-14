import React, { Component } from "react";
import styled from "react-emotion";
import { RouteComponentProps } from "@reach/router";

import Ships from "./Starships/Starships";
import Planets from "./Planets/Planets";
import People from "./People/People";
import Species from "./Species/Species";
import Vehicles from "./Vehicles/Vehicles";
import Films from "./Films/Films";

const Main = styled("div")({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around"
});

export default class extends Component<RouteComponentProps> {
    public render() {
        return (
            <Main>
                <Ships />
                <Planets />
                <People />
                <Species />
                <Vehicles />
                <Films />
            </Main>
        );
    }
}
