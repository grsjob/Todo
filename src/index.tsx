import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screens/Home/Home';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Layout className='bg-gray-900 '>
      <Home />
    </Layout>
  </React.StrictMode>
);

