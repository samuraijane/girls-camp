// SIZER

import styled from "styled-components";

const Style = {
  viewports: styled.ul`
    background: rgba(0, 0, 0, 0.7);
    bottom: 0;
    color: white;
    cursor: pointer;
    font-family: "LucidaGrande", "Helvetica", sans-serif;
    font-size: 10px;
    line-height: 14px;
    padding: 4px 6px;
    position: fixed;
    right: 0;
    z-index: 999;
    &.inactive {
      opacity: 0
    }
  `,
  viewport: styled.li`
    display: inline-block
  `
}

export default Style;
