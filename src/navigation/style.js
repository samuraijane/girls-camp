// NEWNAV

import styled from "styled-components";

const Style = {

  navs: styled.ul`
    background: rgba(255, 255, 255, 0.9);
    height: 100%;
    left: -200%;
    padding: 40px 20px;
    position: fixed;
    top: 0;
    transition: all 600ms ease-in-out;
    width: 100%;
    z-index: -1;
    &.active {
      left: 0;
    }
  `,

  nav: styled.li`
    margin: 16px 0;
  `
}

export default Style;
