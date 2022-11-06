import facebook from './facebook.png';
import instagram from './instagram.png';
import telegram from './telegram.png';
import twitter from './twitter.png';

function Footer() {
    return (
        <div className="container-footer">
            <img src={facebook} className="social-media" alt="FB"/>
            <img src={instagram} className="social-media" alt="instagram"/>
            <img src={telegram} className="social-media" alt="telegram"/>
            <img src={twitter} className="social-media" alt="twitter"/>

        </div>
    )
}

export default Footer;