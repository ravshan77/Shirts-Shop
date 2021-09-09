import React from 'react'
import "../../css/Contact.css"

const contact = () => {
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
            <section className="contact">
            <div className="wrapper"> 
                <h2>Contact Us</h2>
                <form>
                    <div className="input-field">
                        <input  required type="text"/>
                        <label>Name</label>
                    </div>
                    <div className="input-field">
                        <input  required type="email"/>
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input  required type="tel"/>
                        <label>Mobile</label>
                    </div>
                    <div className="input-field">
                        <textarea rows="5" required></textarea>
                        <label>Message</label>
                    </div>
                    <input  type="submit" name="" value="Send Message" className="btn btn--black"/>
                </form>
            </div>
            </section>
            <section className="contact-info">
                <div className="contact-card">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div>
                        <h3>Address</h3>
                        <p>426 Sugor Camp, Manchister</p>
                    </div>
                </div>
                <div className="contact-card">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div>
                        <h3>Phone</h3>
                        <p>+998 99 194 08 51</p>
                    </div>
                </div>
                <div className="contact-card">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <div>
                        <h3>Email</h3>
                        <p>ravshanfayziyevjkl@gmail.com</p>
                    </div>
                </div>
            </section>
            <section>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49717.444578795905!2d65.77066576805743!3d38.84756703331501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1630971178687!5m2!1suz!2s" className="mapter" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </section>
        </div>
    )
}

export default contact
