import React, { useEffect, useState } from 'react';
import { Container,
  Row,
  Col
} from 'reactstrap';
import ProductCard from './ProductCard';
import PaginationArea from './PaginationArea';
import OrderForm from './OrderForm';
import { callGetProductsApi } from 'reducers/products/actions';
import { toggleCheckbox } from 'reducers/orderform/actions'
import { IAppReduxState } from 'reducers';
import { useMappedState, useDispatch } from 'redux-react-hook';

const DIVISOR = 4;

const ProductList: React.FC = () => {

  const products = useMappedState((state: IAppReduxState) => state.products);
  const orderform = useMappedState((state: IAppReduxState) => state.orderform);
  const dispatch = useDispatch();

  const [ currentIndex, setCurrentIndex ] = useState(1);
  
  useEffect(() => {
    dispatch(callGetProductsApi());
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className="product_list">
      <Container>
        <Row>
          {
            products
              .filter((e, index) =>
                (index >= (DIVISOR * (currentIndex - 1))) &&
                (index <= (DIVISOR * currentIndex - 1))
              )
              .map((product) => {
                return (
                  <Col xs="12" sm="6" key={product.id}>
                    <ProductCard
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      onChange={() => {dispatch(toggleCheckbox(product.id))}}
                      checked={orderform.product_ids.indexOf(product.id) !== -1}
                    />
                  </Col>
                );
            })
          }
        </Row>
        <Row>
          <Col>
            {
              products.length > 0 ?
                <PaginationArea
                  resultCount={products.length}
                  divisor={DIVISOR}
                  activeIndex={currentIndex}
                  onClick={setCurrentIndex}
                />
                :
                <div>there is nothing ...</div>
            }
          </Col>
        </Row>
        <Row>
          <Col>
            <OrderForm/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductList;