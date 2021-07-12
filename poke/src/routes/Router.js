import { BrowserRouter,Switch, Route} from "react-router-dom";
import React from "react";
import { CarPage } from "../Pages/CarPage";
import { DetailsPage } from "../Pages/DetailsPage";
import { HomePage } from "../Pages/HomePage";

export const Router = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path ='/' >
                <HomePage/>
            </Route>
            <Route  exact path ='/details'>
                <DetailsPage/>
            </Route>
            <Route  exact path ='/carPage'>
                <CarPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
