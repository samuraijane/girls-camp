// NEWNAV

import styled from "styled-components";

const Style = {

  mobileicon: styled.div`
    cursor: pointer;
    height: 18px;
    left: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    z-index: 10;
  `,
  stripes: styled.div`
    background: none;
    border: 0;
    border-bottom: 2px solid white;
    left: 0;
    outline: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: border-bottom 1s ease-in-out;
    -webkit-transition: border-bottom 1s ease-in-out;
    width: 100%;
    &:-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    &:before {
      content: "";
      display: block;
      border-bottom: 2px solid white;
      position: absolute;
      top: -8px;
      width: 100%;
      transition: transform 0.5s ease-in-out;
      -webkit-transition: -webkit-transform 0.5s ease-in-out;
    }
    &:after {
      content: "";
      display: block;
      border-bottom: 2px solid white;
      position: absolute;
      top: 8px;
      width: 100%;
      transition: transform 0.5s ease-in-out;
      -webkit-transition: -webkit-transform 0.5s ease-in-out;
    }
    &.active {
      border-bottom: 2px solid transparent;
    }
    &.active:before {
      border-bottom: 2px solid crimson;
      top: 0;
      transform: rotate(-405deg);
      -webkit-transform: rotate(-405deg);
    }
    &.active: after {
      border-bottom: 2px solid crimson;
      top: 0;
      transform: rotate(405deg);
      -webkit-transform: rotate(405deg);
    }
  `,
  wrapper: styled.div`
    background: -moz-linear-gradient(top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    height: 46px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 30;
    &.active {
      background: rgba(28, 67, 130, 1);
    }
  `
}

export default Style;
