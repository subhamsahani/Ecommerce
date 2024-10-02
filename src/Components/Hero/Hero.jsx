import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Hero.css';
import img_1 from '../Assets/img1.jpg';
import img_2 from '../Assets/img2.jpg';
import img_3 from '../Assets/img3.jpg';
import img_4 from '../Assets/img4.jpg';

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const carouselDom = carouselRef.current;
    const sliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailRef.current;
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    nextDom.onclick = () => showSlider('next');
    prevDom.onclick = () => showSlider('prev');

    let runTimeOut;

    function showSlider(type) {
      const sliderItemsDom = sliderDom.querySelectorAll('.item');
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);
    }
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {/* list item */}
      <div className="list" ref={sliderRef}>
        <div className="item">
          <img src={img_1} alt="Slide 1" />
          <div className="content">
            {/* <div className="author">LUNDEV</div> */}
            <div className="title">CATEGORY 1</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button onClick={() => navigate('/mens')}>SEE MORE</button> {/* Navigate to Men's category */}
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img_2} alt="Slide 2" />
          <div className="content">
            {/* <div className="author">LUNDEV</div> */}
            <div className="title">CATEGORY 2</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button onClick={() => navigate('/womens')}>SEE MORE</button> {/* Navigate to Women's category */}
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img_3} alt="Slide 3" />
          <div className="content">
            {/* <div className="author">LUNDEV</div> */}
            <div className="title">CATEGORY 3</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button onClick={() => navigate('/kids')}>SEE MORE</button> {/* Navigate to Kids category */}
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img_4} alt="Slide 4" />
          <div className="content">
            {/* <div className="author">LUNDEV</div> */}
            <div className="title">CATEGORY 4</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      {/* list thumbnail */}
      <div className="thumbnail" ref={thumbnailRef}>
        <div className="item">
          <img src={img_1} alt="Thumbnail 1" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={img_2} alt="Thumbnail 2" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={img_3} alt="Thumbnail 3" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={img_4} alt="Thumbnail 4" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
      </div>
      {/* next prev */}
      <div className="arrows">
        <button ref={prevRef} id="prev">&lt;</button>
        <button ref={nextRef} id="next">&gt;</button>
      </div>
      {/* time running */}
      <div className="time" ref={timeRef}></div>
    </div>
  );
};

export default Hero;
