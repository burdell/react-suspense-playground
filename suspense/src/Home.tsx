import React, { Component } from "react";
import styled from "react-emotion";
import { RouteComponentProps } from "@reach/router";

import Ships from "./Starships/Starships";
import Planets from "./Planets/Planets";
import People from "./People/People";

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
                <People />
                <Planets />
            </Main>
        );
    }
}
