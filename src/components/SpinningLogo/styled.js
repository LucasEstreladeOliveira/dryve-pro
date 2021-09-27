import styled from 'styled-components'

export const SpinningLogoWrapper = styled.div`
  width: 111px;
  perspective: 111px;
  animation: zoom 1.5s cubic-bezier(1, 0.04, 0.46, 0.98);
  position: absolute;
  left: 50%;
  top: 45%;

  @keyframes zoom {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
`

export const SpinningLogoContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 3s;
  animation: rotate 3s 1s cubic-bezier(1, 0.04, 0.46, 0.98) infinite;

  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`

export const SpinningLogoSide = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  z-index: 1;
  >div {
    width: 111px;
  }
  `

export const SpinningLogoBack = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  z-index: 2;
`


// .ud-loader--flip__side svg {
//   width: 55px;
// }
// .ud-loader--flip__side--back {
//   transform: rotateY(180deg);
// }


