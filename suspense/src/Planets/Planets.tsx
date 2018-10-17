import React, { Fragment } from "react";

import { Planet as PlanetType } from "../types";
import Card, { LinkStyles, CardItem } from "../ui/Card";
import { Link } from "@reach/router";
import { getId } from "../utils";
import Spinner from "../ui/Spinner";

const Suspense = (React as any).unstable_Suspense;
import { readPlanets } from "../data/resources";

const Planets = () => {
    const planets: PlanetType[] = readPlanets();

    return (
        <Fragment>
            {planets.map(planet => (
                <Link
                    style={LinkStyles}
                    to={`planet/${getId(planet)}`}
                    key={planet.name}
                >
                    <CardItem>{planet.name}</CardItem>
                </Link>
            ))}
        </Fragment>
    );
};

export default () => (
    <Card title="Planets">
        <Suspense fallback={<Spinner />}>
            <Planets />
        </Suspense>
    </Card>
);
