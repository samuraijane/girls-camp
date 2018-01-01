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
    font-size: 1.5rem;
    left: 50%;
    margin 10px auto 40px;
    padding: 40px 0;
    width: 90%;
  `,
  item: styled.li`
    background: rgba(28, 67, 130, 0);
    border: 1px solid rgba(255, 255, 255, 0.7);
    display: inline-block;
    margin-right: 20px;
    padding: 6px 0;
    transition: all 300ms linear;
    width: 110px;
    &:last-of-type {
      margin-right: 0;
    }
    &:hover {
      background: rgba(28, 67, 130, 0.5);
      border: 1px solid transparent;
    }
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
  `,
  navs: styled.ul`
    margin: 0 auto;
    font-size: 1.1rem;
    text-align: center;
    text-transform: uppercase;
    width: 80%;
  `,
  title: styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-align: center;
  `
}

export default Style;

// height: auto;
// width: 100%;
//
//
// &:after {
//   background: rgba(0, 0, 0, 0.5);
//   content: '';
//   height: 100%;
//   left: 0;
//   position: absolute;
//   top: 0;
//   width: 100%;
//   z-index: 6;
// }
