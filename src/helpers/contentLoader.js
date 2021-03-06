import React, { Component } from 'react';
import styled from 'styled-components';
import { RotateLoader } from 'react-spinners';
import { media } from '../helpers/sizing';

const StyledLoader = styled.div`
  width: 50vw;
  height: 50vh;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
`;

// Basic React spinner to be rendered when content is loading. Very useful when the
// api's server is being rather slow - indicates that somethings actually happening!

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
          size={20}
          color={'#747474'}
          loading={this.state.loading}
        />
      </StyledLoader>
    );
  }
}

export default MyCodeLoader;

