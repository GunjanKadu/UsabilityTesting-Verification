import React from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';

import './working.css';
const Working = () => {
  return (
    <div style={{ marginTop: '5em' }}>
      <h3 style={{ margin: '15px' }}>foodnextdoor.de </h3>
      <h1 style={{ color: '#b12432', marginBottom: '125px' }}>Your Choice. </h1>
      <Row>
        <Col sm={3}>
          <div className='circle'></div>
          <Card
            style={{
              height: '40vh',
              margin: '20px',
              position: 'relative',
              left: '65%'
            }}
            body
            color='light'
          >
            <div className='classSpacing'>
              <CardTitle className='Header'>Search</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </div>
          </Card>
        </Col>
        <Col sm={3}>
          <div className='circle'></div>
          <Card
            style={{
              height: '40vh',
              margin: '20px',
              position: 'relative',
              left: '65%'
            }}
            body
            color='light'
          >
            <div className='classSpacing'>
              <CardTitle className='Header'>Order</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </div>
          </Card>
        </Col>
        <Col sm={3}>
          <div className='circle'></div>
          <Card
            style={{
              height: '40vh',
              margin: '20px',
              position: 'relative',
              left: '65%'
            }}
            body
            color='light'
          >
            <div className='classSpacing'>
              <CardTitle className='Header'> Eat</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Working;
