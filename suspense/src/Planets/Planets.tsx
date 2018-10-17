import React from "react";
import * as simpleCacheProvider from "simple-cache-provider";

import { getPlanets } from "../api";
import { Planet as PlanetType } from "../types";
import Card, { LinkStyles, CardItem } from "../Card";
import { Link } from "@reach/router";
import { getId } from "../utils";
import { cache } from "../cache";
import Spinner from "../Spinner";

const Suspense = (React as any).unstable_Suspense;

const { createResource } = simpleCacheProvider;
const PlanetResource = createResource(async () => await getPlanets());

const Planets = () => {
    const planets: PlanetType[] = PlanetResource.read(cache);

    return (
        <Card title="Planets">
            {planets.map(planet => (
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

export default () => (
    <Suspense delayMs={30000} fallback={<Spinner />}>
        <Planets />
    </Suspense>
);
