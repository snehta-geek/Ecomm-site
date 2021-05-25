import React from "react";
// import {carousel} from "react-bootstrap";

const SlideScreen = () => {
    return (
        <>
            <div id="carouselExampleControls " class="carousel slide" id="cp" data-ride="carousel">
                <div class="carousel-inner" id="cp">

                    <div class="carousel-item  active" id="cp">
                        <img src="/images/s6.jpg" class="d-block w-100" alt="slide1" />
                    </div>
                    <div class="carousel-item" id="cp">
                        <img src="/images/s5.jpg" class="d-block w-100" alt="slide2" />
                    </div>
                    <div class="carousel-item" id="cp">
                        <img src="/images/s7.jpg" class="d-block w-100" alt="slide3" />
                    </div>
                    <div class="carousel-item" id="cp">
                        <img src="/images/s8.jpg" class="d-block w-100" alt="slide4" />
                    </div>

                    <div class="carousel-item" id="cp">
                        <img src="/images/s3.jpg" class="d-block w-100" alt="slide5" />
                    </div>
                    <div class="carousel-item" id="cp">
                        <img src="/images/s1.jpg" class="d-block w-100" alt="slide6" />
                    </div>
                    <div class="carousel-item" id="cp">
                        <img src="/images/s4.jpg" class="d-block w-100" alt="slide7" />
                    </div>




                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </>
    )
};

export default SlideScreen;