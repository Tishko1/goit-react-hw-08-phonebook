import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectStatus } from 'redux/userSlice/selectors';
import Loader from 'components/Loader/Loader';

import {
    Form,
    Title,
    LabelGroup,
    LabelTitle,
    Input,
    Button
  } from './ContactForm.styled';

function ContactForm({ onSubmit }) {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      name: nameInputRef.current.value,
      number: phoneInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
       <LabelGroup>
      <Title> Контакти</Title>
      <LabelTitle>
        <span>Ім'я: </span>
        <Input
          type="text"
          name="name"
          placeholder={'Anthony Blinkin'}
          ref={nameInputRef}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelTitle>
      <LabelTitle>
        <span>Телефон: </span>
        <Input
          type="text"
          name="phone"
          placeholder={'+380-666-66-66'}
          ref={phoneInputRef}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelTitle>
      
      <Button disabled={status === 'pending'} type="submit">
        {status === 'pending' && <Loader />}
        Додати контакт
      </Button>
      {status === 'pending' && <Loader />}
      </LabelGroup>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;





// import { useState } from 'react';
// import { selectContacts } from 'redux/selectors';

// import { useDispatch, useSelector } from 'react-redux';
// // import { addContact } from 'redux/operations';
// import {
//   Form,
//   Title,
//   LabelGroup,
//   LabelTitle,
//   Input,
//   Button
// } from './ContactForm.styled';
// // import { Button } from '../../App.styled';

//  function ContactForm() {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   const handleChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const onFormSubmit = event => {
//     event.preventDefault();
//     const isInclude = contacts.some(contact => contact.name === name);
//     if (isInclude) {
//       alert('This contact is already in your contact list');
//       return;
//     }
//     dispatch(addContact({ name: name, number: number }));

//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <div>
//       <Title>Add contact</Title>

//       <Form onSubmit={onFormSubmit}>
//         <LabelGroup>
//           <label>
//             <LabelTitle>Name:</LabelTitle>
//             <Input
//               onChange={handleChange}
//               value={name}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label>
//             <LabelTitle>Number:</LabelTitle>
//             <Input
//               onChange={handleChange}
//               value={number}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//         </LabelGroup>
//         <Button type="submit">Add</Button>
//       </Form>
//     </div>
//   );
// }

// export default ContactForm;
