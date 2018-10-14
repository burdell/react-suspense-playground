import React, { Component } from "react";
import { RouteComponentProps } from "@reach/router";

import { getFilm } from "../api";
import { Film } from "../types";
import Detail from "../Detail";

interface State {
    film: Film | null;
}

export default class extends Component<
    RouteComponentProps<{ id: string }>,
    State
> {
    public readonly state: State = {
        film: null
    };

    public async componentDidMount() {
        if (this.props.id) {
            const film = await getFilm(this.props.id);
            this.setState({ film });
        }
    }

    public render() {
        return this.state.film ? (
            <Detail title={this.state.film.title} />
        ) : null;
    }
}
