import Loader from 'components/Loader/Loader';
import {Filter} from 'components/Filter/Filter'; 
import ContactForm from 'components/ContactForm/ContactForm';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactRequest,
  deleteContactRequest,
  getContactsRequest,
} from 'redux/contactsSlice/contactsSlice';
import {
  selectContactError,
selectContactStatus,
} from 'redux/contactsSlice/selectors';
import { selectIsLoggedIn } from 'redux/userSlice/selectors';
import { selectFilteredContacts } from 'redux/filterSlice/selectors';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const status = useSelector(selectContactStatus);
  const error = useSelector(selectContactError);
  const filteredContacts = useSelector(selectFilteredContacts);


  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(getContactsRequest());
  }, [isLoggedIn, dispatch]);

  const handleSubmit = formData => {
    dispatch(addContactRequest(formData));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContactRequest(contactId));
  };

  return (
    <div>
      <ContactForm onSubmit={handleSubmit} />
      {status === 'pending' && <Loader />}
      {error !== null && (
          <p>Oops, some error occured... {error}</p>
      )}
      {filteredContacts?.length > 0 && (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <p>
                <b>Name: </b>
                {contact.name}
              </p>
              <p>
                <b>Number: </b>
                {contact.number}
              </p>
              <button onClick={() => handleDeleteContact(contact.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    <Filter/>

    </div>
  );
}

export default WithAuthRedirect(ContactsPage, '/sign-in');
