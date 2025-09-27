
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RelatedCard from '../Component/RelatedCard';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [roomProducts, setRoomProducts] = useState([]);

  useEffect(() => {
    let currentProduct = null;
    axios.get(`http://localhost:5000/api/product/getproduct/${id}`)
      .then(res => {
        setProduct(res.data.product);
        currentProduct = res.data.product;
        return axios.get('http://localhost:5000/api/product/getproducts');
      })
      .then(res => {
        if (res && res.data && res.data.products && currentProduct) {
          setRoomProducts(res.data.products.filter(
            p => p.room === currentProduct.room
          ));
        }
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <RelatedCard products={roomProducts} mainProductId={product._id} />
    </div>
  );
}

export default ProductDetail;
