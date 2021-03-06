import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';

export const logoImage =
  'https://www.jg-cdn.com/chrome/3e7a4dc9d866fda15331414a9072da97.svg';

const HeaderContainer = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  position: absolute;
  top: -90px;
  left: 4px;
  align-items: center;
  justify-content: center;
  > img {
    width: 245px;
  }
  ${media.mid`
    width: 550px;
    margin-top: 0px;
    align-items: flex-start;
  `};
  ${media.tablet`
    width: 1000px;
    top: -84px;
    left: 45px;
    justify-content: flex-start;
  `};
  ${media.desktop`
    left: 57px;
  `};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoImage} alt="JGlogo" />
    </HeaderContainer>
  );
};

export default Header;
