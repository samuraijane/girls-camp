import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import banner from './banner.jpg';
import Style from './style.js';

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(loginUser(this.props.loggedIn));
  }

  render() {
    return (
      <div>
        <Style.header>
          <Style.navs>
            <Style.item><a>Register</a></Style.item>
            <Style.item><a onClick={this.handleClick}>Login</a></Style.item>
          </Style.navs>
          <Style.imageW src={banner} alt="logo" />
          <Style.title>Girls Camp 2018</Style.title>
        </Style.header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Navigation);
