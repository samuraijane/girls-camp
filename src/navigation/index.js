import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import Style from './style.js';
import {isMobile, isFixed} from '../actions';
import NavItem from './../navitem';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //document.body.classList.toggle('disableScroll', !this.props.hasScroll)
  }
  componentWillReceiveProps(nextProps) {
    //document.body.classList.toggle('disableScroll', !nextProps.hasScroll)
  }
  componentWillUnmount() {
    //document.body.classList.remove('disableScroll')
  }

  render() {
    const navs = this.props.navItems.map((item, index) => {
      if (this.props.isLoggedIn === false && item.public === true) {
        return (
          <NavItem key={index} {...item} />
        )
      } else if (this.props.isLoggedIn === true && item.private === true) {
        return (
          <NavItem key={index} {...item} />
        )
      }
    });
    return (
      <Style.navs className={this.props.showMobile}>
        {navs}
      </Style.navs>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  navItems: state.navItems
});

export default connect(mapStateToProps)(Navigation);
