import React from "react";
import { Link } from "@reach/router";

import Card, { LinkStyles, CardItem } from "../ui/Card";
import { getId } from "../utils";
import Spinner from "../ui/Spinner";

import { fetchPeople } from "../data/resources";
const Suspense = (React as any).unstable_Suspense;

const People = () => {
    const people = fetchPeople();

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
