import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const singup = (dispatch) => {
  return ({ email, password }) => {};
};

const singin = (dispatch) => {
  return ({ email, password }) => {};
};

const singout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { singout, singin, singup },
  { isSignedIn: false }
);
