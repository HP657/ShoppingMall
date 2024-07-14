import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import CreateProduct from './CreateProduct/CreateProduct';

const App: React.FC = () => {
  return (
    <Router>
      <>
        <Header />
        <CreateProduct />
        <Content />
        <Footer />
      </>
    </Router>
  );
};

export default App;
