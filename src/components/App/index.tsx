import React from 'react'
import styled from '@emotion/styled'
import BigButton from '../BigButton'
import Title from '../Title'

const Item = styled.div`
width: 200px;
height: 200px;
background: tomato;
`

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
      <BigButton />
      <Title />
      <ItemWrapper>{Array.from({ length: 23 }, (_, i) => <Item key={i} />)}</ItemWrapper>
    </Root>
  }
}

const Root = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`