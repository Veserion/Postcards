import React from 'react'
import styled from '@emotion/styled'

export default class Items extends React.Component {
    render() {
        return <Root>
            <ItemWrapper>
                {Array.from({ length: 23 }, (_, i) => <Item key={i} />)}
            </ItemWrapper>
        </Root>
    }
}

const Root = styled.div`
width: auto;
max-width: 85%;
max-height: 1000px;
display: flex;
justify-content: center;
`

const Item = styled.div`
width: 200px;
height: 200px;
background: tomato;
`

const ItemWrapper = styled.div`
margin: -20px;
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: wrap;
& > * {
margin: 20px;
}
`