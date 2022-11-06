import Footer from "./Footer";
import MainPageSlide from "./MainPageSlide";

function About() {
    
    
    return (
        <div>
            <div className="main-page-text"> 
                <h2 className="heading"> №1 for Brands</h2>
                <p className="text-main"> At Omega Shop, you can guarantee you will find more watch brands than anywhere else. From the biggest designer brands, 
                to the best of luxury and some hidden gems, along with outstanding service and next day delivery, Omega Shop is the hottest place to buy your next watch.</p>
            </div>
            <div className="container-main-page">
                <MainPageSlide/>
            </div>
            <Footer/>
        </div>
    )
}

export default About;