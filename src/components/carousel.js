import React from 'react';

/*
Carousel from Bootstrap, only 3 slide, however we could use a map function to create more slide and 
map each slide to it's content

We can set the data in the state of the component. In a future if the data is fetch from a db we could fetch the data even before the component
is rendered from the first time on the method componentWillMount()
*/ 

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            imgSrc:"http://via.placeholder.com/1600x900"
        }
    }

    render(){
        return (
                <div className='col-12 col-md-10 offset-md-1'>
                
                        <div id="carouselIndicators" className="carousel slide align-content-center" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouseleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselIndicators" data-slide-to="2"></li>
                            </ol>

                            <div className="carousel-inner" role="listbox">
                            
                                <div className="carousel-item active">
                                    <a href=''><img className="d-block img-fluid" src={this.state.imgSrc} alt="First slide"/></a>
                                    <div className="carousel-caption d-none d-md-block">
                                    { /*Could include some text here */ }
                                    </div>
                                </div>
                            
                            <div className="carousel-item">
                                <a href=''><img className="d-block img-fluid" src={this.state.imgSrc} alt="Second slide"/></a>
                                <div className="carousel-caption d-none d-md-block">

                                { /*Could include some text here */ }

                                </div>
                            </div>

                            <div className="carousel-item">
                                <a href=''><img className="d-block img-fluid" src={this.state.imgSrc} alt="Third slide"/></a>
                                <div className="carousel-caption d-none d-md-block">
                                { /*Could include some text here */ }
                                    
                                </div>
                            </div>
                        </div>
                        
                        <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        
                        <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>                            
                        </div>
                    </div>
                
        );
    }
}

export default Carousel;
  