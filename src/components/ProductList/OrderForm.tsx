import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { IAppReduxState } from 'reducers';
import { onInputChange, callPostOrdersApi } from 'reducers/orderform/actions';

const onChangeWrap = (e: React.ChangeEvent<HTMLInputElement>) => {
  return {
    key: e.target.name,
    value: e.target.value
  };
}

const preventEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
  e.charCode === 13 && e.preventDefault();
}

const OrderForm: React.FC = () => {
  const formData = useMappedState((state: IAppReduxState) => state.orderform)
  const dispatch = useDispatch();

  return (
    <Form
      className="order_form"
      onSubmit={
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(callPostOrdersApi(formData));
          return false;
        }
      }
    >
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          required={true}
          onChange={
            (e) => {
              dispatch(onInputChange(onChangeWrap(e)));
            }
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          pattern="[\w-]+@[\w]+(\.[\w]+)+"
          required
          onChange={
            (e) => {
              dispatch(onInputChange(onChangeWrap(e)));
            }
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          type="text"
          name="address"
          required
          onChange={
            (e) => {
              dispatch(onInputChange(onChangeWrap(e)));
            }
          }
        />
      </FormGroup>
      <Button disabled={formData.product_ids.length < 1}>Submit</Button>
    </Form>
  );
}

export default OrderForm;

