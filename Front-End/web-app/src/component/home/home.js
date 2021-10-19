import React, { Component } from 'react';
import './home.css'
import Footer from '../footer/footer'
import Carousel from '../carousel/carousel'
import Slide from '../Slides/slide';
class Home extends Component{
  render(){
    return(
        <div className="header">
            
    <Carousel/>
    <a href="" className="border-bottom">Movies Comming Soon</a><br/><Slide/>
    <a href="" className="border-bottom">Movies In Box Office</a><br/><Slide/>
    <a href="" className="border-bottom">Shows In Netflix</a><br/><Slide/>
    <a href="" className="border-bottom">Shows In Disney+</a><br/><Slide/>
    
    <Footer/>
      </div>
    )
  }
}
export default Home;