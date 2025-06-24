import React, { useState , useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input, Form, FormGroup, Label } from 'reactstrap';
import axios from 'axios';


function AddUpdateButton(props) {

  const [modal, setModal] = useState(false);

  const [formdata, setFormdata] = useState({
    id: props.data.id,
    username: props.data.username,
    mailid: props.data.mailid,
    password: props.data.password,
    address: props.data.address,
});



  const handleInput = (e) => {
    const { name, value } = e.target;
    const newValue = name === "id" ? parseInt(value, 10) : value;
    setFormdata({
      ...formdata,
      [name]: newValue,
    });
  };
  


  const addData = async() => {
    try {
       await axios.put('http://localhost:4000/update', formdata);
      props.fetch();
    } catch (error) {
      console.log(error)
    }
  }

useEffect(() => {
    addData()
}, [])

  const handleSubmit =(event) => {
    event.preventDefault()

    addData()
    toggle()
    props.fetch();
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="warning" onClick={toggle}>
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Updating Record</ModalHeader>
        <ModalBody>

          <Form onSubmit={handleSubmit}>

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
            {' '}


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
                id="mailid"
                name="mailid"
                placeholder="mailid"
                type="email"
                value={formdata.mailid}
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

export default AddUpdateButton