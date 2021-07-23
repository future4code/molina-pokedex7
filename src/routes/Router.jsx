import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Pokedex } from "../Pages/Pokedex/Pokedex";
import { PokemonsDetails } from "../Pages/PokemonDetails/PokemonsDetails";
import { Home } from "../Pages/Home/Home";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path ='/' component={Home} />
                <Route path ='/details/:name' component={PokemonsDetails} />
                <Route path ='/pokedex' component={Pokedex} />
            </Switch>
        </BrowserRouter>
    )
}
