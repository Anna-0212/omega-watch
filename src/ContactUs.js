import Footer from "./Footer";

function ContactUs() {
    return (
        <div>
            <div className="container-contact">
                <div className="address-box">
                    <h3 className="contactUs">Contact us</h3>
                <hr/>
                </div>
                <div className="address-box"> 
                    <p className="address-text">tel: +41 35 555 55 55</p>
                    <p className="address-text">tel: +41 35 555 55 54</p>
                    <p className="address-text">tel: +41 35 555 55 53</p>
                    <p className="address-text">e-mail: omega-shop@gmail.com</p>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default ContactUs;