import React, { Component } from "react";
import { RouteComponentProps } from "@reach/router";

import { getPlanet } from "../api";
import { Planet } from "../types";
import Detail from "../Detail";

interface State {
    planet: Planet | null;
}

export default class extends Component<
    RouteComponentProps<{ id: string }>,
    State
> {
    public readonly state: State = {
        planet: null
    };

    public async componentDidMount() {
        if (this.props.id) {
            const planet = await getPlanet(this.props.id);
            this.setState({ planet });
        }
    }

    public render() {
        return this.state.planet ? (
            <Detail title={this.state.planet.name} />
        ) : null;
    }
}
