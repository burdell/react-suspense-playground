import React, { Fragment } from "react";

import { Planet } from "../types";
import { Label, Value, Item, Detail, Header } from "../ui/Detail";
import Spinner from "../ui/Spinner";
import Person from "../People/Person";
import { getId } from "../utils";

const Suspense = (React as any).unstable_Suspense;
import { readPlanet } from "../data/resources";
import { delayMs } from "../config";

interface Props {
    id: string;
    restricted?: boolean;
}

const PlanetDetail = ({ restricted, id }: Props) => {
    const planet: Planet = readPlanet(id);

    return (
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
    );
};

export default (props: Props) => (
    <Detail restricted={props.restricted}>
        <Suspense fallback={<Spinner />} maxDuration={delayMs}>
            <PlanetDetail {...props} />
        </Suspense>
    </Detail>
);
