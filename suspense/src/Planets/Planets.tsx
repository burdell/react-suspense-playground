import React from "react";

import { Planet as PlanetType } from "../types";
import Card, { LinkStyles, CardItem } from "../ui/Card";
import { Link } from "@reach/router";
import { getId } from "../utils";
import Spinner from "../ui/Spinner";

const Suspense = (React as any).unstable_Suspense;
import { fetchPlanets } from "../data/resources";

const Planets = () => {
    const planets: PlanetType[] = fetchPlanets();

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
    <Suspense delayMs={300} fallback={<Spinner />}>
        <Planets />
    </Suspense>
);
