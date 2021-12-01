import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../containers/header/header';
import ArtistSlider from '../../components/slider/artistSlider';
import artistdata from './artitstData';
import gun1 from '../../assets/artists/detail/gun1.jpg';
import gun2 from '../../assets/artists/detail/gun2.jpg';
import gun3 from '../../assets/artists/detail/gun3.png';
import Footer from '../../containers/footer/footer';

const Artists = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <Header />
      <ArtistContainer>
        <Title>ARTISTS</Title>
        <ArtistSlider data={artistdata} setState={setState} />
      </ArtistContainer>
      <MusicianContainer>
        <TitleBox>
          <Title>Musician | Gun. Aa</Title>
        </TitleBox>
        <MusicianWrapper>
          <ImageBox>
            <img src={gun1} style={{ height: '480px' }} alt='gun1' />
            <ImageColumnBox>
              <img style={{ height: '240px' }} src={gun2} alt='gun2' />
              <img src={gun3} style={{ height: '240px' }} alt='gun3' />
            </ImageColumnBox>
          </ImageBox>
          <DescriptionBox>
            <div>
              <h1>
                임대건 (Lim Dae Gun)
                <br />
                Gun.Aa
              </h1>
            </div>

            <div>
              <h2>Information</h2>
              <p className='marginTop'>출 생: 1992.08.31</p>
              <p>신 체 : 183cm / 70kg</p>
              <p>학 력 : 상명대학교 연극과 拙</p>
              <p>INSTA : gun.aa_official</p>
              <p>활 동 : 래퍼, 배우, 성우, 모델</p>
            </div>
            <OrangeButton>아티스트 후원하기</OrangeButton>
          </DescriptionBox>
        </MusicianWrapper>

        <TitleBox>
          <Title>Portfolio</Title>
        </TitleBox>
        <PortfolioWrapper>
          <PortfolioBox>
            <h1>Music</h1>
            <p>방송 KBS 대전 TV이웃 다정다감</p>
            <p>음원 ‘다행이야 – ONDO’ 피쳐링</p>
            <p>음원 ‘THIRSTY – COOP’ 피쳐링</p>
            <p>2020전국힙합콘테스트 대상</p>
            <p>기업행사, 지역행사 섭외 다수</p>
          </PortfolioBox>
          <PortfolioBox>
            <h1>ACT</h1>
            <p>방송 T-BROAD ‘별자리’ 래퍼 역</p>
            <p>방송 OBS ‘핑크히포’ 핑크히포 역</p>
            <p>천안 대표홍보영상 남자 주인공 역</p>
            <p>한산모시축제 홍보영상 남자 주인공 역</p>
            <p>천안흥타령축제 홍보영상 남자 주인공 역</p>
          </PortfolioBox>
        </PortfolioWrapper>
      </MusicianContainer>
      <Footer />
    </>
  );
};

export default Artists;

const TitleBox = styled.div`
  width: 100%;
  margin-top: 8rem;
`;

const Title = styled.h1`
  margin-left: 2rem;
  font-size: 3rem;
`;

const ArtistContainer = styled.div``;

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
