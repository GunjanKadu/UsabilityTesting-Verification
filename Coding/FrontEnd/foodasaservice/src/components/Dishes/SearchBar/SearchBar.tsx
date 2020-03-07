import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const SearchBar = ({ onChangeValue, value }) => {
  return (
    <InputGroup style={{ width: '95.5%', margin: '0px 0px 2% 2%' }}>
      <InputGroupAddon addonType='prepend'>
        <Button color='success'>Search</Button>
      </InputGroupAddon>
      <Input
        placeholder='Enter Your Favourite Dish'
        value={value}
        onChange={onChangeValue}
      />
    </InputGroup>
  );
};

export default SearchBar;
