import React, { Component } from "react";

import { getPlanets } from "../api";
import { Planet } from "../types";
import Card, { LinkStyles, CardItem } from "../Card";
import { Link } from "@reach/router";
import { getId } from "../utils";
import Spinner from "../Spinner";

interface State {
    loading: boolean;
    planets: Planet[];
}

export default class extends Component<{}, State> {
    public readonly state: State = {
        loading: false,
        planets: []
    };

    public async componentDidMount() {
        this.setState({ loading: true });

        const planets = await getPlanets();
        this.setState({ loading: false, planets });
    }

    public render() {
        return (
            <Card title="Planets">
                {this.state.loading && <Spinner />}
                {this.state.planets.map(planet => (
                    <Link
                        style={LinkStyles}
                        to={`planet/${getId(planet)}`}
                        key={planet.name}
                    >
                        <CardItem>{planet.name}</CardItem>
                    </Link>
                ))}
            </Card>
        );
    }
}
