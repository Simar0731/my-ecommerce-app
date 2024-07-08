import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching data (replace with actual fetch if needed)
    const foundProduct = productsData.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>${product.price}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetail;
