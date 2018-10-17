import React from "react";
import { Link } from "@reach/router";
import * as simpleCacheProvider from "simple-cache-provider";

import { getPeople } from "../api";
import Card, { LinkStyles, CardItem } from "../Card";
import { getId } from "../utils";
import { cache } from "../cache";
import Spinner from "../Spinner";

const Suspense = (React as any).unstable_Suspense;

const { createResource } = simpleCacheProvider;
const peopleFetcher = createResource(async () => await getPeople());

const People = () => {
    const people = peopleFetcher.read(cache);

    return (
        <Card title="People">
            {people.map((person: any) => (
                <Link
                    style={LinkStyles}
                    to={`person/${getId(person)}`}
                    key={person.name}
                >
                    <CardItem>{person.name}</CardItem>
                </Link>
            ))}
        </Card>
    );
};

export default () => (
    <Suspense delayMs={30000} fallback={<Spinner />}>
        <People />
    </Suspense>
);
