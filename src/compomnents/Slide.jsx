import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"

 export default function Slide() {
   

    const settings = {
       
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
      };

  return (
    <div>
    
    <Slider  {...settings}>
      
            <div >
                <img src={require("../images/slides/a.jpg")} className="mx-auto img2 rounded-3 " alt="" />
                
            </div>
            <div>
                <img src={require("../images/slides/as.jpeg")} className="mx-auto img2 rounded-3" alt="" />
                
            </div>
            <div>
                <img src={require("../images/slides/Space-Sweepers.jpg")} className="mx-auto img2 rounded-3 " alt="" />
                
            </div>
            <div>
                <img src={require("../images/slides/ava.png")} className="mx-auto img2 rounded-3 " alt="" />
                
            </div>
            <div>
                <img src={require("../images/slides/bat.jpg")} className="mx-auto img2 rounded-3 " alt="" />
                
            </div>
            <div>
                <img src={require("../images/slides/batman-v-superman-movie.jpg")} className="mx-auto img2 rounded-3 " alt="" />
                
            </div>
            <div>
                <img src={require("../images/slides/jon.jpg")} className="mx-auto img2 rounded-3" alt="" />
                
            </div>
           
            <div>
                <img src={require("../images/slides/3657445.jpeg")} className="mx-auto img2 rounded-3" alt="" />
                
            </div>
            
        
            </Slider>
        
      </div>
 
  )
}

// export default Slide