import React, { Fragment } from "react";
import { RouteComponentProps } from "@reach/router";
import * as simpleCacheProvider from "simple-cache-provider";

import { getPerson } from "../api";
import { Person } from "../types";
import { Label, Value, Item, Detail, Header } from "../Detail";
import Planet from "../Planets/Planet";
import { getId } from "../utils";
import { cache } from "../cache";
import Spinner from "../Spinner";

const Suspense = (React as any).unstable_Suspense;

const { createResource } = simpleCacheProvider;
const PersonResource = createResource(
    async (id: string) => await getPerson(id)
);

interface Props {
    id: string;
    restricted?: boolean;
}

const PersonDetail = ({ restricted, id }: Props) => {
    const person: Person = PersonResource.read(cache, id);

    return (
        <Detail restricted={restricted}>
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
        </Detail>
    );
};

export const PersonRoute = ({ id }: RouteComponentProps<{ id: string }>) =>
    id ? (
        <PersonSuspense id={id}>
            <PersonDetail id={id} />
        </PersonSuspense>
    ) : null;

const PersonSuspense = (props: Props) => (
    <Suspense delayMs="300" placeholder={<Spinner />}>
        <PersonDetail {...props} />
    </Suspense>
);

export default PersonSuspense;
