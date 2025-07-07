import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '80vh', padding: '1rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
