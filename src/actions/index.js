export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = loggedIn => ({
    type: LOGIN_USER,
    loggedIn
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
