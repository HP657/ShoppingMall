import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Content.module.css';
import ProductList from '../Product/ProductList';
import ProductDetail from '../Product/ProductDetail';

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default Content;
