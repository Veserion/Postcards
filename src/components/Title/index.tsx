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
margin-top: 200px;
font-family: 'Gaegu', cursive;
margin-bottom: 12px;
font-size: 120px;
text-align: center;
`
const SubTitle = styled.div`
height: 100%;
font-size: 40px;
line-height: 50px;
margin: 0 100px;
`
