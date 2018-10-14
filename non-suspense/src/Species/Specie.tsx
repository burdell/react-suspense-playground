import React, { Component } from "react";
import { RouteComponentProps } from "@reach/router";

import { getSpecie } from "../api";
import { Species } from "../types";
import Detail from "../Detail";

interface State {
    specie: Species | null;
}

export default class extends Component<
    RouteComponentProps<{ id: string }>,
    State
> {
    public readonly state: State = {
        specie: null
    };

    public async componentDidMount() {
        if (this.props.id) {
            const specie = await getSpecie(this.props.id);
            this.setState({ specie });
        }
    }

    public render() {
        return this.state.specie ? (
            <Detail title={this.state.specie.name} />
        ) : null;
    }
}
