import React, { Component } from 'react';
import {connect} from 'react-redux';

import Clips from '../clips';
import Style from './style.js';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const clips = this.props.clips.map((clip, index) => {
      return (
        <Clips key={index} {...clip} />
      )
    });

    return (
      <Element name="clips">
        <Style.wrapper>
          {clips}
        </Style.wrapper>
      </Element>
    );
  }
}

const mapStateToProps = state => ({
    clips: state.clips
});

export default connect(mapStateToProps)(Main);
