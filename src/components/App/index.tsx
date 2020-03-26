/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import BigButton from '../BigButton'
import Title from '../Title'
import Item from "../Item";
import {css, jsx} from "@emotion/core";
import {goods} from "../../assets/goods";

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -20px;
  & > * {
    margin: 20px;
  }
`

export default class App extends React.Component {
    render() {
        return <Root>
            <BigButton/>
            <Title/>
            <ItemWrapper>
                {goods.map((url: any, i: number) =>
                    <Item css={css`background-image: url(${url.default || url});`} key={i}/>
                )}
            </ItemWrapper>
        </Root>
    }

}

const Root = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`
