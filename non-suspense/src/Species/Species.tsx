import React, { Component } from "react";
import { Link } from "@reach/router";

import { getSpecies } from "../api";
import { Species } from "../types";
import Card, { LinkStyles, CardItem } from "../Card";
import { getId } from "../utils";
import Spinner from "../Spinner";

interface State {
    loading: boolean;
    species: Species[];
}

export default class extends Component<{}, State> {
    public readonly state: State = {
        loading: false,
        species: []
    };

    public async componentDidMount() {
        this.setState({ loading: true });

        const species = await getSpecies();
        this.setState({ loading: false, species });
    }

    public render() {
        return (
            <Card title="Species">
                {this.state.loading && <Spinner />}
                {this.state.species.map(specie => (
                    <Link
                        style={LinkStyles}
                        to={`specie/${getId(specie)}`}
                        key={specie.name}
                    >
                        <CardItem>{specie.name}</CardItem>
                    </Link>
                ))}
            </Card>
        );
    }
}
