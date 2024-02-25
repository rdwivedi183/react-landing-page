import { ActionTypes } from './actionTypes';

interface LoginUserAction {
  type: ActionTypes.LOGIN_USER;
  payload: any; // Assuming token is a string
}

interface LogoutUserAction {
  type: ActionTypes.LOGOUT_USER;
}

interface FetchDataRequestAction {
  type: ActionTypes.FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
  type: ActionTypes.FETCH_DATA_SUCCESS;
  payload: any; // Adjust the payload type as per your actual data structure
}

interface FetchDataFailureAction {
  type: ActionTypes.FETCH_DATA_FAILURE;
  payload: string; // Assuming error message is a string
}

export type DataAction = LoginUserAction | LogoutUserAction | FetchDataRequestAction | FetchDataSuccessAction | FetchDataFailureAction;

export const loginUser = (data: any) => ({
  type: ActionTypes.LOGIN_USER,
  payload: data,
});

export const logoutUser = () => ({
  type: ActionTypes.LOGOUT_USER,
});


export const fetchDataFromAPI = (data: any) => ({
  type: ActionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});


export const fetchDataRequest = () => ({
  type: ActionTypes.FETCH_DATA_REQUEST,
});

export const fetchDataFailure = (error: string) => ({
  type: ActionTypes.FETCH_DATA_FAILURE,
  payload: error,
});



