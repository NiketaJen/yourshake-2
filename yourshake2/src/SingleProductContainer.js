import React from 'react'
import { Link } from 'react-router-dom';
import "./css/SingleProductContainer.css"
import SingleProduct from "./SingleProduct"
import { useStateValue } from "./StateProvider";


function SingleProductContainer() {
    const[{singleProduct}, dispatch] = useStateValue();
    return (
        <div className="singleProductContainer">
            
            <div className="singleProductContainer__top">
                <Link classname="singleProductContainer__link" to="/products">Back</Link>
            </div>
            <div className="singleProductContainer__main">
            {singleProduct.map(item => (
                        <SingleProduct 
                        id={item.id}
                        companyName={item.companyName}
                        productName={item.productName}
                        mainImage={item.mainImage}
                        price={item.price}
                        description={item.description}
                        flavorCount={item.flavorCount}
                        />
                    ))}
            </div>
         
        </div>
    )
}

export default SingleProductContainer
