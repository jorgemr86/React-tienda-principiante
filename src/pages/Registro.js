import styled from 'styled-components';
import { NavLink } from 'react-router-dom';





const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/img/modelo7.jpg') center/cover no-repeat fixed;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px); /* Ajusta el valor de desenfoque según tus preferencias */
`;

const NavSection = styled.div`
  width: 60%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5); /* Ajusta la opacidad del fondo */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top:10%;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-weight: 500;    
  font-size: 24px;
  color: #131313;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #131313;
  border-radius: 5px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
  color: #131313;
`;

const Button = styled.button`
  width: 50%;
  padding: 15px 20px;
  margin-right: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #131313;
  cursor: pointer;
  border: solid 2px #131313;

`;

const Link = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #131313;
`;

const Registro = () => {
  return (
    <Container>
      <NavSection>        
        <Title>CREA UNA CUENTA</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Email" />
          <Input type="password" placeholder="Contraseña" />
          <Input type="password" placeholder="Confirma Contraseña" />
          <Agreement>
          Al crear una cuenta, doy mi consentimiento para el procesamiento de mi información personal
            datos de acuerdo con el<b>POLÍTICA DE PRIVACIDAD</b>  
          </Agreement>
          
          <Button>Registrarse</Button>

       
          <Link>
            <NavLink to="/pages/ForgotPassword" Classname={({ isActive }) => (isActive ? "link-active" : "link")}>
            ¿OLVIDASTE TU CONTRASEÑA?
            </NavLink>
          </Link>
        </Form> 
      </NavSection>	   
    </Container>
  );
};

export default Registro;
