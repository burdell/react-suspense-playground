import React from "react";
import * as simpleCacheProvider from "simple-cache-provider";

import { getStarShips } from "../api";
import { Starship } from "../types";
import Card, { LinkStyles, CardItem } from "../Card";
import { Link } from "@reach/router";
import { getId } from "../utils";
import { cache } from "../cache";

const { createResource } = simpleCacheProvider;
const starshipFetcher = createResource(async () => await getStarShips());

export default () => {
    const ships = starshipFetcher.read(cache);
    return (
        <Card title="Star Ships">
            {ships.map((ship: Starship) => (
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
