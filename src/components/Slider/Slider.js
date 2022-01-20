import React from 'react';
import "./Slider.css"
import SlidesInfo from "./SlidesInfo";
import AutoSlideFunctions from "./AutoSlideFunctions"


const Slider = () => {

    const { slideData } = SlidesInfo();
    const { index, animate, slideDiv, divState, Next, Prev, current, getActiveColor, resetTimer } = AutoSlideFunctions();
    console.log(slideData);
    return (

        <div className="slider-wrapper">
            <div ref={divState} className="slider-content">
                <div className="image-wrapper" style={{ animation: animate ? "zoomOut 2s ease" : "undefined", backgroundImage: `url(${slideData[index].image})` }}>
                </div>

                <div className="slider-item">
                    <div className="caption">
                        <p style={{ animation: animate ? "slideRight 1.5s" : "undefined" }}>
                            {slideData[index].caption}</p>
                        <h3 style={{ animation: animate ? "showcaption 1.5s" : "undefined" }}>{slideData[index].author}</h3>
                    </div>
                </div>
            </div>

            <div className="button-controls">
                <span className="prev" onClick={() => { Prev(); resetTimer() }}><i className="fas fa-chevron-circle-left"></i></span>
                <span className="next" onClick={() => { Next(); resetTimer() }}><i className="fas fa-chevron-circle-right"></i></span>
            </div>

            <div className="indicator-controls">
                <div className="controls-stretch">
                    <div ref={slideDiv} className="controls-stretch__width">
                        <span className="scroll-indicator__span"></span>
                    </div>
                    {slideData.map((index, i) => (
                        <span className="indicator" key={i} style={getActiveColor(i)} onClick={() => current(i)}>
                            <span className="tooltip">
                                <img src={slideData[i].image} alt="tooltip" />
                            </span>
                        </span>))}
                </div>
            </div>
        </div>
  )
};

export default Slider;
