import React from 'react'
import {goods} from "../../assets/goods";
import Item from "./Item";
import styled from "@emotion/styled";

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -20px;
  
  & > * {
    margin: 20px;
  }
`

//https://codepen.io/levinmejia/pen/zrddrv

export default class Items extends React.Component {
    render() {
        return <Root>
            {goods.map((url: any, i: number) => <Item url={url.default || url} key={i}/>)}
        </Root>
    }
}
