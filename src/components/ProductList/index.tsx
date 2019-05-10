import React, { useEffect } from 'react';
import { Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import ProductCard from './ProductCard';
import { callGetProductsApi } from 'reducers/products/actions';
import { IAppReduxState } from 'reducers';
import { useMappedState, useDispatch } from 'redux-react-hook';

const ProductList: React.FC = () => {

  const products = useMappedState((state: IAppReduxState) => state.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(callGetProductsApi());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="product_list">
      <Container>
        <Row>
          {/* <Col xs="12" sm="6">
            <ProductCard
              name={"item 1"}
              description={"item 1 description"}
              price={200}
            />
          </Col>
          <Col xs="12" sm="6">
            <ProductCard
              name={"item 2"}
              description={"item 2 description"}
              price={300}
            />
          </Col>
          <Col xs="12" sm="6">
            <ProductCard
              name={"item 3"}
              description={"item 3 description"}
              price={500}
            />
          </Col>
          <Col xs="12" sm="6">
            <ProductCard
              name={"item 4"}
              description={"item 4 description"}
              price={200}
            />
          </Col> */}
          {products.map((product, index) => {
            return (
              <Col xs="12" sm="6" key={product.id}>
                <ProductCard
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col>
            <Pagination>
              <PaginationItem>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductList;