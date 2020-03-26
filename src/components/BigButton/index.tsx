import React from 'react'
import styled from '@emotion/styled'
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

position: fixed;
left: auto;
top: 5%;
right: 10%;
z-index: 39;
overflow: visible;
padding: 16px 24px;
background-position: 50% 50%;
background-size: 100% 100%;
background-attachment: scroll;
transform: translate(0,-3px);
text-decoration: none;

transition: .4s;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${bgWithFocus});
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
