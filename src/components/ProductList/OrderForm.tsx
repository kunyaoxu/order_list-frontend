import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { IAppReduxState } from 'reducers';


const OrderForm: React.FC = () => {
  return (
    <Form className="order_form">
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" required={true}/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" pattern="[\w-+.]+@[\w]+(\.[\w]+)+" required/>
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="address" required/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default OrderForm;

