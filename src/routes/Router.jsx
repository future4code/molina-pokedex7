import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { CarPage } from "../Pages/CarPage";
import { DetailsPage } from "../Pages/DetailsPage";
import { HomePage } from "../Pages/HomePage";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path ='/' component={HomePage} />
                <Route path ='/details/:name' component={DetailsPage} />
                <Route path ='/carPage' exact component={CarPage} />
            </Switch>
        </BrowserRouter>
    )
}
