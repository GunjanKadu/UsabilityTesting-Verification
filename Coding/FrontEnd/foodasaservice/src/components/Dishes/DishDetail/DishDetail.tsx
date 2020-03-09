import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardText, CardTitle, Badge, Button } from 'reactstrap';

import { fetchAllDishes, DetailsToCart } from 'Redux/ActionCreators/Dishes';

import like from 'assets/images/like.png';

const DishDetail = props => {
  const { match, allDishes } = props;

  let dishDetail;
  if (allDishes.DishList.length > 0) {
    if (match.params.id) {
      dishDetail = allDishes.DishList.find(item => {
        console.log(item.id);
        return item.id == match.params.id;
      });
    } else {
      dishDetail = allDishes.DishList.find(item => {
        console.log(item.id);
        return item.id == 8;
      });
    }
  }
  const handleAddToCart = (name, price) => {
    props.detailsToCart({ name, price });
  };
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
        <img
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '100%',
            height: '30%',
            objectFit: 'cover'
          }}
          src={dishDetail.img}
        ></img>

        <div>
          {' '}
          <CardTitle style={{ fontWeight: 'bold' }}>
            <h6
              style={{
                color: '#dc3545',
                position: 'absolute',
                top: '33%',
                left: '45%'
              }}
            >
              {' '}
              {dishDetail.dish_name}
            </h6>

            <div style={{ position: 'absolute', top: '36%', left: '45%' }}>
              <img
                src={like}
                style={{ height: '50px', width: '50px' }}
                alt=''
              />
              <Badge
                href='#'
                style={{ backgroundColor: '#e5e5e5', color: 'black' }}
              >
                {dishDetail.likes}
              </Badge>
            </div>
          </CardTitle>
          <Button
            onClick={() =>
              handleAddToCart(dishDetail.dish_name, dishDetail.price)
            }
            color='danger'
            style={{ position: 'absolute', left: '86%', top: '34%' }}
          >
            Add To Cart
          </Button>
          <CardText
            style={{ position: 'absolute', top: '46%', paddingRight: '10px' }}
          >
            <Card>
              <CardText
                body
                style={{
                  backgroundColor: 'white',
                  padding: '5px'
                }}
              >
                {dishDetail.description}
              </CardText>
            </Card>
          </CardText>
        </div>
      </Card>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchAllDishes: () => {
      dispatch(fetchAllDishes());
    },
    detailsToCart: value => {
      dispatch(DetailsToCart(value));
    }
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DishDetail)
);
