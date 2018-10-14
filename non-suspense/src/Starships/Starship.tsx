import React, { Component } from "react";
import { RouteComponentProps } from "@reach/router";

import { getStarShip } from "../api";
import { Starship } from "../types";
import Detail from "../Detail";

interface State {
    starship: Starship | null;
}

export default class extends Component<
    RouteComponentProps<{ id: string }>,
    State
> {
    public readonly state: State = {
        starship: null
    };

    public async componentDidMount() {
        if (this.props.id) {
            const starship = await getStarShip(this.props.id);
            this.setState({ starship });
        }
    }

    public render() {
        return this.state.starship ? (
            <Detail title={this.state.starship.name} />
        ) : null;
    }
}
