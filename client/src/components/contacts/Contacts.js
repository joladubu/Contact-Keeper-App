import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
// Importing css transition group
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Contacts = () => {
  /**  
  Initializing ContactContext using useContext hook which gives us access to any state 
  or action related to the Contact Context
  */
  const contactContext = useContext(ContactContext); 

  // pulling out contacts array from the contactState using destructuring
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a Contact</h4>
  }


  return (
    <Fragment>
      <TransitionGroup>
      { filtered !==null 
        ? filtered.map(contact => (
          <CSSTransition key={contact.id} timeout={500} classNames="item">
            <ContactItem  contact={contact} />
          </CSSTransition>
        )) 
        : contacts.map(contact => (
          <CSSTransition key={contact.id} timeout={500} classNames="item">
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
 