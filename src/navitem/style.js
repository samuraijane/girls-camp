// NEWNAV

import styled from "styled-components";

const Style = {

  navs: styled.ul`
    background: rgba(255, 255, 255, 1);
    height: 1000%;
    left: -200%;
    padding: 40px 20px;
    position: absolute;
    top: 0;
    transition: all 600ms ease-in-out;
    width: 50%;
    &.active {
      left: 0;
      &:after {
        background: rgba(0, 0, 0, 0.7);
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 200%;
        z-index: -1;
      }
    }
  `,

  nav: styled.li`
    cursor: pointer;
    margin: 16px 0;
  `
}

export default Style;
