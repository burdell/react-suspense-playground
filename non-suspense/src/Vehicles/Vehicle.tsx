import React, { Component } from "react";
import { RouteComponentProps } from "@reach/router";

import { getVehicle } from "../api";
import { Vehicle } from "../types";
import Detail from "../Detail";

interface State {
    vehicle: Vehicle | null;
}

export default class extends Component<
    RouteComponentProps<{ id: string }>,
    State
> {
    public readonly state: State = {
        vehicle: null
    };

    public async componentDidMount() {
        if (this.props.id) {
            const vehicle = await getVehicle(this.props.id);
            this.setState({ vehicle });
        }
    }

    public render() {
        return this.state.vehicle ? (
            <Detail title={this.state.vehicle.name} />
        ) : null;
    }
}
