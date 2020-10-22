import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./css/SingleProductContainer.css"
import SingleProduct from "./SingleProduct"
import { useStateValue } from "./StateProvider";


function SingleProductContainer() {
    let history = useHistory()
    const[{singleProduct}, dispatch] = useStateValue();

    const removeSingleProduct = (id) => {
        dispatch({
            type:'REMOVE_SINGLE_PRODUCT',
            id: id,
        })
        history.push('/products')
    };

    return (
        <div className="singleProductContainer">
            
            <div className="singleProductContainer__top">
                <button className="singleProductContainer__btn btn_light" onClick={removeSingleProduct}>Back</button>
            </div>
            <div className="singleProductContainer__main">
            {singleProduct.map(item => (
                        <SingleProduct 
                        id={item.id}
                        key={item.id}
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
