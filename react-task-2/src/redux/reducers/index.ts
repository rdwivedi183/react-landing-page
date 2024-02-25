import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
