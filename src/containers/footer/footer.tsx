import React from 'react';
import styled from 'styled-components';
import instagram from '../../assets/sns/instagram.png';
import facebook from '../../assets/sns/facebook.png';
import youtube from '../../assets/sns/youtube.png';
import kakaotalk from '../../assets/sns/kakaotalk.png';

const Footer = () => {
  return (
    <FootContainer>
      <FirstWrapper>
        <h1>회사정보</h1>
        <div className='des'>
          <p>
            <strong>사업자번호 :</strong> 803-81-01504
          </p>
          <p>
            <strong> 대표자 :</strong> 임대건
          </p>
          <p>
            <strong>개인정보 관리자 : </strong>류영관
          </p>
          <p>
            <strong> 대표번호 :</strong> 070-4126-4085
          </p>
          <p>
            <strong> 팩스번호 :</strong> 0504-188-1568
          </p>
          <p>
            <strong> 이메일주소 :</strong> luxlego_boss@naver.com
          </p>
          <p>
            <strong> 제작 :</strong> 온앤온 협동조합
          </p>
        </div>
      </FirstWrapper>
      <SecondWrapper>
        <h1>SUPPORTING</h1>
        <p>설명 ------------------</p>
      </SecondWrapper>
      <ThirdWrapper>
        <h1>LUXLEGO</h1>
        <ImageBox>
          <a
            href='https://instagram.com/luxlego_ent?utm_medium=copy_link'
            target='_blank'
            rel='noreferrer'
          >
            <img src={instagram} alt='instagram' />
          </a>
          <a
            href='https://www.facebook.com/LuxlegoOfficial/ '
            target='_blank'
            rel='noreferrer'
          >
            <img src={facebook} alt='facebook' />
          </a>
          <a
            href='https://youtube.com/channel/UC2OD4dAbgOCMzRJMy3jryvQ'
            target='_blank'
            rel='noreferrer'
          >
            <img src={youtube} alt='youtube' />
          </a>
        </ImageBox>
      </ThirdWrapper>
    </FootContainer>
  );
};

export default Footer;

const FootContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 25rem;
  padding: 2rem 5rem;
  background: black;
  color: white;
  opacity: 0.7;
`;

const FirstWrapper = styled.div`
  .des {
    margin-top: 2rem;
  }
  p {
    font-size: 14px;
    line-height: 20px;
  }
  strong {
    font-family: 'NanumSquareEB';
    font-size: 14px;
  }
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ThirdWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2rem;
`;

const ImageBox = styled.div`
  display: flex;
  gap: 1rem;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
