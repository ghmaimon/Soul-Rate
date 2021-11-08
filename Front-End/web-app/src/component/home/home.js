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

    
    <Footer/>
      </div>
    )
  }
}
export default Home;