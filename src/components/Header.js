import React from "react";
import styled from "styled-components";
const image =
  "https://www.jg-cdn.com/chrome/3e7a4dc9d866fda15331414a9072da97.svg";

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 30px;
  padding-left: 70px;
  img {
    width: 245px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={image} />
      <p>Charity Info</p>
    </HeaderContainer>
  );
};

export default Header;
