import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products/')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
//In the code above, we have created a new component called  ProductList . This component will be used to display a list of products.
//The component fetches the list of products from the backend API using an HTTP GET request when the component mounts.
//The list of products is stored in the  products  state using the  useState  hook.
//The component then maps over the list of products and renders a  ProductCard  component for each product.
//Each  ProductCard  component is passed the product details as a prop.
//Now that we have created the  ProductList  component, let's update the  App  component to include this route.
//In the next step, we will create the  CreateProduct  component.