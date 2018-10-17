import React from "react";
import { RouteComponentProps } from "@reach/router";

import Starship from "./Starship";

export const StarshipRoute = ({ id }: RouteComponentProps<{ id: string }>) =>
    id ? <Starship id={id} /> : null;
