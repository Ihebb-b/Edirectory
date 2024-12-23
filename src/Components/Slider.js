import React, { useEffect, useState } from 'react'
import './Slider.css'

function Slider() {

    const [showFirstText, setShowFirstText] = useState(false);
  
    useEffect(() => {
      const firstTextTimer = setTimeout(() => {
        setShowFirstText(true);
      }, 500); // Delay for the first text
  
      
      return () => {
        clearTimeout(firstTextTimer);
      
      };
    }, [])

    //data-height-xs="360" data-autoplay="2600" data-animate-in="fadeIn" data-animate-out="fadeOut" data-items="1" data-loop="true"

    return (
        <div id="slider" className="inspiro-slider"  >

            <div className="slide" data-bg-image="homepages/restaurant/images/main-2.jpg">
                <div className="bg-overlay"></div>
                <div className="container">
          {showFirstText && (
            <h2 className="hero-text">
            Mediterranian restaurants<br />
            Where tastiness meets health
          </h2>
          )}
          
        </div>
            </div>

            {/* <div className="slide" data-bg-image="homepages/restaurant/images/main-1.jpg">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="slide-captions">

                        <h2 className="text-medium no-margin text-colored">Enjoy</h2>
                        <h2 className="text-lg no-margin">Wonderful Feelings</h2>

                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Slider