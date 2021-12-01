import React from 'react';
import styled from 'styled-components';
import SliderContainer from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EmptyArrow = () => {
  return <div style={{ visibility: 'hidden' }}></div>;
};

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <EmptyArrow />,
    prevArrow: <EmptyArrow />
  };
  return (
    <SliderWrapper {...settings}>
      <iframe
        width='1280'
        height='600'
        src='https://www.youtube.com/embed/edvyA2WfsiM'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        style={{ border: '20px' }}
      ></iframe>
      <iframe
        width='1280'
        height='600'
        src='https://www.youtube.com/embed/OK_66pFwJRY'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        style={{ border: '20px' }}
      ></iframe>
      <iframe
        width='1280'
        height='600'
        src='https://www.youtube.com/embed/6JFRQjpsG2E'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        style={{ border: '20px' }}
      ></iframe>
    </SliderWrapper>
  );
};
export default Slider;

const SliderWrapper = styled(SliderContainer)`
  width: 100%;
  height: 600px;
  .slick-dots {
    bottom: 1rem;
    width: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
  .slick-dots li button {
    &:before {
      font-size: 2rem;
      color: orange;
    }
  }
`;
