import React, { Component } from 'react';
import {connect} from 'react-redux';

import Clips from '../clips';
import './style.css';

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
      <ul>
        {clips}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
    clips: state.clips
});

export default connect(mapStateToProps)(Main);
