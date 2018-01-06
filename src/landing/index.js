import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import Style from './style.js';
import arrow from './arrow.png';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {debounce} from '../helpers';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(loginUser(this.props.loggedIn));
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
    window.addEventListener('scroll', this.toggleNavigation);
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
  }

  render() {
    return (
      <div>
        <Style.imageW>
          <Style.box>
            <Style.callout>Vivamus efficitur mauris eget ligula gravida, id accumsan enim luctus. Donec id suscipit justo, ac tincidunt metus. Ut at erat non sem rutrum malesuada.</Style.callout>
          </Style.box>
          <Link to="clips" offset={-46} spy={true} smooth={true} duration={500}><Style.arrow src={arrow} /></Link>
        </Style.imageW>

      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Landing);
