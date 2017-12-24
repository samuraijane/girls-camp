// NAVIGATION

import styled from "styled-components";

const Style = {
  header: styled.header`
    height: 300px;
    overflow: hidden;
    position: relative;
    width: 100%;
  `,
  item: styled.li`
    display: inline-block;
    margin-left: 16px;
  `,
  imageW: styled.img`
    height: auto;
    transform: translateY(-24%);
    width: 100%;
  `,
  layout: styled.div`
    background: aliceblue;
    text-align: center;
    padding: 40px 0;
  `,
  navs: styled.ul`
    color: white;
    position: absolute;
    right: 20px;
    top: 0;
    z-index: 100;
  `,
  title: styled.h1`
    bottom: 30px;
    color: white;
    left: 60px;
    position: absolute;
  `
}

export default Style;
