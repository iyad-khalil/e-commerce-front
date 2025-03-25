import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Pour obtenir l'ID du produit dans l'URL
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();  // Récupère l'ID du produit de l'URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Appeler l'API pour récupérer les détails du produit
    axios.get(`http://127.0.0.1:8000/products/${id}`)
      .then(response => {
        setProduct(response.data);  // Mettre à jour l'état avec les détails du produit
        setLoading(false);  // Fin du chargement
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image_url} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      
      <button onClick={() => handleTranslate()}>Translate Description</button>
      <button onClick={() => handleGenerateImage()}>Generate Image</button>
    </div>
  );

  // Fonction pour traduire la description du produit
  function handleTranslate() {
    axios.put(`http://127.0.0.1:8000/products/${id}/translate/`, { target_lang: 'fr' })
      .then(response => {
        alert('Description translated!');
        setProduct(response.data);  // Met à jour les détails du produit avec la description traduite
      })
      .catch(error => {
        console.error('Error translating description:', error);
      });
  }

  // Fonction pour générer une nouvelle image
  function handleGenerateImage() {
    axios.put(`http://127.0.0.1:8000/products/${id}/generate-image/`)
      .then(response => {
        alert('Image generated!');
        setProduct(response.data);  // Met à jour les détails du produit avec la nouvelle image
      })
      .catch(error => {
        console.error('Error generating image:', error);
      });
  }
}

export default ProductDetails;
