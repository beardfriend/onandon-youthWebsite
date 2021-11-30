import React from 'react';
import styled from 'styled-components';
import AboutCard from '../../components/card/aboutCard';
import Footer from '../../containers/footer/footer';
import Header from '../../containers/header/header';
import luxlego from '../../assets/company/luxlego.jpg';
import onandon from '../../assets/company/onandon.png';

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
              <h1>설명 및 비전</h1>
            </DescriptionBox>
          </BannerSecondWrapper>
        </AboutBannerContainer>
        <AboutCardContainer>
          <AboutCard title='정글메이커(럭스레고)' logoUrl={luxlego} />
          <AboutCard title='온앤온 협동조합' logoUrl={onandon} />
          <AboutCard title='그려' />
          <AboutCard title='와트' />
        </AboutCardContainer>
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
  min-height: 100vh;
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
`;

const AboutCardContainer = styled.div`
  display: flex;
  gap: 3rem;
  padding: 2rem 0;
  margin-top: 4rem;
  border-top: 1px solid gray;
`;
