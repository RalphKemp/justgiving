import React from 'react';
import styled from 'styled-components';

const InfoCardContainer = styled.div`
  background-color: #99e0bd;
  width: 50%;
  height: 500px;
`;

const InfoCard = ({ charityName }) => {
  return (
    <InfoCardContainer>
      the charity name is {charityName}
    </InfoCardContainer>
  );
}

export default InfoCard;
