import React from 'react'
import "./css/SingleProduct.css"
import { useStateValue } from "./StateProvider";

function SingleProduct({id, companyName, productName, price, flavorCount, description, mainImage}) {
    const[{cart}, dispatch] = useStateValue();
  
    const addToCart = () => {
        // dispatch item
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id, 
                key: id,
                companyName: companyName,
                mainImage: mainImage,
                price: price,
                productName: productName,
            }
        });
    };

    return (
        <div className='singleProduct'>
          
           <div className="singleProduct__left">
               {/* Image */}
                <div className="singleProduct__image">
                    <img
                    src={mainImage}
                    alt=""
                    />
                </div>
                {/* flavor icons */}
                {/* quantity button */}
                {/* add to cart button */}
                <button 
                    className="singleProduct__button btn_light3" 
                    onClick={addToCart}
                    >
                        Add To Cart
                </button>
               
                
           </div>
           <div className="singleProduct__right">
               {/* product name */}
               <div className="singleProduct__productName">
                    {productName}
               </div>
               {/* flavor names */}
               <p>Cake Batter</p>
               {/* price */}
               <strong>${price}</strong>
               {/* product highlights*/}
               <div className="singleProduct__highlights">
                    <div className="sectionTitle bg_light">
                        Product Highlights
                    </div>
               </div>
               {/* Important Disclosure */}
               <p>Important Disclosure</p>
               {/* Social Media Buttons */}

           </div>
           <div className="singleProduct__main">
                <div className="singleProduct__description">
                    <div className="sectionTitle bg_light">
                        Product Description
                    </div>
                    <p>{description}</p>
                </div>
                {/* Customer Reviews */}
                <div className="singleProduct__reviews">
                    <div className="sectionTitle bg_light">
                        Customer Reviews
                    </div>
                    <p>Be the first to leave a review.</p>
                </div>
            </div>
         
        </div>
    )
};

export default SingleProduct
