import React, { useEffect } from 'react';
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
import AllChefsPage from './pages/AllChefsPage';
import { useDispatch } from 'react-redux';
import { getRestaurants, getDishes } from './store/store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getDishes());
  }, [])

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/restaurants' element={<RestaurantsPage />} />
            <Route path='/chefs' element={<AllChefsPage />} />
            <Route path='/:restaurantParam' element={<FullRestaurant />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
