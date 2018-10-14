import React, { ReactNode } from "react";
import styled from "react-emotion";

interface Props {
    children: ReactNode;
    title: string;
}

const Card = styled("div")({
    padding: "1em",
    backgroundColor: "#BA3622",
    color: "#F2F0DF",
    width: "400px",
    margin: ".7em",
    boxShadow: "0px 1px 5px 0px rgba(166,166,166,1)",
    lineHeight: "1.5",
    borderRadius: "2em"
});

const Header = styled("div")({
    borderBottom: "1px solid #E5DDCB",
    fontSize: "2em",
    marginBottom: ".4em"
});

export const LinkStyles = {
    color: "inherit",
    textDecoration: "none"
};

export const CardItem = styled("div")({
    "margin": "0 .2em",
    "&:hover": {
        color: "#ACCEC0"
    },
    "cursor": "pointer"
});

export default ({ children, title }: Props) => (
    <Card>
        <Header>{title}</Header>
        {children}
    </Card>
);
