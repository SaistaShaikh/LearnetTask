import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
// import { useHistory } from 'react-router-dom';
const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const { setUserData } = useContext(UserContext);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      phoneNumber,
      gender,
    };

    axios
      .post('http://localhost:8000/register', userData)
      .then((response) => {
        console.log(response.data);
        setUserData(userData); 
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
       
      });
  };

 

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Registration Page</h1>
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId='email'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId='phoneNumber'>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter your phone number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId='gender'>
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as='select'
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value=''>Select your gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId='confirmPassword'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Confirm your password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Register
      </Button>
    </Form>
  );
};

export default Registration;
