import React, {useState, useEffect} from 'react'
import "./css/ProductContainer.css"
import Product from "./Product"
import {db} from "./firebase"


function ProductContainer() {
    const [products, setProducts] = useState([])

   useEffect(() => {
       db.collection('products').onSnapshot(snapshot => {
          // console.log(snapshot.docs)
         let fetchedProducts = []

          snapshot.forEach(doc => {
             // console.log(doc.id, '=>', doc.data());
              let currentProductData = doc.data()
              let id = doc.id
              let currentProduct = {id, ...currentProductData}
              console.log(currentProduct)
              fetchedProducts.push(currentProduct)
            });
            setProducts(fetchedProducts)
            
           }
       )
       console.log(products)
      
    }, [])

//     const citiesRef = db.collection('cities');
// const snapshot = await citiesRef.get();
// snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// });

    return (
        <div className="productContainer">
            <div className="productContainer__pageCounter">
                <h4>I'm a page counter</h4>
            </div>
            
            <div className="productContainer__row">
                <div className="productContainer__column">
                    {products.map(({id, mainImage, companyName, flavorCount, price}) => (
                        
                         <Product 
                         id={id}
                         key={id}
                         mainImage={mainImage}
                         companyName={companyName}
                         flavorCount={flavorCount}
                         price={price}  
                         />
                    ))}
                   
                </div>
              

            </div>
        </div>
    );
};

export default ProductContainer
