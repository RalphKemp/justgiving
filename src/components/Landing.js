import React from "react";
import CardList from "./CardList";
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
      <CardList />
    </LandingContainer>
  );
};

export default Landing;
