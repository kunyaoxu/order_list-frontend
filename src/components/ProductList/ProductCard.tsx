import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

interface IProps {
  name: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<IProps> = (props: IProps) => {
  return (
    <Card className="product_card">
      <CardImg top width="100%" src="http://via.placeholder.com/320x240" alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.description}</CardText>
        <CardText>price: {props.price}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}

export default ProductCard;