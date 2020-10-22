import React from 'react'
import "./css/Product.css"
import {useHistory } from "react-router-dom"
import { useStateValue } from "./StateProvider";


function Product(props) {
    let history = useHistory()
    const product = props.product
    const[{singleProduct}, dispatch] = useStateValue();
    
    const showSingleProduct = () => {
        // dispatch item
        dispatch({
            type: 'SHOW_SINGLE_PRODUCT',
            item: {
                id: product.id, 
                companyName: product.companyName,
                productName: product.productName,
                mainImage: product.mainImage,
                price: product.price,
                description: product.description,
                flavorCount: product.flavorCount,
            }
        });
        history.push(`/products/${product.id}`)
    };
  
    return (
        <div className="product">
            <div className="product__card" onClick={showSingleProduct} >
                <img 
                className="product__image"
                src={product.mainImage}
                alt=""
                />
                <p className="product__title">{product.companyName}</p>
                <p>{product.flavorCount} Flavors Available</p>
                {/* <p>{tag}</p> */}
                <p className="product__price">
                    <small>$</small>
                    <strong>{product.price}</strong>
                </p>
            </div>
        </div>
    )
};

export default Product
