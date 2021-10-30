import React, { Component } from 'react';
//import './moviesWraper.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

import { Button } from 'bootstrap';
class MoviesWraper extends Component{

    state={
        listMovies:[]
    }

    async componentDidMount() {
        await axios.get("http://0.0.0.0:8000/api/movies/movies/", {
            headers: {
                "Authorization": "Token 14c3eaaa37d8a17430b3a866ed0bd1b4fa2da432"
            }
        }).then(
            (res) => {
                this.setState({...this.state, listMovies: res.data})
                console.log(res.data);
            }
        )

        console.log(this.state.listMovies);
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

export default MoviesWraper;