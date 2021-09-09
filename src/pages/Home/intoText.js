import React from 'react'
import "../../css/IntoText_Home.css"


const intoText = () => {

    document.addEventListener("mousemove", parallaxText);
    function parallaxText(e){
        this.querySelectorAll(".layer").forEach(Layer => {
            let x = (window.innerWidth - e.pageX * 2)/2;
            Layer.style.transform = `translateX(${x}px)`;
        })
    }
    return (
      <div className="corner-section">
        <div className="skew1">
            <h2 className="layer"><span className="red">Olline</span> <span className="gray">Shirts</span> <span className="blue">Shop</span></h2>
        </div>
        <div className="textBoxe">
            <div className="skew2">
              <h2 className="layer"><span className="red">Olline</span> <span className="gray">Shirts</span> <span className="blue">Shop</span></h2>
            </div>
        </div>
      </div>
    )
}

export default intoText
