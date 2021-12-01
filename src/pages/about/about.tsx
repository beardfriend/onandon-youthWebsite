import React from 'react';
import styled from 'styled-components';
import Footer from '../../containers/footer/footer';
import Header from '../../containers/header/header';
import AboutLuxLego from '../../assets/company/about_luxlego.png';

const About = () => {
  return (
    <>
      <Header />
      <Main>
        <AboutBannerContainer>
          <BannerFirstWrapper>
            <h1>ABOUT</h1>
          </BannerFirstWrapper>
          <BannerSecondWrapper>
            <TextBox>
              <h1>
                “<strong style={{ color: '#008084' }}>s</strong>
                <strong style={{ color: '#e3c09b' }}>t</strong>
                <strong style={{ color: '#e45e24' }}>r</strong>
                <strong style={{ color: '#008084' }}>e</strong>
                <strong style={{ color: '#e45e24' }}>a</strong>
                <strong style={{ color: '#1f6330' }}>m</strong>
                <br />
                everything
                <br />
                about us”
              </h1>
              <p>우리들의 모든 것을 스트리밍하다</p>
            </TextBox>
            <DescriptionBox>
              <h1>
                "지역, 인디 아티스트와 작품들을 중심으로 구축한 플랫폼"
                <br />
                <br />
                <br />
                인디스트림이 여러분과 함께 성장하기 위해 물길을 텄습니다.
                <br />
                <br />
                우리 같이 씬을 만들어봐요
              </h1>
              <button>회사 포트폴리오 보러 가기</button>
            </DescriptionBox>
          </BannerSecondWrapper>
        </AboutBannerContainer>
        <CompanyContainer>
          <CompanyLogoWrapper>
            <img src={AboutLuxLego} alt='luxlego' />
            <h1>지역 인디 문화의 씬을 만듭니다</h1>
          </CompanyLogoWrapper>
          <CompanyDesWrapper>
            <h1>Luxlego ( Lux + Lego )</h1>
            <h1>
              개개인이 갖고 있는 재능과 끼를 빛에 비유하여
              <br />그 빛들을 모아 더 큰 빛이 되자는 의미로 만들어진 이름입니다.
            </h1>
          </CompanyDesWrapper>
        </CompanyContainer>
      </Main>
      <Footer />
    </>
  );
};

export default About;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 0 5rem 20rem 5rem;
`;

const AboutBannerContainer = styled.div`
  width: 100%;
  border-top: 3px solid #e85e19;
`;

const BannerFirstWrapper = styled.div`
  margin-top: 2rem;
  h1 {
    font-size: 3rem;
  }
`;

const BannerSecondWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 300px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 3px solid black;
  text-align: center;
  h1 {
    font-size: 5rem;
  }
  strong {
    font-size: 5rem;
  }

  p {
    margin-top: 1.5rem;
    font-size: 2rem;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  button {
    width: 20rem;
    height: 2.5rem;
    margin-top: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    background: #e45e24;
    color: white;
  }
`;

const CompanyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5rem 0;
  margin-top: 4rem;
  border-top: 1px solid gray;
`;

const CompanyLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  img {
    max-width: 45rem;
  }
`;

const CompanyDesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  h1 {
    &:first-child {
      font-size: 5rem;
    }
    &:last-child {
      margin-top: 5rem;
    }
  }
`;
