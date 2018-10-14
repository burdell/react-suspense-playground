import React, { Component } from "react";

import { getVehicles } from "../api";
import { Vehicle } from "../types";
import Card, { LinkStyles, CardItem } from "../Card";
import { Link } from "@reach/router";
import { getId } from "../utils";
import Spinner from "../Spinner";

interface State {
    loading: boolean;
    vehicles: Vehicle[];
}

export default class extends Component<{}, State> {
    public readonly state: State = {
        loading: false,
        vehicles: []
    };

    public async componentDidMount() {
        this.setState({ loading: true });

        const vehicles = await getVehicles();
        this.setState({ loading: false, vehicles });
    }

    public render() {
        return (
            <Card title="Vehicles">
                {this.state.loading && <Spinner />}
                {this.state.vehicles.map(vehicle => (
                    <Link
                        style={LinkStyles}
                        to={`vehicle/${getId(vehicle)}`}
                        key={vehicle.name}
                    >
                        <CardItem>{vehicle.name}</CardItem>
                    </Link>
                ))}
            </Card>
        );
    }
}
