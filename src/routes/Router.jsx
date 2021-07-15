import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import  HeaderTest  from "../Headers/HeaderTest";
import { HomePage } from "../Pages/HomePage";
import { DetailsPage } from "../Pages/DetailsPage";
import { CarPage } from "../Pages/CarPage";

export const Router = () =>{
    return(
        <BrowserRouter>
         <HeaderTest/>
            <Switch>
            <Route exact path="/">
          <HomePage />
        </Route>
                <Route path ='/details' component={DetailsPage} />
                <Route path ='/carPage' exact component={CarPage} />
            </Switch>
        </BrowserRouter>
    )
}
