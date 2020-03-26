import styled from "@emotion/styled";

const Item = styled.div`
width: 255px;
height: 255px;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
flex-grow: 1;
@media(max-width: 1280px){
width: 300px;
height: 300px;
}

@media(max-width: 1080px){
width: 350px;
height: 350px;
}
@media(max-width: 768px){
width: 300px;
height: 300px;
}
`

export default Item
