import React,{Component} from 'react';
import item1 from '../../../images/item1.jpg'
import item2 from '../../../images/item2.jpg'
import item3 from '../../../images/item3.jpg'
import item4 from '../../../images/item4.jpg'
import {CarouselItem } from 'reactstrap';
import "./carousel.css"
class Carousel extends Component{
    render(){
        return(
            <div>
              <div id="card" className="col-8 card">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                            <button className="carousel-control-prev btn btn-outline-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next btn btn-outline-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                            </button>

                            
                          <div className="carousel-item active ">
                              <img src={item1} className="w-25 rounded mx-auto d-block " alt="..."/>
                              <div id="movieCaption" className="carousel-caption d-none d-md-block">
                                <h5 >Movie Title</h5>
                                <p>details............</p>
                              </div>
                          </div>

                          <div className="carousel-item">
                            <img src={item2} className="w-25 rounded mx-auto d-block" alt="..."/>
                            <div id="movieCaption" className="carousel-caption d-none d-md-block">
                                <h5 >Movie Title</h5>
                                <p>details............</p>
                            </div>
                          </div>
                          <div className="carousel-item ">
                            <img src={item3} className="w-25 rounded mx-auto d-block" alt="..."/>
                            <div id="movieCaption" className="carousel-caption d-none d-md-block">
                                <h5 >Movie Title</h5>
                                <p>details............</p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img src={item4} className="w-25 rounded mx-auto d-block" alt="..."/>
                            <div id="movieCaption" className="carousel-caption d-none d-md-block">
                                <h5 >Movie Title</h5>
                                <p>details............</p>
                            </div>
                          </div>

                    </div>
                </div>
              </div>
              <div className="card bg-warning">
                .
              </div>
            </div>
        )
    }
}
export default Carousel;