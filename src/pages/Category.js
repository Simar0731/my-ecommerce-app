import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data (replace with actual fetch if needed)
    const filteredProducts = productsData.filter(
      (product) => product.category === category
    );
    setProducts(filteredProducts);
  }, [category]);

  return (
    <div>
      <h1>{category} Products</h1>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Category;
