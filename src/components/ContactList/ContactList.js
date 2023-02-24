import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

import { deleteContact } from 'redux/contactsSlice';
import { List, ListItem, Title, ParagraphText } from './ContactList.styled';
import { Button } from '../App.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <Title>Contact List</Title>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <div style={{ textAlign: 'left' }}>
              <p>
                <ParagraphText>Contact name:</ParagraphText> {name}
              </p>
              <p>
                <ParagraphText>Tel. number:</ParagraphText> {number}
              </p>
            </div>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
