import React, { Component } from 'react';
import './moviesWraper.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

import { Button } from 'bootstrap';
class MoviesWraper extends Component{

    state={
        listMovies:[]
    }

    componentDidMount() {
        axios.get("0.0.0.0")
    }
    render(){

        return(
            <div className="movies">
                <div className="container">
                    <div className="row pt-5">

                    </div>
                </div> 
            </div>     
        )
    }
}