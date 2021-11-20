import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://pixarplanet.com/blog/wp-content/uploads/2019/01/bao.jpg" />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF737B93E2F2ABE27C74CBBEB322F18A421E7986129E9989587CEF2295B0447F/scale?width=1440&aspectRatio=1.78&format=png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
        <img src = "/images/play-icon-black.png" />
        <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src = "/images/play-icon-white.png" />
        <span>TRAILER</span>
        </TrailerButton>
        <AddButton>

        </AddButton>
        <GroupWatchButton>

        </GroupWatchButton>
      </Controls>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div``
const PlayButton = styled.button`
  
`
const TrailerButton = styled.button``
const AddButton = styled.button``
const GroupWatchButton = styled.button``
