import React, { useState, useEffect, useRef, useCallback } from 'react';
import Product from './Product';
import styles from './ProductList.module.css';
import mockProducts from './test/mockProducts';
import CreateProduct from '../CreateProduct/CreateProduct';

interface ProductData {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastProductElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const fetchProducts = async (page: number) => {
    setLoading(true);
    const start = (page - 1) * 5;
    const newProducts = mockProducts.slice(start, start + 5);
    setProducts(prevProducts => [...prevProducts, ...newProducts]);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <>
      <CreateProduct />
      <div className={styles.productList}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={styles.productItem}
            ref={products.length === index + 1 ? lastProductElementRef : null}
          >
            <Product id={product.id} name={product.name} image={product.image} price={product.price} />
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
};

export default ProductList;
