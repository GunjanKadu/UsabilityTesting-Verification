import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Account from 'components/Cart/Account/Account';
import Summary from 'components/Cart/Summary/Summary';
import { DisbableCartAlert } from 'Redux/ActionCreators/Cart';
import { connect } from 'react-redux';

const Cart = props => {
  //Cart Content Added Popup
  useEffect(() => {
    props.disableCartAlert();
  }, []);
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
const mapDispatchToProps = dispatch => {
  return {
    disableCartAlert: () => {
      dispatch(DisbableCartAlert());
    }
  };
};
const mapStateToProps = state => {
  return {
    account: state.account,
    cart: state.cart
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
