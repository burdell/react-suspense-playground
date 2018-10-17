import styled from "react-emotion";

export const Detail = styled("div")<{ restricted?: boolean }>(
    {
        width: "80%",
        margin: "0 auto",
        boxShadow: "0px 1px 5px 0px rgba(166,166,166,1)",
        backgroundColor: "#BA3622",
        borderRadius: "2em",
        padding: ".5em",
        color: "#F2F0DF",
        minHeight: "2em"
    },
    ({ restricted }) => (restricted ? { fontSize: ".7em" } : {})
);

export const Label = styled("label")({
    fontWeight: 400
});

export const Value = styled("div")({
    fontSize: "2em"
});
export const Item = styled("div")({});

export const Header = styled("h1")({});
