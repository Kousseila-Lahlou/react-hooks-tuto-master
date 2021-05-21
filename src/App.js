import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Movie from "./pages/movie/movie";
import AddMovie from "./pages/addmovie/addmovie";
import P404 from "./pages/404/404";


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ="/">
                    <Redirect to ="/movie"/>
                </Route>
                <Route path="/movie" component={Movie}/>
                <Route path="/addmovie" component={AddMovie}/>
                <Route component={P404}/>
            </Switch>
            </BrowserRouter>
    );
}

export default App;