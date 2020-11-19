import React from 'react'
import "./css/SingleProduct.css"
import { useStateValue } from "./StateProvider";
import StarBorderIcon from '@material-ui/icons/StarBorder';

function SingleProduct({id, companyName, productName, price, flavorCount, description, mainImage, rating}) {
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
                rating: rating,
            }
        });
    };

    // const rating = []

    return (
        <div className='singleProduct'>
            <div className="singleProduct__container">
          
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
                    <p className="singleProduct__flavor">Cake Batter</p>
                    {/* price */}
                    <strong className="singleProduct__price">${price}</strong>
                    {/* product highlights*/}
                    <div className="singleProduct__highlights">
                            <div className="sectionTitle bg_light">
                                Product Highlights
                            </div>
                            <ul>
                                <p>Everyday Performance</p>
                                <p>Soy Free</p>
                                <p>Flavored with Natural Flavors</p>
                                <p>Use Before Workout</p>
                                <p>Use After Workout</p>
                            </ul>
                            
                    </div>
                    {/* Important Disclosure */}
                    <p className="singleProduct__disclosure">Important Disclosure</p>
                    {/* Social Media Buttons */}
                    {/* <p className="singleProduct__disclosureHidden"> Always consult with your healthcare professional and read information
                        provided by the product label or packaging, prior to consuming any nutritional
                        supplement.
                    </p> */}

                    </div>
           </div>

           <div className="singleProduct__main">
                <div className="singleProduct__description">
                    <div className="sectionTitle__main bg_light">
                        Product Description
                    </div>
                    <p>{description}</p>
                </div>
                {/* Customer Reviews */}
                <div className="singleProduct__reviews">
                    <div className="sectionTitle__main bg_light">
                        Customer Reviews
                    </div>
    <p>Be the first to leave a review. We'd love to hear about your experience with {companyName}'s {productName}. 
        Think of it as helping a friend in need.</p>
                    <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p><StarBorderIcon/> <StarBorderIcon/> <StarBorderIcon/> <StarBorderIcon/> <StarBorderIcon/></p>
                        ))}
                </div>
                </div>
            </div>
         
        </div>
    )
};

export default SingleProduct
