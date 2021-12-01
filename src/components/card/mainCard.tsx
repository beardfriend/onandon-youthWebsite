import React from 'react';
import styled, { css } from 'styled-components';
import ParkTeaMin from '../../assets/home/ParkTeaMin.jpg';
import { Link } from 'react-router-dom';

interface MainCardType {
  type: 'artist' | 'main';
  url?: string | undefined;
  title: string;
  src: string;
  description: string;
  artistNo: number;
}

interface Props {
  readonly type?: string;
}

const MainCard = ({
  title,
  url,
  src,
  description,
  artistNo,
  type
}: MainCardType) => {
  return (
    <MainCardWrapper type={type}>
      <div>
        <Title>{title}</Title>
      </div>
      <ImageBox>
        <Image src={src} alt={title} loading='lazy' />
        <ImageDescription type={type}>
          {type === 'artist' ? <strong>{description}</strong> : description}
        </ImageDescription>
      </ImageBox>
      <MoreDetail
        to={
          type === 'artist'
            ? `artists/${artistNo}`
            : url === undefined
            ? '/'
            : url
        }
        className='test'
      >
        자세히
      </MoreDetail>
    </MainCardWrapper>
  );
};

export default MainCard;

const MainCardWrapper = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 295px;
  height: 294px;
  background: #ded9cc;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  h1 {
    margin-left: ${(props) => props.type === 'artist' && '20px'};
  }
`;

const Title = styled.h1`
  padding: 1rem 0 0 1rem;

  font-size: 1.4rem;
  font-family: 'NanumSquareEB';
`;
const ImageBox = styled.div`
  position: relative;
  height: 180px;
  margin-top: 3rem;
  padding: 0 5rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 150px;
`;

const ImageDescription = styled.p<Props>`
  margin-top: 2rem;
  width: 100%;
  font-size: 1.2rem;
  ${({ type }) => {
    if (type === 'artist') {
      return css`
        text-align: center;
      `;
    }
  }}
  strong {
    font-weight: bold;
    font-size: 15px;
    left: 50px;
  }
`;

const MoreDetail = styled(Link)`
  position: absolute;
  right: 0.5rem;
  bottom: 1rem;
`;

MainCard.defaultProps = {
  type: 'main',
  title: 'ARTIST OF MONTH',
  src: ParkTeaMin,
  description: '설명 ------------------------',
  artistNo: 1,
  url: '/news'
};
