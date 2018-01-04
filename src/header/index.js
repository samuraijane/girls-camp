import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import Style from './style.js';
import {isMobile, isFixed} from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        mobile: 46
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.toggleNavigationBg = this.toggleNavigationBg.bind(this);
  }

  handleClick() {
    this.props.dispatch(isMobile(this.props.isMobile));
  }

  toggleNavigationBg() {
    let offset = 46;
    if(window.pageYOffset >= window.innerHeight - offset) {
      this.props.dispatch(isFixed(true));
    } else {
      this.props.dispatch(isFixed(false));
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleNavigationBg);
  }

  render() {
    return (
      <Style.wrapper className={this.props.isFixed ? 'active' : ''}>
        <Style.mobileicon onClick={this.handleClick}>
          <Style.stripes className={this.props.isMobile ? 'active' : ''}></Style.stripes>
        </Style.mobileicon>
      </Style.wrapper>
    );
  }
}

const mapStateToProps = state => ({
  isFixed: state.isFixed,
  isMobile: state.isMobile,
});

export default connect(mapStateToProps)(Header);
