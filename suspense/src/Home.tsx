import React, { Component } from "react";
import styled from "react-emotion";
import { RouteComponentProps } from "@reach/router";

import Ships from "./Starships/Starships";
import Planets from "./Planets/Planets";
import People from "./People/People";
import Spinner from "./Spinner";

const Main = styled("div")({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around"
});

const Suspense = (React as any).unstable_Suspense;

export default class extends Component<RouteComponentProps> {
    public render() {
        return (
            <Main>
                <Suspense delayMs={30000} fallback={<Spinner />}>
                    <Ships />
                </Suspense>
                <Suspense delayMs={30000} fallback={<Spinner />}>
                    <People />
                </Suspense>
                <Suspense delayMs={30000} fallback={<Spinner />}>
                    <Planets />
                </Suspense>
            </Main>
        );
    }
}
