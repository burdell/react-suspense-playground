import React, { Component } from "react";
import { Link } from "@reach/router";

import { getPeople } from "../api";
import { Person } from "../types";
import Card, { LinkStyles, CardItem } from "../Card";
import { getId } from "../utils";
import Spinner from "../Spinner";

interface State {
    loading: boolean;
    people: Person[];
}

export default class extends Component<{}, State> {
    public readonly state: State = {
        loading: false,
        people: []
    };

    public async componentDidMount() {
        this.setState({ loading: true });

        const people = await getPeople();
        this.setState({ loading: false, people });
    }

    public render() {
        return (
            <Card title="People">
                {this.state.loading && <Spinner />}
                {this.state.people.map(person => (
                    <Link
                        style={LinkStyles}
                        to={`person/${getId(person)}`}
                        key={person.name}
                    >
                        <CardItem>{person.name}</CardItem>
                    </Link>
                ))}
            </Card>
        );
    }
}
