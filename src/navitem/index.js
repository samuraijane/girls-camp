import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import Style from './style.js';
import {isMobile, isFixed} from '../actions';

class NavItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Style.nav>{this.props.name}</Style.nav>
    );
  }
}

const mapStateToProps = state => ({
  isFixed: state.isFixed,
  isMobile: state.isMobile,
  hasScroll: state.navigation.hasScroll
});

export default connect(mapStateToProps)(NavItem);
