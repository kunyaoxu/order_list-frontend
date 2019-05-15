import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

interface IProps {
  name: string;
  description: string;
  price: number;
  onChange(e: any): any;
  checked: boolean;
}

const ProductCard: React.FC<IProps> = (props: IProps) => {
  return (
    <Card className="product_card">
      <CardImg top width="100%" src="http://via.placeholder.com/320x240" alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.description}</CardText>
        <CardText>price: {props.price}</CardText>
        {/* <Button>Button</Button> */}
        <input onChange={props.onChange} checked={props.checked} type="checkbox"/>
      </CardBody>
    </Card>
  );
}

export default ProductCard;