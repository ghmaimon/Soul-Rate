import React, { Component } from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/home/home';
import MoviesWraper from './component/movieWraper/movieWraper';
import News from './component/news/news';
import Login from './component/login/login';
import SignIn from './component/sign-In/signIn';
import Profile from './component/profile/profile';
import NavBar from './component/navBar/navBar';
import MovieDetails from './component/movieDetails/movieDetails'
class App extends Component{
  render(){
    return(
        <BrowserRouter>
          <div>
            <NavBar/>


            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/movies' component={MoviesWraper}></Route>
                <Route path='/news' component={News}></Route>               
                <Route path='/login' component={Login}></Route>
                <Route path='/sign_in' component={SignIn}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/moviesDetails' component={MovieDetails}></Route>

            </Switch>
          </div>
        </BrowserRouter>

    )
  }
}
export default App;