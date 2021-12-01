import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import artistDetailData from './artistDetailData';
import NotFound from '../404/notFound';
import ryu1 from '../../assets/artists/detail/ryu1.png';
import ryu2 from '../../assets/artists/detail/ryu2.png';
import ryu3 from '../../assets/artists/detail/ryu3.png';

const ArtistDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const findedData = artistDetailData.filter(
    (data) => String(data.index) === id
  );
  console.log(id);
  if (Number(id) === 3 || Number(id) === 4) {
    return (
      <MusicianContainer>
        <TitleBox>
          <Title>Musician</Title>
        </TitleBox>
        <MusicianWrapper>
          <ImageBox>
            <img src={ryu1} style={{ height: '480px' }} alt='gun1' />
            <ImageColumnBox>
              <img style={{ height: '240px' }} src={ryu2} alt='gun2' />
              <img src={ryu3} style={{ height: '240px' }} alt='gun3' />
            </ImageColumnBox>
          </ImageBox>
          <DescriptionBox>
            <div>
              <h1>
                류영관, 양정석
                <br />
                RYU YOUNG GWAN / YANG JEONG SEOK
                <br />
                BIG BRO (빅브로)
              </h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2>Information</h2>
              <div style={{ display: 'flex', gap: '4rem' }}>
                <div>
                  <p className='marginTop'>이 름: 류영관</p>
                  <p>출 생 : 1996.09.21</p>
                  <p>신 체 : 185cm / 105kg</p>
                  <p>INSTA : luxlego_big_official</p>
                  <p>장 르 : 발라드 / R&B</p>
                </div>
                <div>
                  <p className='marginTop'>이 름: 양정석</p>
                  <p>출 생 : 1991.12.06</p>
                  <p>신 체 : 182cm / 90kg</p>
                  <p>INSTA : luxlego_bro_official</p>
                  <p>장 르 : 발라드 / R&B</p>
                </div>
              </div>
            </div>
            <OrangeButton>아티스트 후원하기</OrangeButton>
          </DescriptionBox>
        </MusicianWrapper>

        <TitleBox>
          <Title>Portfolio</Title>
        </TitleBox>
        <PortfolioWrapper>
          <PortfolioBox>
            <h1>Agency</h1>
            <p>천안 세계 크리스마스축제</p>
            <p>서천 한산 소곡주축제</p>
            <p>천안 흥타령 춤축제</p>
            <p>아산 물들이다전 행사</p>
            <p>아산 삼성 디스플레이 계절행사</p>
            <p>아산 성웅 이순신축제</p>
            <p>아산 빛나장 축제</p>
            <p>충남 보부상로드 등</p>
            <p>아산 빛나장축제</p>
            <p>기업행사, 지역행사 섭외 다수</p>
          </PortfolioBox>
          <PortfolioBox>
            <h1>방송출연</h1>
            <p>방송 KBS 대전 TV이웃 다정다감</p>
            <p>KBS 노래가 좋아</p>
            <p>SNS 창현의 거리노래방</p>
          </PortfolioBox>
        </PortfolioWrapper>
      </MusicianContainer>
    );
  }
  if (findedData.length === 0) {
    return <NotFound />;
  }

  const {
    index,
    firstImage,
    type,
    secondImage,
    thirdImage,
    name,
    nickName,
    birthDay,
    body,
    school,
    insta,
    action,
    data
  }: any = findedData[0];

  return (
    <>
      <MusicianContainer>
        <TitleBox>
          <Title>{type === 'actor' ? 'Actor' : 'Musician'}</Title>
        </TitleBox>
        <MusicianWrapper>
          <ImageBox>
            <img src={firstImage} style={{ height: '480px' }} alt='gun1' />
            <ImageColumnBox>
              <img style={{ height: '240px' }} src={secondImage} alt='gun2' />
              <img src={thirdImage} style={{ height: '240px' }} alt='gun3' />
            </ImageColumnBox>
          </ImageBox>
          <DescriptionBox>
            <div>
              <h1>
                {name}
                <br />
                {nickName}
              </h1>
            </div>

            <div>
              <h2>Information</h2>
              <p className='marginTop'>출 생: {birthDay}</p>
              <p>신 체 : {body}</p>
              <p>학 력 : {school}</p>
              <p>INSTA : {insta}</p>
              <p>활 동 : {action}</p>
            </div>
            <OrangeButton>아티스트 후원하기</OrangeButton>
          </DescriptionBox>
        </MusicianWrapper>

        <TitleBox>
          <Title>{type === 'actor' ? 'FILMOGRAPHY' : 'Portfolio'}</Title>
        </TitleBox>
        <PortfolioWrapper>
          {data.map((datas: any) => {
            const { title, subject } = datas;
            return (
              <PortfolioBox key={title}>
                <h1>{title}</h1>
                {subject.map((data: any) => {
                  return <p>{data.text}</p>;
                })}
              </PortfolioBox>
            );
          })}
        </PortfolioWrapper>
      </MusicianContainer>
    </>
  );
};

export default ArtistDetail;

const TitleBox = styled.div`
  width: 100%;
  margin-top: 8rem;
`;

const Title = styled.h1`
  margin-left: 2rem;
  font-size: 3rem;
`;

const MusicianContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20rem;
`;

const MusicianWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin-top: 5rem;
`;

const ImageBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  padding: 1rem;
  width: 100%;
  height: 500px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ImageColumnBox = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: column;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem;
  h1 {
    font-size: 3rem;
    line-height: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 2.3rem;
  }
  .marginTop {
    margin-top: 2rem;
  }
`;

export const OrangeButton = styled.button`
  width: 40rem;
  height: 9rem;
  cursor: pointer;
  border: none;
  font-family: NanumSquareEB;
  font-size: 3rem;
  background: #e45e24;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const PortfolioWrapper = styled.div`
  width: 100%;
  padding: 0 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const PortfolioBox = styled.div`
  margin-top: 5rem;
  h1 {
    font-size: 3rem;
    line-height: 4rem;
  }
  p {
    font-size: 2.3rem;
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;
