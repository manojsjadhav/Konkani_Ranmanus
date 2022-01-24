
import Carousel from "react-bootstrap/Carousel";
import Carouselcomp from "./Carouselcomp"
import React from 'react';

function Carousal({logo,icon}) {
    return (
        <div>

            <Carousel className="bg-success mt-5">

                <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 gx-5 carou">
                                <Carouselcomp logo={logo} icon={icon} writer="Luaka Smith" type="solo traveller" 
                                comment="Our travel planner and her team pulled together an amazing trip in a challenging environment.I forgot how different the covid era is (which is a testament to the excellence of the trip that they put together) until I realized that the hotel next door to us in Dubrovnik was closed."
                                />
                            </div>
                            <div className="col-md-4 gx-5 carou">
                                <Carouselcomp logo={logo} icon={icon} writer="Luaka Smith" type="solo traveller" 
                                comment="Our travel planner and her team pulled together an amazing trip in a challenging environment.I forgot how different the covid era is (which is a testament to the excellence of the trip that they put together) until I realized that the hotel next door to us in Dubrovnik was closed."
                                />
                            </div>
                             <div className="col-md-4 gx-5 carou">
                                <Carouselcomp logo={logo} icon={icon} writer="Luaka Smith" type="solo traveller" 
                                comment="Our travel planner and her team pulled together an amazing trip in a challenging environment.I forgot how different the covid era is (which is a testament to the excellence of the trip that they put together) until I realized that the hotel next door to us in Dubrovnik was closed."
                                />
                            </div>
                        </div>
                    </div>
                 <Carousel.Caption>
                    <h3>1</h3>
                </Carousel.Caption>
                </Carousel.Item>   


                 <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 gx-5 carou">
                                <Carouselcomp logo={logo} icon={icon} writer="Luaka Smith" type="solo traveller" 
                                comment="Our travel planner and her team pulled together an amazing trip in a challenging environment.I forgot how different the covid era is (which is a testament to the excellence of the trip that they put together) until I realized that the hotel next door to us in Dubrovnik was closed."
                                />
                            </div>
                            <div className="col-md-4 gx-5 carou">
                                <Carouselcomp logo={logo} icon={icon} writer="Luaka Smith" type="solo traveller" 
                                comment="Our travel planner and her team pulled together an amazing trip in a challenging environment.I forgot how different the covid era is (which is a testament to the excellence of the trip that they put together) until I realized that the hotel next door to us in Dubrovnik was closed."
                                />
                            </div>
                             <div className="col-md-4 gx-5 carou">
                                <Carouselcomp logo={logo} icon={icon} writer="Luaka Smith" type="solo traveller" 
                                comment="Our travel planner and her team pulled together an amazing trip in a challenging environment.I forgot how different the covid era is (which is a testament to the excellence of the trip that they put together) until I realized that the hotel next door to us in Dubrovnik was closed."
                                />
                            </div>
                        </div>
                    </div>
                 <Carousel.Caption>
                    <h3>2</h3>
                </Carousel.Caption>
                </Carousel.Item>                   


                 <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 gx-5 carou">
                                <Carouselcomp logo={logo} icon={icon} writer="Luaka Smith" type="solo traveller" 
                                comment="Our travel planner and her team pulled together an amazing trip in a challenging environment.I forgot how different the covid era is (which is a testament to the excellence of the trip that they put together) until I realized that the hotel next door to us in Dubrovnik was closed."
                                />
                            </div>
                            <div className="col-md-4 gx-5 carou">
                                <Carouselcomp logo={logo} icon={icon} writer="Luaka Smith" type="solo traveller" 
                                comment="Our travel planner and her team pulled together an amazing trip in a challenging environment.I forgot how different the covid era is (which is a testament to the excellence of the trip that they put together) until I realized that the hotel next door to us in Dubrovnik was closed."
                                />
                            </div>
                             <div className="col-md-4 gx-5 carou">
                                <Carouselcomp logo={logo} icon={icon} writer="Luaka Smith" type="solo traveller" 
                                comment="Our travel planner and her team pulled together an amazing trip in a challenging environment.I forgot how different the covid era is (which is a testament to the excellence of the trip that they put together) until I realized that the hotel next door to us in Dubrovnik was closed."
                                />
                            </div>
                        </div>
                    </div>
                 <Carousel.Caption>
                    <h3>3</h3>
                </Carousel.Caption>
                </Carousel.Item>                   



               
            </Carousel>  

        </div>
    )
}

export default Carousal
