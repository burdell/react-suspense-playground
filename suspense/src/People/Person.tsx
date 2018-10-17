import React, { Fragment } from "react";

import { Person } from "../types";
import { Label, Value, Item, Detail, Header } from "../ui/Detail";
import Planet from "../Planets/Planet";
import { getId } from "../utils";
import Spinner from "../ui/Spinner";

import { readPerson } from "../data/resources";
const Suspense = (React as any).unstable_Suspense;

interface Props {
    id: string;
    restricted?: boolean;
}

const PersonDetail = ({ restricted, id }: Props) => {
    const person: Person = readPerson(id);

    return (
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
    );
};

export default (props: Props) => (
    <Detail restricted={props.restricted}>
        <Suspense fallback={<Spinner />}>
            <PersonDetail {...props} />
        </Suspense>
    </Detail>
);
