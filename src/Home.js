import { useState } from "react";
import { data } from './data';
import Shop from './Shop';
import Button from './Button';
import Footer from "./Footer";

function Home() {
    const [watch, setWatch] = useState(data);

    const chosenWatch = (searchTerm) => {

        const newWatch = data.filter(element => 
            element.searchTerm === searchTerm);
            setWatch(newWatch);
    }


    return (
        <div>
            <div className="cont">
                <h2 className="back">Free Standart Shipping</h2>
            </div>
            <div className="cont-btn"> 
                <Button filteredWatch = {chosenWatch}/>
                <button className="change" onClick = {() => {setWatch(data)}}> All collection </button> 
            </div>
            
            <Shop itemForSale={watch} />
            <Footer/>
        </div>
    )
}

export default Home;
