import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const MySlider = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

    ScrollTrigger.scrollerProxy(".site__main__contents", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector(".site__main__contents").style.transform
        ? "transform"
        : "fixed",
    });
    const productImgs = document.querySelectorAll('.product__img');

    productImgs.forEach((productImg, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: productImg,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
          scroller: ".site__main__contents",
        }
      })
        .to(productImg, {
          opacity: 0.2,
          y: 150,
        })
        .to(productImg, {
          opacity: 0.8,
          y: 0,
        })
        .to(productImg, {
          opacity: 0.2,
          y: -150,
        });
    });
    
    // Limpiar LocomotiveScroll y ScrollTrigger cuando el componente se desmonte
    return () => {
      locoScroll.destroy();
      ScrollTrigger.getAll().forEach(instance => instance.kill());
      
    };
  }, []);

 
 
    const productsData = [
      {
        id: 1,
        title: 'Maria Victoria Diseños',
        description: 'Despierta tus sentidos con la suavidad incomparable de nuestra lencería. Diseñada con telas delicadas y cortes precisos, te abrazará como una segunda piel.',
        subDescription: 'brindándote una experiencia sensorial única. Cada detalle, desde las costuras impecables hasta los toques elegantes, te hará sentir segura y radiante en todo momento.',
        imageUrls: [
          'img/modelo3.jpg' ,
          'img/modelo5.jpg',
          'img/modelo13.jpg',
          'img/modelo12.jpg',
          'img/modelo9.jpg',
          'img/modelo11.jpg',
        ]
      },
     
      // Agrega más objetos de datos para representar más productos según sea necesario
    ];
  
    return (
      <div className="site__main__contents" data-scroll-container>
      {productsData.map(product => (
        <section key={product.id} className="product" data-scroll-section data-scroll-section-id={`section${product.id}`}>
          <div className="product__inner">
            <div className="product__box" data-scroll data-scroll-speed="0">
              <h5 data-scroll>{product.title}</h5>
              <p className="product__txt" data-scroll>{product.description}</p>
              <p className="product__sub" data-scroll>{product.subDescription}</p>
              <p className="product__btn" data-scroll>
                <NavLink to="/Read" className="product__link">
                  <span>leer mas</span>
                </NavLink>
              </p>
            </div>
            {product.imageUrls.map((imageUrl, index) => (
              <div key={index} className={`product__img js-img0${index + 1}`}>
                <img src={imageUrl} alt="" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>

     
  );
};

export default MySlider;
