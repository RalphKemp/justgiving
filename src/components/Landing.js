import React from "react";
import Card from "./Card";
import Header from "./Header";
import styled from "styled-components";

const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#ffffff, #d8c1da);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <Header />
      <Card />
    </LandingContainer>
  );
};

export default Landing;
