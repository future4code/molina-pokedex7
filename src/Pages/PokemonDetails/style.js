import styled from "styled-components";



export const Container = styled.div`

display: block;
margin: 8px;

`

export const Header = styled.div`

    display: flex;
    min-width: -webkit-fill-available;
    justify-content: space-around;
    height: 8vh;
    background: rgb(48, 167, 215);
    align-items: center;
    color: #fcfcfc;

`

export const Main = styled.div`

    height: 80vh;
    margin: 20px 10vw;
    display: flex;
    justify-content: space-evenly;

`
export const CardFotos = styled.div`  

    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;
    -webkit-box-pack: justify;
    height: 70%;

`
export const Fotos = styled.div`

    height: 100px;
    background: rgb(31 208 209);   

`
export const Poderes = styled.div`

display: flex;
align-self: center;
flex-direction: column;
justify-content: space-around;
background: rgb(31 208 209);
height: 75%;
width: 300px;
padding-left: 30px;



`

export const PrincipaisAtaques = styled.div`

display: flex;
flex-direction: column;
align-self: center;
justify-content: space-between;
-webkit-box-pack: justify;
height: 75%;
width: 300px;

`
export const Topo = styled.div`

    height: 10%;
    display: flex;
    justify-content: space-around;
    background: rgb(31 208 209);

`
export const Conteudocard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: rgb(31 208 209);
    padding-left: 30px;
    height: 80%;

`
export const Footer = styled.div`
     
    display: flex;
    height: 8vh;
    color: #fcfcfc;
    background: rgb(48, 167, 215);
    align-items: center;
    justify-content: center;    

`