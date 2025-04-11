// write product card here
import React from 'react';
import Button from '../components/button';

const Productcard = () => {
  const productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4VjTpGQi5V1kPyNnv1MotzT-9ezz9G4TgA&s'; // Dummy image URL
  const productName = 'Awesome Product';
  const productPrice = '$99.99';

  const handleViewProduct = () => {
    alert('View Product clicked!');
  };

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        width: '250px',
        textAlign: 'center',
        margin: '10px',
      }}
    >
      <img
        src={productImage}
        alt={productName}
        style={{ maxWidth: '100%', marginBottom: '10px' }}
      />
      <h3>{productName}</h3>
      <p>Price: {productPrice}</p>
      <Button onClick={handleViewProduct}>View Product</Button>
    </div>
  );
};

export default Productcard;