import React, { useState } from 'react';
import styled  from 'styled-components';
import { IoIosCall } from 'react-icons/io'; import { FaFacebookF, FaLinkedinIn, FaGithub, FaBehance, FaPinterestP } from 'react-icons/fa'; 
import { FaEnvelope } from 'react-icons/fa';
const StyledLogo = styled.figure`
  margin: 0;
  filter: invert(100%) sepia(11%) saturate(199%) hue-rotate(277deg) brightness(113%) contrast(92%);
`;
const LogoImage = styled.img`
 display: block;
  margin: 0 auto; /* Centrar la imagen */
  width: 50%; /* Establecer el tamaño al 50% */
  max-width: 200px; /* Establecer el ancho máximo */
  height: auto;
`;

// Estilos para las secciones
const Section = styled.section`

`;
// Estilos para los contenedores
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  color: transparentize(white,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;



const ContactArea = styled.div`
  border-bottom: 1px solid white;
`;


const ContactContent = styled.div`
  padding: 30px 0;
`;


// Styled components
const FormContainer = styled.form`
  width: 80%;
  margin: 0 auto;
  text-align: center;  
`;

const Fieldset = styled.fieldset`
  border: none;
`;

const InputGroup = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  background: none;
  border: 2px solid white;
  padding: 2px 10px;
  font-size: 18px;
  &[type='email'] {
    border: none;
    border-bottom: 2px solid white;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0;
  transform: ${({ $animate }) => ($animate ? 'scale(0.6) translateY(-100%)' : 'scale(0.9) translateY(0%)')};
transition: transform 0.2s linear;

`;
const SubmitButton = styled.input`
  padding: 10px 20px;
  margin: 10px 5px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: olive;
  }
`;


const ContactSubtitle = styled.h6`
  font-size: 15px;
  font-weight: 400;
  margin: 10px auto; 
  text-align: center;
  width: 50%; 
`;

const ContactLine = styled.h6`
  font-size: 15px;
  font-weight: 400;
  text-align: center;
   
`;

const Icon = styled(IoIosCall)`
  color: white; /* Establecer el color blanco para el ícono */
  font-size: 15px; /* Tamaño del ícono */
  margin-right: 5px; /* Espacio a la derecha del ícono */
  margin-left: -5px; /* Ajuste para corregir la posición del ícono */
`;

const SocialLinks = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const SocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; /* Cambio a flex */
  flex-direction: row; /* Alinear los íconos en fila */
`;

const SocialListItem = styled.li`
  margin: 0 10px;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.4s ease;

  &:hover {
    border: 1px solid olivedrab;
   
  }
`;

const Footer = styled.footer`
  text-align: center;
  height:40px;
`;




const ContactAndFooter = () => {
  
  const [emailValue, setEmailValue] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleFocus = () => {
    setIsEmailFocused(true);
  };

  const handleBlur = () => {
    if (!emailValue) {
      setIsEmailFocused(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you');
  };
  return (
    <>
    <Section>
      <ContactArea>
        <Container>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <ContactContent>
              <StyledLogo>
                <LogoImage src="/img/logo.png" alt="Logo" />
              </StyledLogo>
              <FormContainer onSubmit={handleSubmit}>
                <Fieldset>
                  <InputGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <Label htmlFor="email" animate={isEmailFocused || !!emailValue}>
                      Email
                    </Label>
                  </InputGroup>
                  <SubmitButton type="submit" value="Submit" />
                </Fieldset>
              </FormContainer>
              <ContactSubtitle>
                "Recibe ofertas exclusivas y descubre las últimas tendencias en nuestra colección de lencería . Suscríbete con tu correo electrónico ahora mismo."
              </ContactSubtitle>
              <ContactLine>
                <Icon /> {/* Ícono de teléfono */}
                +57 305 3647443
                <span>  </span> 
                <FaEnvelope /> {/* Ícono de mensaje */}
                  jorvallejo9@yahoo.com
              </ContactLine>
              <SocialLinks>
                <SocialList>
                  <SocialListItem>
                    <SocialLink href="#">
                      <FaFacebookF />
                    </SocialLink>
                  </SocialListItem>
                  <SocialListItem>
                    <SocialLink href="#">
                      <FaLinkedinIn />
                    </SocialLink>
                  </SocialListItem>
                  <SocialListItem>
                    <SocialLink href="#">
                      <FaGithub />
                    </SocialLink>
                  </SocialListItem>
                  <SocialListItem>
                    <SocialLink href="#">
                      <FaBehance />
                    </SocialLink>
                  </SocialListItem>
                  <SocialListItem>
                    <SocialLink href="#">
                      <FaPinterestP />
                    </SocialLink>
                  </SocialListItem>
                </SocialList>
              </SocialLinks>
            </ContactContent>
          </div>
        </div>
      </Container>
    </ContactArea>
    <Footer>
    <p>Copyright &copy; 2024   All Rights Reserved.</p>
  </Footer>
  </Section>
 
</>
  );
}

export default ContactAndFooter;
