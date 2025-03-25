// src/pages/CreateProduct.js

import React, { useState } from 'react';
import axios from 'axios';

function CreateProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to create a product
    axios.post('http://127.0.0.1:8000/products/', product)
      .then(response => {
        alert('Produit créé avec succès');
        setProduct({
          name: '',
          description: '',
          price: '',
          image_url: '',
        });
      })
      .catch(error => {
        console.error('Erreur lors de la création du produit:', error);
      });
  };

  return (
    <div>
      <h1>Créer un Nouveau Produit</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom du produit"
          value={product.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description du produit"
          value={product.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Prix"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image_url"
          placeholder="URL de l'image"
          value={product.image_url}
          onChange={handleChange}
        />
        <button type="submit">Créer Produit</button>
      </form>
    </div>
  );
}

export default CreateProduct;
//In the code above, we have created a new component called  CreateProduct . This component will be used to create a new product.
//The component uses the  useState  hook to store the product details in the  product  state.
//The  handleChange  function is called when the user types in the input fields to update the product state.
//The  handleSubmit  function is called when the form is submitted. It makes an API call to create a new product using an HTTP POST request.
//If the product is created successfully, an alert is shown, and the input fields are reset.
//The component renders a form with input fields for the product name, description, price, and image URL. The form also includes a submit button to create the product.
//The form's  onSubmit  event is set to call the  handleSubmit  function when the form is submitted.
//The input fields are bound to the product state, and the  handleChange  function is called when the input values change.
//The component exports the  CreateProduct  component as the default export.
