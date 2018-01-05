import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import Style from './style.js';
import {isMobile, isFixed} from '../actions';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.classList.toggle('disableScroll', !this.props.hasScroll)
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('disableScroll', !nextProps.hasScroll)
  }
  componentWillUnmount() {
    document.body.classList.remove('disableScroll')
  }

  render() {
    return (
      <Style.navs className={this.props.showMobile}>
        <Style.nav>About</Style.nav>
        <Style.nav>FAQ</Style.nav>
        <Style.nav>Login</Style.nav>
        <Style.nav>Sign Up</Style.nav>
      </Style.navs>
    );
  }
}

const mapStateToProps = state => ({
  isFixed: state.isFixed,
  isMobile: state.isMobile,
  hasScroll: state.navigation.hasScroll
});

export default connect(mapStateToProps)(Navigation);
