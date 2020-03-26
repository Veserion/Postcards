import React from 'react'
import styled from '@emotion/styled'
import BigButton from '../BigButton'
import Title from '../Title'
import Items from "../Items";

const Root = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: #fcfad7;
`

export default class App extends React.Component {
    render() {
        return <Root>
            <BigButton/>
            <Title/>
            <Items/>
        </Root>
    }

}
