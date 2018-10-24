import React, { Component } from "react";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";
import { media } from "../helpers/sizing";

const StyledLoader = styled.div`
  width: 100vw;
  position: relative;
  height: 33vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin-top: -10px;
  margin-left: -10px;
  ${media.tablet`
    height: 100vh;
    width: 50vw;
    position: absolute;
    top: 0px;
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
        <BeatLoader
          sizeUnit={"px"}
          size={25}
          color={"#747474"}
          loading={this.state.loading}
        />
      </StyledLoader>
    );
  }
}

export default MyCodeLoader;
