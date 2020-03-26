/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

export default class Title extends React.Component {
    render() {
        return <Root>:Doodle Patterns 
                <SubTitle>Collection of 61 seamless hand-drawn vector patterns crafted to make your next project shine ;)</SubTitle>
            </Root>
    }
}

const Root = styled.div`
width: 864px;
height: 120px;
margin-top: 200px;
font-family: 'Gaegu', cursive;
margin-bottom: 12px;
font-size: 120px;
`
const SubTitle = styled.div`
width: 100%;
height: auto;
font-size: 40px;
line-height: 50px;
`