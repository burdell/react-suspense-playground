import React from "react";
import * as simpleCacheProvider from "simple-cache-provider";

import { getPlanets } from "../api";
import { Planet } from "../types";
import Card, { LinkStyles, CardItem } from "../Card";
import { Link } from "@reach/router";
import { getId } from "../utils";
import { cache } from "../cache";

const { createResource } = simpleCacheProvider;
const planetFetcher = createResource(async () => await getPlanets());

export default () => {
    const planets = planetFetcher.read(cache);

    return (
        <Card title="Planets">
            {planets.map((planet: Planet) => (
                <Link
                    style={LinkStyles}
                    to={`planet/${getId(planet)}`}
                    key={planet.name}
                >
                    <CardItem>{planet.name}</CardItem>
                </Link>
            ))}
        </Card>
    );
};
