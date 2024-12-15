import React, { useEffect,useRef } from 'react';
import styled  from 'styled-components';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 200px;
  margin-bottom:5%;
`;

const Text = styled.h1`
    font-size: 10vw;
  letter-spacing: -.01em;
  line-height: 100%;
  margin: 0;
  
  width: 100%;
 
  background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
  

  border-bottom: 1px solid #2F2B28;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  &:hover > span {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`;

const Span = styled.span`
 position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  color: #0D0D0D;
  clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  transform-origin: center;
  transition: all cubic-bezier(.1,.5,.5,1) 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElements = textRef.current.querySelectorAll('.text');

    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <Container ref={textRef}>
      <Text className="text">UN DISEÑO<Span>¡UNICO¡</Span></Text>
      <Text className="text">PRECIOS<Span>DE LOCURAAAA</Span></Text>
    </Container>
  );
};


export default Main;