import React from 'react';
import styled from 'styled-components';
import productsData from '../data/ProductData';
import ProductCard from '../pages/ProductsCard'; // Ajusta la ruta según tu estructura de archivos





const HomeSection = styled.section`
  background-image: url('img/modelo0.jpg'); /* Ruta relativa a la imagen en la carpeta public */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(10px); /* Aplicamos un desenfoque al fondo */
  min-height: 100vh; /* Ajusta la altura mínima según tus necesidades */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;/* Agregamos un relleno para evitar que las tarjetas se peguen al borde de la ventana */
`;


const HomeContent = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permitir que las tarjetas se ajusten a múltiples filas */
  justify-content: center;
  gap: 20px; /* Espacio entre las tarjetas */
  max-width: 1200px; /* Establecer un ancho máximo para el contenido */
  width: 100%; /* Hacer que el contenido ocupe todo el ancho disponible */
`;





const Producto = () => {
  return (
    <HomeSection >
     
        <HomeContent>
          {productsData.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </HomeContent>
 
    </HomeSection>
  );
};

export default Producto ;
