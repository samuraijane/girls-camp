// NAVIGATION

import styled from "styled-components";
import banner from './banner.jpg';

const Style = {
  arrow: styled.img`
    bottom: 30px;
    height: 28px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    z-index: 12;
    &.active {
      left: 1000%;
    }
  `,
  box: styled.div`
    color: white;
    height: 50vh;
    right: 50%;
    position: absolute;
    top: 50%;
    transform: translate(50%, -70%);
    width: 100%;
    z-index: 12;
  `,
  callout: styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 100;
    left: 50%;
    line-height: 1.9rem;
    margin 10px auto 40px;
    padding: 40px 0;
    width: 80%;
  `,
  imageW: styled.div`
    background-image: url(${banner});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    position: relative;
    width: 100%;
    &:after {
      background: rgba(0, 0, 0, 0.5);
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 6;
    }
  `,
  layout: styled.div`
    background: aliceblue;
    text-align: center;
    padding: 40px 0;
  `
}

export default Style;
