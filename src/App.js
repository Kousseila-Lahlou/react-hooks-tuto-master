import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Movie from "./pages/movie/movie";
import AddMovie from "./pages/addmovie/addmovie";
import P404 from "./pages/404/404";
import Register from "./pages/register/register";
import Login from "./pages/login/login"


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ="/">
                    <Redirect to ="/movie"/>
                </Route>
                <Route path="/movie" component={Movie}/>
                <Route path="/addmovie" component={AddMovie}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route component={P404}/>
            </Switch>
            </BrowserRouter>
    );
}

export default App;