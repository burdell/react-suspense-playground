import React, { Component } from "react";
import { Link } from "@reach/router";

import { getFilms } from "../api";
import { Film } from "../types";
import Card, { CardItem, LinkStyles } from "../Card";
import { getId } from "../utils";
import Spinner from "../Spinner";

interface State {
    loading: boolean;
    films: Film[];
}

export default class extends Component<{}, State> {
    public readonly state: State = {
        loading: false,
        films: []
    };

    public async componentDidMount() {
        this.setState({ loading: true });

        const films = await getFilms();
        this.setState({ loading: false, films });
    }

    public render() {
        return (
            <Card title="Films">
                {this.state.loading && <Spinner />}
                {this.state.films.map(film => (
                    <Link
                        style={LinkStyles}
                        to={`film/${getId(film)}`}
                        key={film.title}
                    >
                        <CardItem>{film.title}</CardItem>
                    </Link>
                ))}
            </Card>
        );
    }
}
