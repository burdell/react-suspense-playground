import React from "react";
import styled from "react-emotion";

import Loader from "react-loader-spinner";

const LoaderStyle = styled("div")({ textAlign: "center" });

export default () => (
    <LoaderStyle>
        <Loader type="Puff" color="#00BFFF" height="50" width="50" />
    </LoaderStyle>
);
