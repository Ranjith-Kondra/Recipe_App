
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input, Form, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

function AddDataButton( props) {

  let fetchdata = props.fetch;

  const [modal, setModal] = useState(false);

  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    password: '',
    address: ''
  })



  const handleInput = (e) => {
    const { name, value } = e.target;
  
    // Convert id to a number if the name is "id"
    // const newValue = name === "id" ? parseInt(value, 10) : value;
  
    setFormdata({
      ...formdata,
      [name]: value
    });
  
    console.log(formdata);
  };
  


  const addData = async() => {
    try {
      let response = await axios.post('http://localhost:4000/register', formdata);
      fetchdata()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit =(event) => {
    event.preventDefault()

    addData()
    console.log('submit is clicked')
    toggle()
    // fetchdata()
    setFormdata({
      username: '',
      email: '',
      password: '',
      address: ''
    });
  }

  const toggle = () => setModal(!modal);

  return (
    <div>

<button
  onClick={toggle}
  className="btn btn-link text-decoration-none small-button"
  style={{ color: 'inherit' }}
>
Register
</button>

      {/* <Button color="info" onClick={toggle}>
        Add Record
      </Button> */}
      {/* isOpen={modal} toggle={toggle} {...args} */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Registration Page</ModalHeader>
        <ModalBody>

          <Form onSubmit={handleSubmit}>
{/* 
            <FormGroup>
              <Label
                for="exampleEmail"
                hidden
              >
                id
              </Label>
              <Input
                id="id"
                name="id"
                placeholder="id"
                type="number"
                value={formdata.id}
                onChange={handleInput}
                required
              />
            </FormGroup>
            {' '} */}


            <FormGroup>
              <Label
                for="exampleEmail"
                hidden
              >
                username
              </Label>
              <Input
                id="username"
                name="username"
                placeholder="username"
                type="text"
                value={formdata.username}
                onChange={handleInput}
                required
              />
            </FormGroup>
            {' '}


            <FormGroup>
              <Label
                for="exampleEmail"
                hidden
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="email"
                type="email"
                value={formdata.email}
                onChange={handleInput}
                required
              />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label
                for="examplePassword"
                hidden
              >
                Password
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={formdata.password}
                onChange={handleInput}
                required
              />
            </FormGroup>
            {' '}



            <FormGroup>
              <Label
                for="exampleEmail"
                hidden
              >
                address
              </Label>
              <Input
                id="address"
                name="address"
                placeholder="address"
                type="text"
                value={formdata.address}
                onChange={handleInput}
                required
              />
            </FormGroup>

            {/* onClick={(e) => { handleSubmit(e) }} */}
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>

        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddDataButton