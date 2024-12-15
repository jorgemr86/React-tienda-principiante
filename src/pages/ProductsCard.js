import React, { useContext, useState } from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import styled from 'styled-components';
import { FaInfo } from "react-icons/fa6";
import cartContext from '../context/CartContext ';



const Wrapper = styled.div`
  width: 300px;
  height: 350px;
  margin: auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;

  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
    border: 2px solid #f5f5f5;
  }

  img {
    width: 100%;
    height: 60%;
    object-fit: contain;
    z-index: 8;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1); /* Ajusta el factor de escala según tus preferencias */
    }
  }
`;

const Inside = styled.div`
  z-index: 9;
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(5px);
  width: 140px;
  height: 140px;
  position: absolute;
  top: -70px;
  right: -70px;
  border-radius: 0 0 150px 150px;
  transition: all 0.5s, border-radius 2s, top 1s;
  border: 2px solid #f5f5f5;

  &:hover {
    width: 99%;
    right: 0;
    top: 0;
    border-radius: 0;
    height: 80%;
  }
`;

const Icon = styled.div`
 
`;

const Contents = styled.div`

margin: 0;
padding: 2%;
opacity: 0;
transform: scale(0.5) translateY(-200%);
transition: opacity 0.2s, transform 0.8s;
word-wrap: break-word;
`;

const AnimatedInsideContents = styled.div`
  &:hover {
    width: 100%;
    right: 0;
    top: 0;
    border-radius: 0;
    height: 80%;

    ${Icon} {
      opacity: 0;
      right: 15px;
      top: 15px;
    }

    ${Contents} {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

const Button = styled.div`
  height: 60px;
  width: 50%;
  color: white;
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 26%;
  transition: .3s;

  &:hover {
    animation: pulse 1s infinite;
    transition: .3s;
    color: #111;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    70% {
      transform: scale(.9);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Right = styled.div`
  width: 50%;
  color: white;
  display: flex;
  justify-content: flex-end; /* Alinea el contenido a la derecha */
  align-items: center;
  position: absolute; /* Para posicionar correctamente dentro de Wrapper */
  bottom: 0; /* Alinea al fondo de Wrapper */
  right: 0; /* Alinea a la derecha de Wrapper */
  padding-right: 10px; /* Agrega un poco de espacio entre el precio y el borde derecho */
`;

const Details = styled.div`
  text-align: center;
`;

const Price = styled.h3`
  margin: 0; /* Quitamos el margen para que el precio esté centrado verticalmente */
  margin-bottom: 25px;
`;
const ProductsCard = (props) => {
  const { img, title, precio,info } = props;
  const { addItem } = useContext(cartContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const item = { ...props };
    addItem(item);
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  return (
 
   
    
    <Wrapper>
    
      <img src={img} alt="item-img" />
   
        <div className="top"></div>
        <div className="details">
          <h4 className="title">{title}</h4>
        
        </div>
        <Right>
         
          <Details>
            <h4 className="title">{title}</h4>
          <Price className="price">$ {precio.toLocaleString()}</Price>
          </Details>
          </Right>
      <Inside>
        <Icon>
          <FaInfo />
        </Icon>
        <AnimatedInsideContents>
          <Contents>{info}</Contents>
        </AnimatedInsideContents>
      </Inside>
      <Button
    type="button"
    className={`btn ${isAdded ? 'added' : ''}`}
    onClick={handleAddToCart}
>
    {isAdded ? (
        <span>
            <RiShoppingCart2Line /> 
        </span>
    ) : (
        <span>
            <RiShoppingCart2Line /> 
        </span>
    )}
</Button>
    </Wrapper>
  );
};

export default ProductsCard;