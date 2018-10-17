import React, { Fragment } from "react";

import { Starship as StarshipType } from "../types";
import Card, { LinkStyles, CardItem } from "../ui/Card";
import { Link } from "@reach/router";
import { getId } from "../utils";
import Spinner from "../ui/Spinner";

import { readStarships } from "../data/resources";
const Suspense = (React as any).unstable_Suspense;

const Starships = () => {
    const ships: StarshipType[] = readStarships();

    return (
        <Fragment>
            {ships.map(ship => (
                <Link
                    style={LinkStyles}
                    to={`ship/${getId(ship)}`}
                    key={ship.name}
                >
                    <CardItem>{ship.name}</CardItem>
                </Link>
            ))}
        </Fragment>
    );
};

export default () => (
    <Card title="Starships">
        <Suspense fallback={<Spinner />}>
            <Starships />
        </Suspense>
    </Card>
);
