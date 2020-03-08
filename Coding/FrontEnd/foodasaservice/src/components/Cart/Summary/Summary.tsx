import React from 'react';
import { Toast, ToastBody, ToastHeader, Row, Col } from 'reactstrap';

const Summary = () => {
  return (
    <div>
      <h4 style={{ position: 'relative', left: '1%', width: 'fit-content' }}>
        Summary
      </h4>
      <Row style={{ marginBottom: '2%' }}>
        <Col sm={12}>
          <Toast>
            <ToastHeader>Ordered Dishes</ToastHeader>
            <ToastBody>
              Choose delicious dishes from the menu and order your menu.{' '}
            </ToastBody>
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

export default Summary;
