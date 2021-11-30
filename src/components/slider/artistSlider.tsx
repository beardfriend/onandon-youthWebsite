import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rightArrow from '../../assets/arrow/rightArrow.png';
import leftArrow from '../../assets/arrow/leftArrow.png';
import { Link } from 'react-router-dom';

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      style={{ width: '50px', height: '50px' }}
      src={leftArrow}
      className={className}
      onClick={onClick}
      alt='leftArrow'
    />
  );
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      style={{ width: '50px', height: '50px' }}
      src={rightArrow}
      className={className}
      onClick={onClick}
      alt='leftArrow'
    />
  );
}

const ArtistSlider = ({ data }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };
  return (
    <SliderWrapper {...settings}>
      {data.map((datas: any) => {
        return (
          <Link to={`/artists/${datas.link}`}>
            <SilderContentWrapper imageUrl={datas.imageUrl} key={datas.index}>
              <div className='nameBox'>
                <h1>{datas.name}</h1>
              </div>
            </SilderContentWrapper>
          </Link>
        );
      })}
    </SliderWrapper>
  );
};

export default ArtistSlider;

const SliderWrapper = styled(Slider)`
  width: 100%;
  overflow: hidden;
  padding: 0 100px;
  background: #f7ece1;
  div {
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .slick-prev {
    left: 25px;
    z-index: 1;
  }
  .slick-next {
    right: 25px;
  }
  .slick-track {
    div {
      margin: 5px auto;
    }
  }
`;

const SilderContentWrapper = styled.div<{ imageUrl: string }>`
  position: relative;
  max-width: 150px;
  height: 180px;
  padding: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  background-image: url(${(props) => props.imageUrl});
  background-size: 150px 180px;
  .nameBox {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2px;
    margin: 0 !important;
    background: black;
    color: white;
    h1 {
      width: 100%;
      text-align: center;
    }
  }
`;
