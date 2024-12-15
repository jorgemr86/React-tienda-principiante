import React  from 'react';
import styled from 'styled-components';
import Navbar from '../componentes/Navbar'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background: rgba(255, 255, 255, 0.4); 
    position: relative; 
    backdrop-filter: blur(5px);
   box-shadow: 0 0 40px rgba(8,7,16,0.6);
   background-color: rgba(255,255,255,0.13);
   box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  margin-top:10%;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
    border: 2px solid #f5f5f5;
  }

`;

const MainSection = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('/img/modelo4.jpg') center/cover no-repeat ;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0px;
`;

const Title = styled.h1`
    font-weight: 500;
    font-size: 24px;
    color: white;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin: 10px 0px;
    padding: 10px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 100%;
    padding: 15px 20px;
    color: white;
    cursor: pointer;
    border: solid 2px white;
    background: transparent;
`;






const Login = () => {


  return (
    <div id="login-container">
    <Container>
      <Navbar/>
      <MainSection>
        <Wrapper>
         
          <Title>INICIAR SESIÓN</Title>
          <Form>
            <Input placeholder="nombre de usuario" />
            <Input placeholder="contraseña" />
            <Button>ACCESO</Button>
           
          </Form>
        </Wrapper>
      </MainSection>
    </Container>
    </div>
  );
};

export default Login;
 