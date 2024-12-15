import React from 'react';
import styled from 'styled-components';
import Aboutproduct from '../data/Productos';
import Productos from '../pages/Productos';

const HomeSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  max-width: 1600px;
  margin: 0 auto; 
  margin-top:20%;
`;

const HomeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px; /* Agregamos padding a ambos lados */
  box-sizing: border-box; /* Para que el padding no afecte el ancho total */
`;
const Novedades = () => {
  return (
    <div>
    <HomeSection>
  
    <HomeContent>
      {Aboutproduct.map((item) => (
        <Productos key={item.id} {...item} />
      ))}
    </HomeContent>
  </HomeSection>
  </div>
  );
};

export default Novedades;
