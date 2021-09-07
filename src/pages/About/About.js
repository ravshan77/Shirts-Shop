import React from 'react'
import "../../css/About.css"



const About = () => {
    
    return (
        <div>
            <section className="rounds">
                <div className="circle" data-splitting>
                    <span style={{"--i":1}} className="colrr">O</span>
                    <span style={{"--i":2}} className="colrr">l</span>
                    <span style={{"--i":3}} className="colrr">l</span>
                    <span style={{"--i":4}} className="colrr">i</span>
                    <span style={{"--i":5}} className="colrr">n</span>
                    <span style={{"--i":6}} className="colrr">e</span>
                    <span style={{"--i":7}} className="colrw">SH</span>
                    <span style={{"--i":8}} className="colrw">i</span>
                    <span style={{"--i":9}} className="colrw">r</span>
                    <span style={{"--i":10}} className="colrw">t</span>
                    <span style={{"--i":11}} className="colrw">s</span>
                    <span style={{"--i":12}} className="colrb">SH</span>
                    <span style={{"--i":13}} className="colrb">o</span>
                    <span style={{"--i":14}} className="colrb">p</span>
                </div>
            </section>
            <section className="about-section">
                <div className="inner-container">
                    <h1>
                      About Us
                      <div className="about-border"></div>
                    </h1>
                    <p className="about-text">
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetvvvur adip
                        lorem ipsum dolor sit amet, consectetvvvur adip
                        lorem ipsum dolor sit amet, consectetvvvur adip
                        lorem ipsum dolor sit amet, consectetvvvur adip
                        lorem ipsum dolor sit amet, consectetvvvur adip
                    </p>
                    <button className="about-button">Read More</button>
                </div>
            </section>
        </div>
    )
}

export default About
