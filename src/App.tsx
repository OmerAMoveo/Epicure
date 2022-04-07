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

function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          {<Route path='/home' element={<HomePage />} />}
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
