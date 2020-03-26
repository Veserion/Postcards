/** @jsx jsx */
import styled from "@emotion/styled";
import React from "react";
import {css, jsx} from "@emotion/core";
import Label from "./Label";

const Root = styled.div`
display: flex;
align-items: center;
justify-content: center;
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

.getIt{
  display: none;
}

:hover{
  transform: scale(1);
  .getIt{
    display: flex;
  }
}
`

const Button = styled.div`
z-index: 20;
display: block;
position: relative;
margin-top: auto;
margin-bottom: auto;
padding: 12px 24px;
transform: translate(0,-3px);
font-weight: 700;
font-size: 32px;
transition: .3s;
text-decoration: none;
background-image: url("https://uploads-ssl.webflow.com/5e3a87f2e0b913395a7f1292/5e3abc9838304466157e9e8b_getit-bg.png");
background-position: 0 0;
background-size: 100% 100%;
background-repeat: no-repeat;
:hover{
background-image: url("https://uploads-ssl.webflow.com/5e3a87f2e0b913395a7f1292/5e3c427728facfe83a118874_getit-bg-hover.png");
}
`

const Item: React.FunctionComponent<{ url: string }> = ({url}) =>
    <Root css={css`background-image: url(${url});`}>
        <Label>$1</Label>
        <Button className="getIt">Хочу!</Button>
    </Root>;

export default Item
