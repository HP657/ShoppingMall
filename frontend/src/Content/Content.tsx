import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Content.module.css';
import ProductList from '../Product/ProductList';
import ProductDetail from '../Product/ProductDetail';
import LogInForm from '../LogInForm/LogInForm';
import SignUpForm from '../SignUpForm/SignupForm';
import CreateProductPage from '../CreateProduct/CreateProductPage';

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/login' element={<LogInForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/create/product' element={<CreateProductPage />} />
      </Routes>
    </div>
  );
};

export default Content;
