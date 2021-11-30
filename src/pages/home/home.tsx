import React from 'react';
import Slider from '../../components/slider/slider';
import Header from '../../containers/header/header';
import MainCard from '../../components/card/mainCard';
import styled from 'styled-components';
import Footer from '../../containers/footer/footer';
import { mainData, artistData } from './mainData';

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Slider />
        <CardContainer>
          <CardWrapper>
            {mainData.map((datas) => {
              const { index, type, url, src, title } = datas;
              return (
                <MainCard
                  key={index}
                  title={title}
                  type={type}
                  url={url}
                  src={src}
                />
              );
            })}
          </CardWrapper>
        </CardContainer>

        <ArtistContainer>
          <Title>ARTISTS</Title>
          <ArtistWrapper>
            {artistData.map((datas) => {
              const { index, type, artistNo, src, title } = datas;
              return (
                <MainCard
                  key={index}
                  artistNo={artistNo}
                  title={title}
                  type={type}
                  src={src}
                />
              );
            })}
          </ArtistWrapper>
        </ArtistContainer>
      </Main>
      <Footer />
    </>
  );
};

export default Home;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10rem 20rem 10rem;
`;

const CardContainer = styled.div``;

const CardWrapper = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 5rem;
`;

const ArtistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
`;

const Title = styled.h1``;

const ArtistWrapper = styled.div`
  display: flex;
  gap: 5rem;
`;
