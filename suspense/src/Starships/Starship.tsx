import React from "react";

import { Starship } from "../types";
import { Label, Value, Item, Detail, Header } from "../ui/Detail";
import Person from "../People/Person";
import { getId } from "../utils";
import Spinner from "../ui/Spinner";

import { fetchStarship } from "../data/resources";
const Suspense = (React as any).unstable_Suspense;

interface Props {
    id: string;
    restricted?: boolean;
}

const StarshipDetail = ({ id, restricted }: Props) => {
    const starship: Starship = fetchStarship(id);

    return (
        <Detail restricted={restricted}>
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
        </Detail>
    );
};

export default (props: Props) => (
    <Suspense delayMs="300" placeholder={<Spinner />}>
        <StarshipDetail {...props} />
    </Suspense>
);
