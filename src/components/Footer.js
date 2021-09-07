import React from 'react'
import "../css/Footer.css"
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
                    <div>
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
                    <div>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <textarea type="text" placeholder="Message" rows="3"/>
                        <button className="btn btn--black">send</button>
                    </div>
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
                    <div>© 2021 - 2022 glotr.uz. All rights reserved</div>
                </div>
            </div>
        </section>
    )
}

export default Footer
