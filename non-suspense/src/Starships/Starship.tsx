import React, { Component, Fragment } from "react";

import { getStarShip } from "../data/api";
import { Starship } from "../types";
import { Label, Value, Item, Detail, Header } from "../ui/Detail";
import Person from "../People/Person";
import { getId } from "../utils";
import Spinner from "../ui/Spinner";

interface State {
    starship: Starship | null;
    loading: boolean;
}

interface Props {
    id: string;
    restricted?: boolean;
}

export default class extends Component<Props, State> {
    public readonly state: State = {
        starship: null,
        loading: false
    };

    public async componentDidMount() {
        if (this.props.id) {
            this.setState({ loading: true });
            const starship = await getStarShip(this.props.id);
            this.setState({ starship, loading: false });
        }
    }

    public render() {
        const { starship, loading } = this.state;
        const { restricted } = this.props;

        return (
            <Detail restricted={restricted}>
                {loading && <Spinner />}
                {starship && (
                    <Fragment>
                        <Header>{starship.name}</Header>
                        <Item>
                            <Label>Cargo Capacity</Label>
                            <Value>{starship.cargo_capacity}</Value>
                        </Item>
                        <Item>
                            <Label>Hyperdrive Rating</Label>
                            <Value>{starship.hyperdrive_rating}</Value>
                        </Item>
                        <Item>
                            <Label>Starship Class</Label>
                            <Value>{starship.starship_class}</Value>
                        </Item>
                        <Item>
                            <Label>Model</Label>
                            <Value>{starship.model}</Value>
                        </Item>
                        <Item>
                            <Label>Manufacturer</Label>
                            <Value>{starship.manufacturer}</Value>
                        </Item>
                        <Item>
                            <Label>Consumables</Label>
                            <Value>{starship.consumables}</Value>
                        </Item>
                        <Item>
                            <Label>Crew</Label>
                            <Value>{starship.crew}</Value>
                        </Item>
                        {starship.pilots.length > 0 && (
                            <Item>
                                <Label>Pilots</Label>
                                <Value>
                                    {starship.pilots.map(pilot => (
                                        <Person
                                            restricted={true}
                                            key={pilot}
                                            id={getId({ url: pilot })}
                                        />
                                    ))}
                                </Value>
                            </Item>
                        )}
                    </Fragment>
                )}
            </Detail>
        );
    }
}
