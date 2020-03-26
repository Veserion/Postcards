import styled from "@emotion/styled";

const Item = styled.div`
width: 255px;
max-width: 255px;
height: 255px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
flex-grow: 1;
border-radius: 10%;

@media(max-width: 1280px){
width: 300px;
max-width: 300px;
height: 300px;
}

@media(max-width: 1080px){
width: 350px;
max-width: 350px;
height: 350px;
}
@media(max-width: 768px){
width: 300px;
max-width: 300px;
height: 300px;
}
`

export default Item
