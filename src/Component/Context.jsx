import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

function Context({children}) {
    const [product, setProduct] = useState([])
   
    useEffect(() =>{
          axios.get('http://localhost:5000/api/product/getproducts')
          .then((res) => {
            setProduct(res.data.products)
          }).catch((err) => {
            console.log(err);
          })
        }, [])

    const value ={
        product
    }
  return (
    <div>
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    </div>
  )
}

export default Context