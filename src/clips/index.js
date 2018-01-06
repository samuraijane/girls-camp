import React from 'react';
import {connect} from 'react-redux';
import Style from './style.js';
import styled from 'styled-components';

const Hashtag = styled.div`
  left: ${props => props.stuff};
  position: absolute;
  top: ${props => props.stuff};
  transform: translate(-50%, -50%);
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 40px;
  margin: 10px 0 4px;
`;

function Clips(props) {
  let bclip;
  let visual;
  if (props.type === 'hashtag') {
    visual = <Style.nimgAlt><img src={props.image} alt="logo" /><Hashtag stuff={props.clips[1].position.x}>{props.title}</Hashtag></Style.nimgAlt>
    bclip = <Style.bclip><p>{props.summary}</p></Style.bclip>
  } else {
    visual = <Style.nimg><img src={props.image} alt="logo" /></Style.nimg>
    bclip = <Style.bclip><h2>{props.title}</h2><p>{props.summary}</p></Style.bclip>
  }

  return (
    <Style.wrapper className="cf">
      {visual}
      {bclip}
    </Style.wrapper>
  );

}

// export default Clips;

const mapStateToProps = state => ({
  clips: state.clips
});

export default connect(mapStateToProps)(Clips);
