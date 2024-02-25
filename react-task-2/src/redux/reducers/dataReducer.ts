import { ActionTypes } from '../actions/actionTypes';

interface DataState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action: any): DataState => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case ActionTypes.FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
