import React from "react";
import * as simpleCacheProvider from "simple-cache-provider";

import { getPlanet } from "../api";
import { Planet } from "../types";
import { Label, Value, Item, Detail, Header } from "../ui/Detail";
import Spinner from "../ui/Spinner";
import Person from "../People/Person";
import { getId } from "../utils";
import { cache } from "../cache";

const Suspense = (React as any).unstable_Suspense;

const { createResource } = simpleCacheProvider;
const PlanetResource = createResource(
    async (id: string) => await getPlanet(id)
);

interface Props {
    id: string;
    restricted?: boolean;
}

const PlanetDetail = ({ restricted, id }: Props) => {
    const planet: Planet = PlanetResource.read(cache, id);

    return (
        <Detail restricted={restricted}>
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
        </Detail>
    );
};

export default (props: Props) => (
    <Suspense delayMs="300" placeholder={<Spinner />}>
        <PlanetDetail {...props} />
    </Suspense>
);
