import PropTypes from 'prop-types';
import { Content, Title, Input, LabelTitle } from './Filter.styled';

export const Filter = ({ filterValue, onChange }) => {
  return (
    <div>
      <Title>Find contact</Title>
      <Content>
        <LabelTitle>Find contact:</LabelTitle>
        <Input type="text" value={filterValue} onChange={onChange} />
      </Content>
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
