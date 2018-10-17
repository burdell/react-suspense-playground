import React, { Component, Fragment } from "react";

import { getPerson } from "../data/api";
import { Person } from "../types";
import { Label, Value, Item, Detail, Header } from "../ui/Detail";
import Spinner from "../ui/Spinner";
import Planet from "../Planets/Planet";
import { getId } from "../utils";

interface State {
    person: Person | null;
    loading: boolean;
}

interface Props {
    id: string;
    restricted?: boolean;
}

export default class extends Component<Props, State> {
    public readonly state: State = {
        person: null,
        loading: false
    };

    public async componentDidMount() {
        this.setState({ loading: true });
        const person = await getPerson(this.props.id);
        this.setState({ person, loading: false });
    }

    public render() {
        const { loading, person } = this.state;
        const { restricted } = this.props;
        return (
            <Detail restricted={restricted}>
                {loading && <Spinner />}
                {person && (
                    <Fragment>
                        <Header>{person.name}</Header>
                        <Item>
                            <Label>Birth Year</Label>
                            <Value>{person.birth_year}</Value>
                        </Item>
                        <Item>
                            <Label>Dat Mass</Label>
                            <Value>{person.mass}</Value>
                        </Item>
                        <Item>
                            <Label>Gender</Label>
                            <Value>{person.gender}</Value>
                        </Item>
                        {!restricted && (
                            <Item>
                                <Label>Homeworld</Label>
                                <Planet id={getId({ url: person.homeworld })} />
                            </Item>
                        )}
                    </Fragment>
                )}
            </Detail>
        );
    }
}
