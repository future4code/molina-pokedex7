import React,{useContext} from 'react'
import { useHistory,useParams } from "react-router-dom";
import { Footer, CardFotos, Topo, Conteudocard, PrincipaisAtaques, Main, Container, Fotos, Header, Poderes } from './PokemonDetails/style';
import { GlobalStateContext } from '../App';
export const DetailsPage = () => {
    const {arrayPokemons,detalhesPokemos,getPictures}=useContext(GlobalStateContext)
    const history = useHistory()
    const params = useParams()
    const nome = params.name
    console.log(nome)
    const voltar = () => {
        history.goBack('')
    }
    const details= detalhesPokemos.filter((x)=>{
        return x.name===nome
    }).map((x)=>{
        return [x.moves,x.stats]
    })
    console.log('detalhes',details)
    return (

        <Container>

            <Header>
                <button onClick={voltar}>voltar</button>
                <h1>Detalhes</h1>
                <button >Adicionar ao pokedex</button>
            </Header>

            <Main>

                <CardFotos>

                    <Fotos>
                        {detalhesPokemos.map((x)=>{
                            if(x.name===nome){
                                return <img src={x.sprites.front_default}/>
                            }
                        })}
                        <p>Foto Frente.....</p>                    
                    </Fotos>

                    <Fotos>
                    {detalhesPokemos.map((x)=>{
                            if(x.name===nome){
                                return <img src={x.sprites.back_default}/>
                            }
                        })}
                        <p>Foto Costa.....</p>                    
                    </Fotos>

                </CardFotos>


                <Poderes>

                    <h2>Poderes</h2>
                    <p> <b> hp: </b> 80 </p>
                    <p> <b> attack: </b> 82 </p>
                    <p> <b> defense: </b> 83 </p>
                    <p> <b> special-attack: </b> 100 </p>
                    <p> <b> special-defense: </b> 100</p>
                    <p> <b> speed: </b> 80</p>

                </Poderes>

                <PrincipaisAtaques>

                    <Topo>
                        <p>grass</p>
                        <p>poison</p>
                    </Topo>

                    <Conteudocard>
                        <h2>Principais Ataques</h2>
                        <p>swords-dance</p>
                        <p>cut</p>
                        <p>bind</p>
                        <p>vine-whip</p>
                        <p>headbutt</p>
                    </Conteudocard>

                </PrincipaisAtaques>

            </Main>

            <Footer>
                <p> <b>Projeto Pokedex Turma Molina 2021 | Genesis | Lucas | Joice | Matheus  &copy; </b> </p>
            </Footer>
        
        </Container>
    )
}