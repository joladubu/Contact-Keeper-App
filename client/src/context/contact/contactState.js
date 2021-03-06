import React, { useReducer } from 'react';
// import uuid from 'uuid';
import {v4 as uuid} from "uuid"; 
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT, 
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CLEAR_CONTACTS
} from '../types';
// const { uuid } = require('uuidv4');


// creating Initial State
const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '444-333-222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '444-999-999',
        type: 'professional'
      }
    ], 
    current: null,
    filtered: null

  };

    // Pulling out the State and dispatch from the reducer using the useReducer hook
    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Actions

    // Add Contact
    const addContact = contact => {
      contact.id = uuid;
      dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // Delete Contact
    const deleteContact = id => {
      dispatch({ type: DELETE_CONTACT, payload: id })
    }

    //Set Current Contact
    const setCurrent = contact => {
      dispatch({ type: SET_CURRENT, payload: contact })
    }

    //Clear Current Contact
    const clearCurrent = () => {
      dispatch({ type: CLEAR_CURRENT });
    }

    //Update Contact
    const updateContact = contact => {
      dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    //Filter Contact
    const filterContacts = text => {
      dispatch({ type: FILTER_CONTACTS, payload: text })
    }

    //Clear Filter
    const clearFilter = () => {
      dispatch({ type: CLEAR_FILTER })
    }


    return (
      <contactContext.Provider
      // states and other actions to be accessed from other components need to be stated/ provided here
        value={{ 
          contacts: state.contacts,
          current: state.current,
          filtered: state.filtered,
          addContact,
          deleteContact,  
          setCurrent,
          clearCurrent, 
          updateContact,
          filterContacts, 
          clearFilter
         }}
      >
        {props.children}
      </contactContext.Provider>
    );
};

export default ContactState;