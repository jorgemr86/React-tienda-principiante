import React, { useEffect } from 'react';
import './categori.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Categoria = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Registra el plugin ScrollTrigger

    const portfolioAnimation = () => {
      gsap.from('.work__item, .work__item-num', {
        y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
        scrollTrigger: {
          trigger: '.work',
          start: 'top bottom',
          scrub: 1.9
        }
      });

      gsap.from('.work__item-img img', {
        scale: 1.6,
        scrollTrigger: {
          trigger: '.work__wrapp',
          start: 'top bottom',
          scrub: 1.9
        }
      });
    };

    portfolioAnimation(); // Llama a la función de animación cuando el componente se monte

    // Asegúrate de limpiar los efectos cuando el componente se desmonte
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill(); // Detiene todas las animaciones de ScrollTrigger
      });
    };
  }, []); 

  return (
 
    <section className="work">
    <div className="work__wrapp">
      <div className="work__item" data-speed="-300">
        <span className="work__item-num" data-speed="-1000">Exclusiva</span>
        <div className="work__item-img">
          <img src="img/modelo1.jpg" alt="3" />
        </div>
      </div>
      <div className="work__item" data-speed="-600">
        <span className="work__item-num" data-speed="-500">seductora</span>
        <div className="work__item-img">
          <img src="img/modelo8.jpg" alt="4" />
        </div>
      </div>
      <div className="work__item" data-speed="-700">
        <span className="work__item-num" data-speed="-700">elegante</span>
        <div className="work__item-img">
          <img src="img/modelo6.jpg" alt="5" />
        </div>
      </div>
      <div className="work__item" data-speed="-400">
        <span className="work__item-num" data-speed="-200"> sofisticada</span>
        <div className="work__item-img">
          <img src="img/modelo19.jpg" alt="6" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Categoria;


