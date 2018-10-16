import React from "react";
import { Link } from "@reach/router";
import * as simpleCacheProvider from "simple-cache-provider";

import { getPeople } from "../api";
import Card, { LinkStyles, CardItem } from "../Card";
import { getId } from "../utils";
import { cache } from "../cache";

const { createResource } = simpleCacheProvider;
const peopleFetcher = createResource(async () => await getPeople());

export default () => {
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
