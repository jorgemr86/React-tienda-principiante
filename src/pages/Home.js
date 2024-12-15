import React from 'react';
import Navbar from '../componentes/Navbar';
import Slider from '../componentes/Slider';
import Main from '../componentes/Main';
import Producto from '../componentes/Producto';
import Titulo from '../componentes/Titulo'
import Categoria from '../componentes/Categoria';
import Footer from '../componentes/Footer';









const Home = () => {
  return (
     <>
       <Navbar />
       <Slider/>
       <Main/>
       <Producto/>
       <Titulo/>
       <Categoria/>
       <Footer  $animate={true}/>
       </>

  );
};

export default Home;
