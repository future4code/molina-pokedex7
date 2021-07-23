import styled from "styled-components";

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
    height: 70%;

    .menu {
        background-color: var(--blue-color);
        text-align: center;

        button {
            cursor: pointer;
            border: none;
            background-color: var(--blue-color);
        }
    }
`

export const Fotos = styled.div`
    height: 300px;
    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.2);

    img {
        height: 100%;
    }
`

export const Poderes = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid rgba(0, 0, 0, 0.2);
    height: 75%;
    width: 300px;
    padding-left: 30px;
`

export const PrincipaisAtaques = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;
    height: 75%;
    width: 300px;
`

export const Topo = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-around;
    border: 1px solid rgba(0, 0, 0, 0.2);
`

export const Conteudocard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding-left: 30px;
    height: 80%;
    overflow: auto;
`