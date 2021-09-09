import React from 'react'
import "../css/Footer.css"
import "../css/Contact.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';



const Footer = () => {

    return (
        <section>
            <div className="footer">
                <div className="footer_links">
                    <div className="input-field">
                        <h3>MORE FROM ASOS</h3>
                        <p>Mobile and ASOS apps</p>
                        <p>ASOS Markatlipce</p>
                        <p>Gift vouchers</p>
                        <p>Black Friday</p>
                    </div>   
                    <div>
                        <h3>HELP & INFORMATION</h3>
                        <p>Help</p>
                        <p>Track order</p>
                        <p>Deliver & returns</p>
                    </div>
                    <div>
                        <h3>ABOUT ASOS</h3>
                        <p>About us</p>
                        <p>Careers af ASOS</p>
                        <p>Corporate response</p>
                        <p>Investors' site</p>
                    </div>   
                    <form className="">
                        <div className="input-field">
                        <input  required type="tel"/>
                        <label>First Name</label>
                        </div>
                        <div className="input-field">
                        <input  required type="email"/>
                        <label>Email</label>
                        </div>
                        <div className="input-field">
                          <textarea required typeof="text" rows="3"/>
                          <label>Message</label>
                        </div>
                        <button type="submit" name="" value="Send Message" className="btn btn--black">send</button>
                    </form>
                </div>
                <div className="footer_icons">
                    <div>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TelegramIcon />
                        <CardGiftcardIcon />
                        <YouTubeIcon />
                        <TwitterIcon />
                    </div>
                    <div>© 2021 - 2022 Created by R.Fayziyev . All rights reserved</div>
                </div>
            </div>
        </section>
    )
}

export default Footer
