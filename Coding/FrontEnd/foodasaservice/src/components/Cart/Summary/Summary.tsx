import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Toast, ToastBody, ToastHeader, Row, Col } from 'reactstrap';

const Summary = props => {
  useEffect(() => {}, [props.cart.CartContent]);

  const orderedItems = props.cart.CartContent;

  const RenderItems = () => {
    if (orderedItems.length > 0) {
      return orderedItems.map(item => {
        return (
          <ToastBody>
            {item.name} {item.price}{' '}
          </ToastBody>
        );
      });
    } else {
      return (
        <ToastBody>
          Choose delicious dishes from the menu and order your menu.{' '}
        </ToastBody>
      );
    }
  };
  return (
    <div>
      <h4 style={{ position: 'relative', left: '1%', width: 'fit-content' }}>
        Summary
      </h4>
      <Row style={{ marginBottom: '2%' }}>
        <Col sm={12}>
          <Toast>
            <ToastHeader>Ordered Dishes</ToastHeader>
            <RenderItems />
          </Toast>
        </Col>
      </Row>
      <Row style={{ marginBottom: '2%' }}>
        <Col sm={12}>
          <Toast>
            <ToastBody style={{ textAlign: 'left', fontWeight: 'bold' }}>
              SubTotal:
            </ToastBody>
            <ToastBody style={{ textAlign: 'left', fontWeight: 'bold' }}>
              GrandTotal:
            </ToastBody>
          </Toast>
        </Col>
      </Row>
      <Row style={{ marginBottom: '4%' }}>
        <Col sm={12}>
          <Toast>
            <ToastBody style={{ textAlign: 'left', fontWeight: 'bold' }}>
              <span> Promo</span>{' '}
              <input type='text' placeholder='Enter Promo Code' />
              <button className='btn btn-danger' style={{ marginLeft: '18px' }}>
                Apply
              </button>
            </ToastBody>
          </Toast>
        </Col>
      </Row>
      <Row style={{ marginBottom: '2%' }}>
        <Col sm={12}>
          <Toast>
            <button style={{ width: '100%' }} className='btn btn-danger'>
              Order
            </button>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allDishes: state.allDishes,
    account: state.account,
    cuisines: state.cuisine,
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Summary);
