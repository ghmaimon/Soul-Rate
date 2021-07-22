import React, { Component } from 'react';
import './home.css'
import Footer from '../footer/footer'
import Carousel from '../carousel/carousel'
class Home extends Component{
  render(){
    return(
        <div className="header">
            
    <Carousel/>
    <a href="" className="border-bottom">Movies Comming Soon</a><br/>
    <a href="" className="border-bottom">Movies In Box Office</a><br/>
    <a href="" className="border-bottom">Shows In Netflix</a><br/>
    <a href="" className="border-bottom">Shows In Disney+</a><br/>

    <Footer/>
      </div>
    )
  }
}
export default Home;