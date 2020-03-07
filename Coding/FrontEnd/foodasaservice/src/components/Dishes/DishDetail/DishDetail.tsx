import React from 'react';
import { Card, CardText, CardTitle, Badge } from 'reactstrap';

const DishDetail = () => {
  return (
    <div
      style={{
        position: 'relative',
        top: '6.5%',
        width: '130%',
        height: '100%'
      }}
    >
      <Card
        body
        style={{
          backgroundColor: 'white',
          marginBottom: '5px',
          borderRadius: '4px',
          height: '100%'
        }}
      >
        {/* <img
  style={{
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '25%',
    height: '100%'
  }}
  src=''
></img> */}
        <div
          style={{
            width: '70%',
            height: '90%',
            float: 'left'
          }}
        >
          {' '}
          <CardTitle style={{ fontWeight: 'bold' }}>
            <h6 style={{ color: '#dc3545' }}> Name</h6>

            <Badge
              href='#'
              style={{ backgroundColor: '#e5e5e5', color: 'black' }}
            >
              Likes
            </Badge>
          </CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </div>
      </Card>
    </div>
  );
};

export default DishDetail;
