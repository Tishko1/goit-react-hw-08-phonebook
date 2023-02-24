import { useState } from 'react';
import { selectContacts } from 'redux/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import {
  Form,
  Title,
  LabelGroup,
  LabelTitle,
  Input,
} from './ContactForm.styled';
import { Button } from '../App.styled';
import { nanoid } from 'nanoid';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const isInclude = contacts.some(contact => contact.name === name);
    if (isInclude) {
      alert('This contact is already in your contact list');
      return;
    }
    dispatch(addContact({ id: nanoid(), name: name, number: number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Title>Add contact</Title>

      <Form onSubmit={onFormSubmit}>
        <LabelGroup>
          <label>
            <LabelTitle>Name:</LabelTitle>
            <Input
              onChange={handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <LabelTitle>Number:</LabelTitle>
            <Input
              onChange={handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </LabelGroup>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
}
