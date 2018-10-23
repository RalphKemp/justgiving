import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/sizing';

const image =
  'https://www.jg-cdn.com/chrome/3e7a4dc9d866fda15331414a9072da97.svg';

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 41px;
  margin-bottom: 20px;
  img {
    width: 245px;
  }
  ${media.tablet`
      align-items: flex-start;
  `};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={image} />
    </HeaderContainer>
  );
};

export default Header;
