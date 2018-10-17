import React from "react";
import { RouteComponentProps } from "@reach/router";

import Person from "./Person";

export const PersonRoute = ({ id }: RouteComponentProps<{ id: string }>) =>
    id ? <Person id={id} /> : null;
