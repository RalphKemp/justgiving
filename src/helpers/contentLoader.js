import React, { Component } from 'react';
import styled from 'styled-components';
import { RotateLoader } from 'react-spinners';
import { media } from '../helpers/sizing';

const StyledLoader = styled.div`
  position: absolute;
  top: -80px;
  left: 45%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.mid`
    top: -55%;
  `};
`;

class MyCodeLoader extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    return (
      <StyledLoader className="ref">
        <RotateLoader
          sizeUnit={'px'}
          size={25}
          color={'#747474'}
          loading={this.state.loading}
        />
      </StyledLoader>
    );
  }
}

export default MyCodeLoader;
//
