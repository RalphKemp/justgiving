import React from "react";
import styled from "styled-components";
const image =
  "https://www.jg-cdn.com/chrome/3e7a4dc9d866fda15331414a9072da97.svg";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={image} />
    </HeaderContainer>
  );
};

export default Header;
