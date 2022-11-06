import { useState } from "react";

function Shop({itemForSale}) {

    const [showText, setShowText] = useState(false);

    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
    }

    return (
        <div className="products">
            {itemForSale.map((element => {
                const {id, image, name, price, description, showMore} = element;

        return <div key={id} className="product-card">
            <img className="image-shop" src={image} alt="watch"/>
                <h3 className="name">{name}</h3>
                <p className="description">{showMore ? description : 
                description.substring(0, 60) + "..."}
                <button className="btn-showmore" onClick = {() =>
                showTextClick(element)}>{showMore ? "Show less" : "Show more"} </button>
                </p>
                <h4 className="price" >$ {price}</h4>
            <button className="btn-add">Add to Cart</button>
        </div>

            }))}
        </div>
    )
}

export default Shop;