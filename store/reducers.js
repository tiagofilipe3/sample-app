import createReducer from "./createReducer";
import {GET_USER, GET_USER_FAILURE, GET_USER_SUCCESS} from "./actions";

const initialUserState = {
  user: undefined,
  isLoading: false,
  isFailure: false,
};

const user = createReducer(initialUserState, {
  [GET_USER]: (state, action) => ({
    ...state,
    isLoading: true,
    isFailure: false,
  }),
  [GET_USER_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    isFailure: false,
  }),
  [GET_USER_FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
    isFailure: true,
  }),
});

export default user;