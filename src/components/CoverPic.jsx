import React from "react";
import GIF from "../assets/mainvideo/main.mp4";
import styled from "styled-components";

const PicContainer = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  } ;
`;

const CoverPic = () => {
  return (
    <PicContainer>
      <video src={GIF} type="video/mp4" autoPlay muted loop />
    </PicContainer>
  );
};

export default CoverPic;
