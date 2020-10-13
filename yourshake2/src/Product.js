import React, {useState, useEffect} from 'react'
import "./css/Product.css"
import {Link, useHistory } from "react-router-dom"
import SingleProduct from './SingleProduct'
import {db} from "./firebase"


function Product(props) {
    let history = useHistory()
    const [SingleProduct, setSingleProduct] = useState([])
    
    const handleClick = () => {
        console.log("click click")
        // useEffect(() => {
        //     db.collection('products').onSnapshot(snapshot => {
        //        // console.log(snapshot.docs)
        //       let fetchedProducts = []
     
        //        snapshot.forEach(doc => {
        //           // console.log(doc.id, '=>', doc.data());
        //            let currentProductData = doc.data()
        //            let id = doc.id
        //            let currentProduct = {id, ...currentProductData}
        //            console.log(currentProduct)
        //            fetchedProducts.push(currentProduct)
        //          });
        //          setProducts(fetchedProducts)
                 
        //         }
        //     )
           
        //  }, [])
        
        history.push('/product/:id')
    }
    return (
        <div className="product">
            {/* <Link to={`/products/${props.id}`}> */}
            <div className="product__card" onClick={handleClick} >
                <img 
                className="product__image"
                src={props.mainImage}
                alt=""
                />
                <p>{props.companyName}</p>
               {/* <p>{productName}</p> */}
                <p>{props.flavorCount} Flavors Available</p>
                {/* <p>{tag}</p> */}
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
               
            </div>
            {/* </Link> */}
            
        </div>
    )
}

export default Product
