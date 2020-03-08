import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Account from 'components/Cart/Account/Account';
import Summary from 'components/Cart/Summary/Summary';

const Cart = () => {
  return (
    <Container style={{ position: 'relative', top: '13%', left: '-1vw%' }}>
      <Row>
        <Col sm={7}>
          <Account />
        </Col>
        <Col sm={4}>
          <Summary />
        </Col>
      </Row>
    </Container>
  );
};
export default Cart;
