import React, { Component } from "react";

import { getStarShips } from "../api";
import { Starship } from "../types";
import Card, { LinkStyles, CardItem } from "../Card";
import { Link } from "@reach/router";
import { getId } from "../utils";
import Spinner from "../Spinner";

interface State {
    loading: boolean;
    ships: Starship[];
}

export default class extends Component<{}, State> {
    public readonly state: State = {
        loading: false,
        ships: []
    };

    public async componentDidMount() {
        this.setState({ loading: true });

        const ships = await getStarShips();
        this.setState({ loading: false, ships });
    }

    public render() {
        return (
            <Card title="Star Ships">
                {this.state.loading && <Spinner />}
                {this.state.ships.map(ship => (
                    <Link
                        style={LinkStyles}
                        to={`ship/${getId(ship)}`}
                        key={ship.name}
                    >
                        <CardItem>{ship.name}</CardItem>
                    </Link>
                ))}
            </Card>
        );
    }
}
