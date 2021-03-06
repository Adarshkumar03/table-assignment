import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Routes = () => {
    return (<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>                 
    </Switch>
</BrowserRouter>); 
}

export default Routes;