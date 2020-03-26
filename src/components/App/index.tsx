import React from 'react'
import styled from '@emotion/styled'
import BigButton from '../BigButton'
import Title from '../Title'


export default class App extends React.Component {
  render () {
    return <Root>
      <BigButton/>
      <Title/>
    </Root>
  }
}

const Root = styled.div `
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`