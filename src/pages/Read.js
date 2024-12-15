import React, { useEffect } from 'react';
 import './read.scss';
 import { gsap } from 'gsap';
 import { ScrollTrigger } from 'gsap/ScrollTrigger';
 import LocomotiveScroll from 'locomotive-scroll';
 
 gsap.registerPlugin(ScrollTrigger);




const Read = () => {
    useEffect(() => {
        const init = () => {
          
    
          const locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector(".scroll-container"),
            smooth: true,
            lerp: 0.035,
            multiplier: 0.75,
            repeat: true
          });
    
          locomotiveScroll.on("scroll", ScrollTrigger.update);
    
          ScrollTrigger.scrollerProxy(".scroll-container", {
            scrollTop(value) {
              return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
              };
            },
            pinType: document.querySelector(".scroll-container").style.transform ? "transform" : "fixed"
          });
    
          ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
          ScrollTrigger.refresh();
        };
    
        init();
    
        // Cleanup function
        return () => {
          // Cleanup code, if needed
        };
      }, []);
    return (
        <div className="scroll-container">
        <header className="site-header">
          <p className="logo">MVD</p>
        </header>
  
        <section className="chapter">
          <div className="chapter-inner-wrapper">
            <figure className="chapter-image-frame">
              <img className="chapter-image" src="img/modelo14.jpg" alt="" data-scroll data-scroll-speed="-4" />
            </figure>
            <div className="chapter-text-wrapper">
              <h2 className="chapter-heading" data-scroll data-scroll-speed="2">Sensualidad y Sofisticación</h2>
              <p className="chapter-text" data-scroll data-scroll-speed="3">cada artículo está diseñado para brindarte la máxima comodidad y un ajuste impecable. Nuestros materiales de alta calidad no solo se sienten increíblemente suaves contra tu piel, sino que también garantizan durabilidad y resistencia. Experimenta la elegancia y la sofisticación con cada prenda, diseñada para realzar tu belleza natural con un toque de lujo sin igual.</p>
            </div>
          </div>
        </section>
  
        <section className="chapter">
          <div className="chapter-inner-wrapper">
            <figure className="chapter-image-frame">
              <img className="chapter-image" src="img/modelo16.jpg" alt="" data-scroll data-scroll-speed="-4" />
            </figure>
            <div className="chapter-text-wrapper">
              <h2 className="chapter-heading" data-scroll data-scroll-speed="2">Elegancia Intemporal</h2>
              <p className="chapter-text" data-scroll data-scroll-speed="3">Experimenta la elegancia y la sofisticación con cada prenda, diseñada para realzar tu belleza natural con un toque de lujo sin igual.</p>
            </div>
          </div>
        </section>
  
        <section className="chapter">
          <div className="chapter-inner-wrapper">
            <figure className="chapter-image-frame">
              <img className="chapter-image" src="img/modelo17.jpg" alt="" data-scroll data-scroll-speed="-4" />
            </figure>
            <div className="chapter-text-wrapper">
              <h2 className="chapter-heading" data-scroll data-scroll-speed="2">Confort y diseño</h2>
              <p className="chapter-text" data-scroll data-scroll-speed="3">La lencería de mujer de MVD ofrece prendas que no pueden faltar en el armario femenino. Elegante y sensual, nuestra línea realza el encanto de toda mujer con propuestas inspiradas en el estilo italiano, para ofrecer ropa interior y conjuntos de lencería de calidad. ¡Regálate la lencería MVD para lucir siempre un estilo romántico y refinado!.</p>
            </div>
          </div>
        </section>
  
        <section className="chapter">
          <div className="chapter-inner-wrapper">
            <figure className="chapter-image-frame">
              <img className="chapter-image" src="img/modelo18.jpg" alt="" data-scroll data-scroll-speed="-4" />
            </figure>
            <div className="chapter-text-wrapper">
              <h2 className="chapter-heading" data-scroll data-scroll-speed="2">Lencería de mujer</h2>
              <p className="chapter-text" data-scroll data-scroll-speed="3">Esta línea de MVD se caracteriza por una cuidado excepcional en sus tejidos y unos diseños capaces de satisfacer las necesidades de cualquier mujer. Todas las prendas de nuestra colección están confeccionadas con encajes y diferentes texturas para lucir un conjunto de lencería exclusivo. Cortes innovadores y formas reinterpretadas junto a materiales y bordados preciados hacen que nuestra colección de lencería para mujer sea única e inimitable..</p>
            </div>
          </div>
        </section>
  
       
      </div>
    );
};

export default Read;
