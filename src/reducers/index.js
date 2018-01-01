import * as actions from '../actions';

import breakfast from '../img/breakfast.jpg';
import girls from '../img/girls.jpg';
import lake from '../img/lake.jpg';
import smiles from '../img/smiles.jpg';
import logo from '../img/logo.jpg';

const initialState = {
  clips: [
    {
      title: 'Grow in Spirit',
      summary: 'Maecenas pharetra nulla at sapien blandit ornare. Mauris blandit sollicitudin neque ut vehicula. Sed at libero et arcu egestas viverra ac at purus. Nunc est sem, ullamcorper a quam et, ultrices hendrerit nulla. Praesent ut pretium nibh.',
      image: logo
    },
    {
      title: 'Grow in Strength',
      summary: 'Donec eu ultrices est, nec semper quam. Sed accumsan quam ac tortor luctus volutpat. Nullam justo massa, molestie non felis ut, suscipit laoreet massa. Nunc suscipit metus mollis rutrum luctus.',
      image: girls
    },
    {
      title: 'Grow in Relationships',
      summary: 'Curabitur vel feugiat ante, sed pretium enim. Aenean efficitur ipsum non metus venenatis, quis congue erat iaculis. Suspendisse potenti. Praesent varius at enim non tincidunt. Cras euismod, felis vel porta scelerisque, turpis enim vestibulum ex, eu convallis diam odio sit amet lorem.',
      image: lake
    },
    {
      title: 'Grow in Confidence',
      summary: 'Aenean dignissim lacus eu dui sodales, non posuere libero efficitur. Suspendisse mattis elit non sapien hendrerit tempus. Etiam ut massa nec augue iaculis euismod. Quisque in ornare ex. Duis at ultrices ligula.',
      image: smiles
    }
  ],
  loggedIn: false,
  isFixed: false,
  isMobile: false
}

export const reducer = (state=initialState, action) => {
  if (action.type === actions.LOGIN_USER) {
    console.log('A', !action.loggedIn);
    return Object.assign({}, state, {
      loggedIn: !action.loggedIn
    });
  } else if (action.type === actions.IS_MOBILE) {
    return Object.assign({}, state, {
      isMobile: !action.status
    })
  } else if (action.type === actions.IS_FIXED) {
    return Object.assign({}, state, {
      isFixed: action.status
    })
  }
  return state;
};
