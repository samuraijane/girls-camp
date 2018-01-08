export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = isLoggedIn => ({
    type: LOGIN_USER,
    isLoggedIn
});

export const IS_MOBILE = 'IS_MOBILE';
export const isMobile = (status) => ({
    type: IS_MOBILE,
    status
});

export const IS_FIXED = 'IS_FIXED';
export const isFixed = (status) => ({
    type: IS_FIXED,
    status
});

export const SET_VIEWPORT_DIMENSIONS = 'SET_VIEWPORT_DIMENSIONS';
export const setViewportDimensions = (width, height) => ({
    type: SET_VIEWPORT_DIMENSIONS,
    height,
    width
});
