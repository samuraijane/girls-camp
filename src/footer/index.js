import React, { Component } from 'react';
import {connect} from 'react-redux';
import Style from './style.js';

import Sizer from './../sizer';

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Style.layout>
          <ul>
            <Style.item>Girls Camp 2018</Style.item>
            <Style.item><a>Credits</a></Style.item>
          </ul>
        </Style.layout>
        <Sizer />
      </div>
    );
  }
}

export default Footer;
