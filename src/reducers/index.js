import * as actions from '../actions';

import breakfast from '../img/breakfast.jpg';
import threebw from '../img/threebw.jpg';
import lakebw from '../img/lakebw.jpg';
import smilesbw from '../img/smilesbw.jpg';
import logo from '../img/logo.jpg';

const initialState = {
  clips: [
    {
      title: 'Quisque eget eleifend',
      summary: 'Maecenas pharetra nulla at sapien blandit ornare. Mauris blandit sollicitudin neque ut vehicula. Sed at libero et arcu egestas viverra ac at purus. Nunc est sem, ullamcorper a quam et, ultrices hendrerit nulla. Praesent ut pretium nibh.',
      image: logo,
      position: {
        x: null,
        y: null
      },
      type: 'introduction'
    },
    {
      title: '#Strength',
      summary: 'Donec eu ultrices est, nec semper quam. Sed accumsan quam ac tortor luctus volutpat. Nullam justo massa, molestie non felis ut, suscipit laoreet massa. Nunc suscipit metus mollis rutrum luctus.',
      image: threebw,
      position: {
        x: '50%',
        y: '90%'
      },
      type: 'hashtag'
    },
    {
      title: '#Friends',
      summary: 'Curabitur vel feugiat ante, sed pretium enim. Aenean efficitur ipsum non metus venenatis, quis congue erat iaculis. Suspendisse potenti. Praesent varius at enim non tincidunt. Cras euismod, felis vel porta scelerisque, turpis enim vestibulum ex, eu convallis diam odio sit amet lorem.',
      image: lakebw,
      position: {
        x: '50%',
        y: '90%'
      },
      type: 'hashtag'
    },
    {
      title: '#Confidence',
      summary: 'Aenean dignissim lacus eu dui sodales, non posuere libero efficitur. Suspendisse mattis elit non sapien hendrerit tempus. Etiam ut massa nec augue iaculis euismod. Quisque in ornare ex. Duis at ultrices ligula.',
      image: smilesbw,
      position: {
        x: '50%',
        y: '90%'
      },
      type: 'hashtag'
    }
  ],
  isLoggedIn: false,
  isScroll: true,
  isFixed: false,
  // isMobile: false,
  navigation: {
    hasScroll: true,
    isMobile: false,
  },
  navItems: [
      {
        name: 'About',
        public: true,
        private: true,
        link: '#'
      },
      {
        name: 'FAQ',
        public: true,
        private: true,
        link: '#'
      },
      {
        name: 'Login',
        public: true,
        private: false,
        link: '#',
        func: 'doLogin'
      },
      {
        name: 'Sign Up',
        public: true,
        private: false,
        link: '#'
      },
      {
        name: 'Logout',
        public: false,
        private: true,
        link: '#',
        func: 'doLogout'
      },
      {
        name: 'Profile',
        public: false,
        private: true,
        link: '#'
      }
      
  ],
  viewport: {
    height: 0,
    width: 0
  }
}

export const reducer = (state=initialState, action) => {
  if (action.type === actions.LOGIN_USER) {
    return Object.assign({}, state, {
      isLoggedIn: action.isLoggedIn
    });
  } else if (action.type === actions.LOGOUT_USER) {
    return Object.assign({}, state, {
      isLoggedIn: action.isLoggedIn
    });
  } else if (action.type === actions.IS_MOBILE) {
    return {
      ...state,
      navigation: {
        hasScroll: !state.navigation.hasScroll,
        isMobile: !action.status
      }
    };
  // } else if (action.type === actions.IS_MOBILE) {
  //   return {
  //     ...state,
  //     isMobile: !action.status,
  //     isScroll: !state.isScroll
  //   };
  } else if (action.type === actions.IS_FIXED) {
    return Object.assign({}, state, {
      isFixed: action.status
    });
  } else if (action.type === actions.SET_VIEWPORT_DIMENSIONS) {
    return {
      ...state,
      viewport: {
        height: action.height,
        width: action.width
      }
    };
  }
  return state;
};
