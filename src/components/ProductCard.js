import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <img src={product.image_url} alt={product.name} />
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
//In the code above, we have created a new component called  ProductCard . This component will be used to display a single product card.
//The component takes a  product  prop as an argument, which contains the product details.
//The component renders the product name, description, and image. It also includes a link to view the product details.
