import { useState } from "react";
import previousBtn from './arrow-left.png';
import nextBtn from './arrow-right.png';


function MainPageSlide() {
    const imageArray = ["https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506796684999-9fa2770af9c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"];
    
    const [imageWatch, setImageWatch] = useState(0);
    const image = imageArray[imageWatch];

    const previousWatch = () => {
        setImageWatch((imageWatch => {
            imageWatch --;

            if (imageWatch < 0) {
                return imageArray.length -1;
            }
                return imageWatch;
        }))
    }

    const nextWatch = () => {
        setImageWatch((imageWatch => {
            imageWatch ++;

            if (imageWatch > imageArray.length -1) {
                imageWatch = 0;
            }
            return imageWatch;
        }))
    }

    return (
        <div>
            <div className="picture-main-page">
                <div className="arrow"> 
                    <button className="btn-arrow" onClick = {previousWatch}>
                        <img src={previousBtn} alt="arrow"/>
                    </button>
                </div>
                <div> 
                    <img className="imgMainPage" src={image}  alt="watch"/>
                </div>
                <div className="arrow"> 
                    <button className="btn-arrow" onClick = {nextWatch}>
                        <img src={nextBtn} alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainPageSlide;