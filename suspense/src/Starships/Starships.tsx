import React from "react";
import * as simpleCacheProvider from "simple-cache-provider";

import { getStarShips } from "../api";
import { Starship as StarshipType } from "../types";
import Card, { LinkStyles, CardItem } from "../Card";
import { Link } from "@reach/router";
import { getId } from "../utils";
import { cache } from "../cache";
import Spinner from "../Spinner";

const Suspense = (React as any).unstable_Suspense;

const { createResource } = simpleCacheProvider;
const StarshipResource = createResource(async () => await getStarShips());

const Starships = () => {
    const ships: StarshipType[] = StarshipResource.read(cache);

    return (
        <Card title="Star Ships">
            {ships.map(ship => (
                <Link
                    style={LinkStyles}
                    to={`ship/${getId(ship)}`}
                    key={ship.name}
                >
                    <CardItem>{ship.name}</CardItem>
                </Link>
            ))}
        </Card>
    );
};

export default () => (
    <Suspense delayMs={30000} fallback={<Spinner />}>
        <Starships />
    </Suspense>
);
