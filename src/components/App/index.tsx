import React from 'react'
import styled from '@emotion/styled'
import BigButton from '../BigButton'
import Title from '../Title'
import Items from "../Items";

const Background = styled.div`
background-color: #fcfad7;
display: flex;
justify-content: center;
`

const Root = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 90vw;
max-width: 1140px;
font-family: 'Amatic SC', cursive;
`

export default class App extends React.Component {
    render() {
        return <Background>
            <Root>
                <BigButton/>
                <Title/>
                <Items/>
            </Root>
        </Background>
    }

}
