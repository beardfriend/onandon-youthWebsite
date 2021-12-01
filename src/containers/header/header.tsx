import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from '../../assets/common/banner.png';
import navlogo from '../../assets/common/navlogo.jpg';
import dummyData from './data';

const Header = () => {
  const activeColor = (link: string) => {
    if (window.location.pathname === undefined) {
      return;
    }
    if (window.location.pathname === link) {
      return 'active';
    }
  };
  return (
    <HeaderContainer>
      <TopBanner src={banner} alt='banner' />
      <Navgation>
        <NavList>
          <NavLogo src={navlogo} alt='navlogo' />
          {dummyData.map((datas: any) => {
            const { index, title, link } = datas;
            return (
              <NavItem key={index}>
                <Link to={link} id={activeColor(link)}>
                  {title}
                </Link>
              </NavItem>
            );
          })}
        </NavList>
      </Navgation>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  max-width: 100%;
`;
const TopBanner = styled.img`
  max-width: 100%;
`;

const NavLogo = styled.img``;

const Navgation = styled.nav`
  margin-top: 4rem;
  margin-left: 0.5rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2.5rem;
  width: 100%;
  height: 60px;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  a {
    font-size: 1.5rem;
  }
  #active {
    font-weight: bold;
    color: #ffd65a;
  }
`;
