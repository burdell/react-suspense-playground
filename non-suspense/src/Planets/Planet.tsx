import React, { Component, Fragment } from "react";

import { getPlanet } from "../data/api";
import { Planet } from "../types";
import { Label, Value, Item, Detail, Header } from "../ui/Detail";
import Spinner from "../ui/Spinner";
import Person from "../People/Person";
import { getId } from "../utils";

interface State {
    planet: Planet | null;
    loading: boolean;
}

interface Props {
    id: string;
    restricted?: boolean;
}

export default class extends Component<Props, State> {
    public readonly state: State = {
        planet: null,
        loading: false
    };

    public async componentDidMount() {
        this.setState({ loading: true });
        const planet = await getPlanet(this.props.id);
        this.setState({ planet, loading: false });
    }

    public render() {
        const { loading, planet } = this.state;
        const { restricted } = this.props;

        return (
            <Detail restricted={restricted}>
                {loading && <Spinner />}
                {planet && (
                    <Fragment>
                        <Header>{planet.name}</Header>
                        <Item>
                            <Label>Climate</Label>
                            <Value>{planet.climate}</Value>
                        </Item>
                        <Item>
                            <Label>Orbital Period</Label>
                            <Value>{planet.orbital_period}</Value>
                        </Item>
                        <Item>
                            <Label>Population</Label>
                            <Value>{planet.population}</Value>
                        </Item>
                        {!restricted &&
                            planet.residents.length > 0 && (
                                <Item>
                                    <Label>Residents</Label>
                                    {planet.residents.map(person => (
                                        <Person
                                            key={person}
                                            id={getId({ url: person })}
                                            restricted={true}
                                        />
                                    ))}
                                </Item>
                            )}
                    </Fragment>
                )}
            </Detail>
        );
    }
}
