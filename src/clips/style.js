// CLIPS

import {connect} from 'react-redux';
import styled from "styled-components";

const Style = {

  bclip: styled.div`
    float: left;
    margin-top: 20px;
    padding: 0 12px;
    vertical-align: middle;
  `,

  nimg: styled.div`
    float: left;
    height: 290px;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
    width: 100%;
  `,

  nimgAlt: styled.div`
    float: left;
    height: 290px;
    overflow: hidden;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 100%;
    &:before {
      background: rgba(0, 0, 0, 0.1);
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 10;
    }
  `,

  wrapper: styled.li`
    margin: 22px 0;
  `

}

export default Style;
