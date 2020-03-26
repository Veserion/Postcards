/** @jsx jsx */
import styled from "@emotion/styled";
import React from "react";
import {css, jsx} from "@emotion/core";
import Label from "./Label";

const Root = styled.div`
width: 255px;
max-width: 255px;
height: 255px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
flex-grow: 1;
border-radius: 10%;
position: relative;
transform: scale(.98);
transition: .5s;
@media(max-width: 1280px){
width: 300px;
max-width: 300px;
height: 300px;
}

@media(max-width: 1080px){
width: 350px;
max-width: 350px;
height: 350px;
}
@media(max-width: 768px){
width: 300px;
max-width: 300px;
height: 300px;
}
:hover{
  transform: scale(1);
}
`


const Item: React.FunctionComponent<{ url: string }> = ({url}) =>
    <Root css={css`background-image: url(${url});`}>
        <Label>$1</Label>
    </Root>

export default Item
