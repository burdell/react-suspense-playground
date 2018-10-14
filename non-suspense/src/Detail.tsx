import React, { Component } from "react";
import styled from "react-emotion";

interface Props {
    title: string;
}

const Detail = styled("div")({
    width: "80%",
    margin: "0 auto",
    boxShadow: "0px 1px 5px 0px rgba(166,166,166,1)",
    backgroundColor: "#BA3622",
    borderRadius: "2em",
    padding: ".5em",
    color: "#F2F0DF"
});

export default class extends Component<Props> {
    public render() {
        return (
            <Detail>
                <h2>{this.props.title}</h2>
                <div>{this.props.children}</div>
            </Detail>
        );
    }
}
