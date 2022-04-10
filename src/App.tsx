import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import FullRestaurant from './pages/FullRestaurant';
import RestaurantsPage from './pages/RestaurantsPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/restaurants' element={<RestaurantsPage />} />
          <Route path='/:restaurantParam' element={<FullRestaurant />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
