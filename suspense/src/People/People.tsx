import React, { Fragment } from "react";
import { Link } from "@reach/router";

import Card, { LinkStyles, CardItem } from "../ui/Card";
import { getId } from "../utils";
import Spinner from "../ui/Spinner";

import { readPeople } from "../data/resources";
const Suspense = (React as any).unstable_Suspense;
import { delayMs } from "../config";

const People = () => {
    const people = readPeople();

    return (
        <Fragment>
            {people.map((person: any) => (
                <Link
                    style={LinkStyles}
                    to={`person/${getId(person)}`}
                    key={person.name}
                >
                    <CardItem>{person.name}</CardItem>
                </Link>
            ))}
        </Fragment>
    );
};

export default () => (
    <Card title="People">
        <Suspense fallback={<Spinner />} maxDuration={delayMs}>
            <People />
        </Suspense>
    </Card>
);
