import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser, logoutUser} from '../actions';
import Style from './style.js';
import {isMobile, isFixed} from '../actions';

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.doLogin = this.doLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }
  
  doLogin() {
    this.props.dispatch(loginUser(true));
  }
  
  doLogout() {
    this.props.dispatch(logoutUser(false));
  }

  render() {
    return (
      <Style.nav onClick={this[this.props.func]}>{this.props.name}</Style.nav>
    );
  }
}

const mapStateToProps = state => ({
  isFixed: state.isFixed,
  isMobile: state.isMobile,
  hasScroll: state.navigation.hasScroll
});

export default connect(mapStateToProps)(NavItem);
