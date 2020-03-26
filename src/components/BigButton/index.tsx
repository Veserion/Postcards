/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import bgWithoutFocus from '../../icons/bigbutton/withoutFocus.png'
import bgWithFocus from '../../icons/bigbutton/withFocus.png'
export default class BigButton extends React.Component {
    render() {
        return <Root>
            <Text>Grab all for <b>$35</b></Text>
        </Root>
    }
}

const Root = styled.div`
/* transition: .5s; */
position: fixed;
top: 5%;
right: 5%;
display: flex;
justify-content: center;
align-items: center;
width: 245px;
height: 72px;
padding: 16px 24px;
background-image: url(${bgWithFocus});
background-size: 100% 100%;
:hover {
    background-image: url(${bgWithoutFocus});
}
`
const Text = styled.div`
width: auto;
height: auto;
font-family: 'Gaegu', cursive;
font-size: 28px;
b {font-weight: bold;}
`