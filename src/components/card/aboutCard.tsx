import React from 'react';
import styled from 'styled-components';
import defaultImage from '../../assets/company/default.png';

interface AboutCardType {
  title: string;
  logoUrl: string;
}

const AboutCard = ({ title, logoUrl }: AboutCardType) => {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <LogoBox>
        <img src={logoUrl} alt={title} />
      </LogoBox>
    </CardWrapper>
  );
};

export default AboutCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  height: 400px;
  padding: 2rem 0;
  background: #ded9cc;
`;

const Title = styled.h1``;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
  margin-top: 2rem;
  padding: 0 20%;
  img {
    width: 100%;
  }
`;

AboutCard.defaultProps = {
  title: '기본값',
  logoUrl: defaultImage
};
