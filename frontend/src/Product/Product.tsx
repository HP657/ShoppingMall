import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, name, image, price }) => {

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
  };

  return (
    <div className={styles.product}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{formatPrice(price)}</p>
      <Link to={`/product/${id}`} className={styles.detailsLink}>View Details</Link>
    </div>
  );
};

export default Product;
