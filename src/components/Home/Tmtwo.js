import React from 'react';
import "./Tmtwo.css";
import $ from "jquery";


const Tmtwo = () => {

    // window.onload= function(){
    //     $('.carousel-control').click(function(e){
    //         e.preventDefault();
    //         $('#demo').carousel( $(this).data() );
    //     });
    // }

  return (
    <div className='Container' style={{margin: "2rem 0"}}>
        <div id="demo" class="carousel slide" data-ride="carousel">
        {/* <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> */}
        
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="carousel-caption">
                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> <img src="https://i.imgur.com/lE89Aey.jpg"/>
                    <div id="image-caption">Nick Doe</div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-caption">
                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.</p> <img src="https://i.imgur.com/QptVdsp.jpg" class="img-fluid"/>
                    <div id="image-caption">Cromption Greves</div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-caption">
                    <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen.</p> <img src="https://i.imgur.com/jQWThIn.jpg" class="img-fluid"/>
                    <div id="image-caption">Harry Mon</div>
                </div>
            </div>
        </div> 

        <a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
     <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>
    </div>
    </div>
  );
};

export default Tmtwo;
