import React, {Component} from 'react';
import {connect} from 'react-redux';
import {debounce} from './../helpers';
import {setViewportDimensions} from './../actions';
import Style from './style.js';

class Sizer extends Component {

  constructor(props) {
    super(props);
    this.getViewportDimensions = this.getViewportDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showDimensions: true
    }
  }

  handleClick() {
    this.setState((prevState, props) => ({
      showDimensions: !prevState.showDimensions
    }));
  }

  getViewportDimensions() {
    this.props.dispatch(setViewportDimensions(window.innerWidth, window.innerHeight));
  }

  componentDidMount() {
    this.getViewportDimensions()
    window.addEventListener('resize', debounce(this.getViewportDimensions, 400));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getViewportDimensions);
  }

  render() {
    return (
      <Style.viewports onClick={this.handleClick} className={this.state.showDimensions ? 'inactive' : ''}>
        <Style.viewport>{this.props.viewport.width}</Style.viewport>
        <span> x </span>
        <Style.viewport>{this.props.viewport.height}</Style.viewport>
      </Style.viewports>
    );
  }
}

const mapStateToProps = state => ({
    viewport: state.viewport
});

export default connect(mapStateToProps)(Sizer);
