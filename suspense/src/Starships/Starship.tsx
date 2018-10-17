import React from "react";
import { RouteComponentProps } from "@reach/router";
import * as simpleCacheProvider from "simple-cache-provider";

import { getStarShip } from "../api";
import { Starship } from "../types";
import { Label, Value, Item, Detail, Header } from "../Detail";
import Person from "../People/Person";
import { getId } from "../utils";
import Spinner from "../Spinner";
import { cache } from "../cache";

interface Props {
    id: string;
    restricted?: boolean;
}

const Suspense = (React as any).unstable_Suspense;

const { createResource } = simpleCacheProvider;
const StarshipResource = createResource(
    async (id: string) => await getStarShip(id)
);

const StarshipDetail = ({ id, restricted }: Props) => {
    const starship: Starship = StarshipResource.read(cache, id);

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

export const StarshipRoute = ({ id }: RouteComponentProps<{ id: string }>) =>
    id ? <StarshipSuspense id={id} /> : null;

const StarshipSuspense = (props: Props) => (
    <Suspense delayMs="300" placeholder={<Spinner />}>
        <StarshipDetail {...props} />
    </Suspense>
);

export default StarshipSuspense;
