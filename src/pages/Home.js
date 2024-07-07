import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data (replace with actual fetch if needed)
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h1>Welcome to My E-commerce</h1>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Home;
