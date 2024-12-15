import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { RiShoppingCart2Line } from 'react-icons/ri';
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
    height: 100%;
    object-fit: contain;
    z-index: 8;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1); /* Ajusta el factor de escala según tus preferencias */
    }
  }
`;


const Button = styled.div`
  position: absolute;
  bottom: 10px; /* Alinea el botón a 10px desde el fondo */
  left: 10px; /* Alinea el botón a 10px desde la izquierda */
  height: 40px; /* Reducir la altura del botón */
  width: 40px; /* Reducir la anchura del botón */
  color: black;
  background-color:white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  const { img, title, precio, } = props;
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