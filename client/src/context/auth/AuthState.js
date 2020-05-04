import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS, 
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';


// creating Initial State
const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null, 
    user: null
  };

    // Pulling out the State and dispatch from the reducer using the useReducer hook
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Actions

    // Load User

    // Register user

    // Login User

    // Logout User

    // Clear Errors

    return (
      <AuthContext.Provider
      // state values and other actions created to be accessed from other components need to be stated here
        value={{ 
          token: state.token,
          isAuthenticated:state.isAuthenticated,
          loading: state.loading,
          user: state.user,
          error: state.error  
         }}
      >
        {props.children}
      </AuthContext.Provider>
    );
};

export default AuthState;