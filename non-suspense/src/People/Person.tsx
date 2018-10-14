import React, { Component } from "react";
import { RouteComponentProps } from "@reach/router";

import { getPerson } from "../api";
import { Person } from "../types";
import Detail from "../Detail";

interface State {
    person: Person | null;
}

export default class extends Component<
    RouteComponentProps<{ id: string }>,
    State
> {
    public readonly state: State = {
        person: null
    };

    public async componentDidMount() {
        if (this.props.id) {
            const person = await getPerson(this.props.id);
            this.setState({ person });
        }
    }

    public render() {
        return this.state.person ? (
            <Detail title={this.state.person.name} />
        ) : null;
    }
}
