import React from 'react';
import styled from 'styled-components';
import Header from '../../containers/header/header';
import ArtistSlider from '../../components/slider/artistSlider';
import artistdata from './artitstData';

const Artists = () => {
  return (
    <>
      <Header />
      <ArtistContainer>
        <h1 className='title'>ARTISTS</h1>
        <ArtistSlider data={artistdata} />
      </ArtistContainer>
      <MusicianContainer></MusicianContainer>
    </>
  );
};

export default Artists;

const ArtistContainer = styled.div`
  .title {
    margin-left: 2rem;
  }
`;

const MusicianContainer = styled.div``;
