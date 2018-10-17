import React from "react";
import { RouteComponentProps } from "@reach/router";

import Planet from "./Planet";

export const PlanetRoute = ({ id }: RouteComponentProps<{ id: string }>) =>
    id ? <Planet id={id} /> : null;
