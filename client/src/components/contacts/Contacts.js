import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  /** 
  Initializing ContactContext using useContext hook which gives us access to any state 
  or action related to the Contact Context
  */
  const contactContext = useContext(ContactContext); 

  // pulling out contacts array from the contactState using destructuring
  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
 