import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import mockProducts from './test/mockProducts';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const foundProduct = mockProducts.find((p) => p.id === Number(id));

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          throw new Error('Product not found');
        }

      } catch (error) {
        console.error('Error fetching product details:', error);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className={styles.productDetail}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price.toLocaleString('ko-KR')}원</p>
      <p>{product.description}</p>
      <Link to="/" className={styles.backLink}>이전 페이지</Link>
    </div>
  );
};

export default ProductDetail;
