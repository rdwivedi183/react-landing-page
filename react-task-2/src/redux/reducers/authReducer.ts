import { ActionTypes } from '../actions/actionTypes';

interface AuthState {
  isAuthenticated: boolean;
  user: [];
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: [],
};

export const authReducer = (state = initialAuthState, action: any): AuthState => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: [],
      };
    default:
      return state;
  }
};
export default authReducer;
