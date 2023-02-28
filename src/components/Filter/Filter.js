import { useDispatch } from 'react-redux';

import { changeFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import { Content, Title, Input, LabelTitle } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Title>Find contact</Title>
      <Content>
        <LabelTitle>Find contact:</LabelTitle>
        <Input
          type="text"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </Content>
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
