import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';  // Assure-toi que ProductCard.js est bien dans le dossier components

function ProductList() {
  const [products, setProducts] = useState([]);  // Etat pour stocker les produits

  useEffect(() => {
    // Appeler l'API backend pour récupérer les produits
    axios.get('http://127.0.0.1:8000/products/')  // L'URL de ton API backend
      .then(response => {
        setProducts(response.data);  // Met à jour l'état avec les produits reçus
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits:', error);
      });
  }, []);  // [] pour que l'effet se déclenche uniquement lors du premier rendu

  return (
    <div className="product-list">
      <h1>Liste des Produits</h1>
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} />  // Affiche chaque produit avec ProductCard
        ))
      ) : (
        <p>Aucun produit disponible</p>  // Message si aucun produit n'est disponible
      )}
    </div>
  );
}

export default ProductList;
