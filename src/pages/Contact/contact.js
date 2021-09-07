import React from 'react'
import "../../css/Contact.css"

const contact = () => {
    return (
        <div>
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
            <section className="">
                
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
