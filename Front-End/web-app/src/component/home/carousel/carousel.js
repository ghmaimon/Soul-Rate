import React,{Component} from 'react';
import item1 from '../../../images/item1.jpg'
import item2 from '../../../images/item2.jpg'
import item3 from '../../../images/item3.jpg'
import item4 from '../../../images/item4.jpg'
import {CarouselItem } from 'reactstrap';

class Carousel extends Component{
    render(){
        return(
            <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={item1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item active">
                  <img src={item2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={item3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={item4} className="d-block w-100" alt="..."/>
                </div>
              </div>


              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>


            </div>
    </div>
        )
    }
}
export default Carousel;