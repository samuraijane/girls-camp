import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import Style from './style.js';
import arrow from './arrow.png';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.handleClick = this.handleClick.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  handleClick() {
    this.props.dispatch(loginUser(this.props.loggedIn));
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(window.innerWidth, window.innerHeight);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    return (
      <div>
        <Style.imageW>
          <Style.box>
            <Style.title>Girls Camp 2018</Style.title>
            <Style.callout>Vivamus efficitur mauris eget ligula gravida, id accumsan enim luctus.</Style.callout>
            <Style.navs>
              <Style.item><a>Register</a></Style.item>
              <Style.item><a onClick={this.handleClick}>Login</a></Style.item>
            </Style.navs>
          </Style.box>
          <Link to="clips" spy={true} smooth={true} duration={500}><Style.arrow src={arrow} /></Link>
        </Style.imageW>

      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Navigation);
