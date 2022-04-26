import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';
import { Search } from '@material-ui/icons';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : '/search');
  };

  return (
    <Form className="d-flex me-auto" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search products..."
          aria-label="Search Products"
          aria-describedby="button-search"
          style={{ border: '1px solid #6c757d' }}
        ></FormControl>
        <Button variant="outline-secondary" type="submit" id="button-search">
          <Search style={{ color: 'black', fontSize: 16 }} />
          {/* <i className="fas fa-search" style={{ color: 'grey' }}></i> */}
        </Button>
      </InputGroup>
    </Form>
  );
}
