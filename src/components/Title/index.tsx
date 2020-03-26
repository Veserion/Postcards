import React from 'react'
import styled from '@emotion/styled'

export default class Title extends React.Component {
    render() {
        return <Root>:Doodle Patterns
                <SubTitle>Collection of 61 seamless hand-drawn vector patterns crafted to make your next project shine ;)</SubTitle>
        </Root>
    }
}

const Root = styled.div`
font-family: 'Gaegu', cursive;
font-size: 165px;

max-width: 1140px;
margin-top: 18%;
margin-bottom: 12%;

@media(max-width: 1280px){
font-size: 100px;
margin-top: 33%;
margin-bottom: 20%;
}

`
const SubTitle = styled.div`
height: 100%;
font-size: 40px;
line-height: 50px;
`
