import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screens/Home/Home';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout classNmae='bg-gray-900 '>
      <Home />
    </Layout>
  </React.StrictMode>
);
