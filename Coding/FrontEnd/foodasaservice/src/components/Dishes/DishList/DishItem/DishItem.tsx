import React from 'react';
import { Card, CardText, CardTitle, Badge } from 'reactstrap';
import like from 'assests/images/like.png';

const DishItem = props => {
  return (
    <div style={{ height: '80vh', overflow: 'auto', marginLeft: '2%' }}>
      <Card
        body
        style={{
          backgroundColor: 'white',
          marginBottom: '5px',
          borderRadius: '4px',
          height: '130px'
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
            position: 'relative',
            left: '30%'
          }}
        >
          {' '}
          <CardTitle style={{ fontWeight: 'bold' }}>
            <h6 style={{ color: '#dc3545' }}> Name</h6>
            <img src={like} style={{ height: '15px', width: '15px' }} alt='' />

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
      <Card
        body
        style={{
          backgroundColor: 'white',
          marginBottom: '5px',
          borderRadius: '4px',
          height: '130px'
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
            position: 'relative',
            left: '30%'
          }}
        >
          {' '}
          <CardTitle style={{ fontWeight: 'bold' }}>
            <h6 style={{ color: '#dc3545' }}> Name</h6>
            <img src={like} style={{ height: '15px', width: '15px' }} alt='' />

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
      <Card
        body
        style={{
          backgroundColor: 'white',
          marginBottom: '5px',
          borderRadius: '4px',
          height: '130px'
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
            position: 'relative',
            left: '30%'
          }}
        >
          {' '}
          <CardTitle style={{ fontWeight: 'bold' }}>
            <h6 style={{ color: '#dc3545' }}> Name</h6>
            <img src={like} style={{ height: '15px', width: '15px' }} alt='' />

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
      <Card
        body
        style={{
          backgroundColor: 'white',
          marginBottom: '5px',
          borderRadius: '4px',
          height: '130px'
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
            position: 'relative',
            left: '30%'
          }}
        >
          {' '}
          <CardTitle style={{ fontWeight: 'bold' }}>
            <h6 style={{ color: '#dc3545' }}> Name</h6>
            <img src={like} style={{ height: '15px', width: '15px' }} alt='' />

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
      <Card
        body
        style={{
          backgroundColor: 'white',
          marginBottom: '5px',
          borderRadius: '4px',
          height: '130px'
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
            position: 'relative',
            left: '30%'
          }}
        >
          {' '}
          <CardTitle style={{ fontWeight: 'bold' }}>
            <h6 style={{ color: '#dc3545' }}> Name</h6>
            <img src={like} style={{ height: '15px', width: '15px' }} alt='' />

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
      <Card
        body
        style={{
          backgroundColor: 'white',
          marginBottom: '5px',
          borderRadius: '4px',
          height: '130px'
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
            position: 'relative',
            left: '30%'
          }}
        >
          {' '}
          <CardTitle style={{ fontWeight: 'bold' }}>
            <h6 style={{ color: '#dc3545' }}> Name</h6>
            <img src={like} style={{ height: '15px', width: '15px' }} alt='' />

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

export default DishItem;
