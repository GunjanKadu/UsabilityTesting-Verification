import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardText, CardTitle, Badge } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchAllDishes } from 'Redux/ActionCreators/Dishes';
import like from 'assests/images/like.png';

const DishDetail = props => {
  const { match, location, history, allDishes, fetchAllDishes } = props;

  let dishDetail;
  console.log(allDishes.DishList);
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
          src='https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4='
        ></img>
        <div>
          {' '}
          <CardTitle style={{ fontWeight: 'bold' }}>
            <h6
              style={{
                color: '#dc3545',
                position: 'absolute',
                top: '33%'
              }}
            >
              {' '}
              {dishDetail.dish_name}
            </h6>
            <div style={{ position: 'absolute', top: '36%', left: '1%' }}>
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
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
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
    cuisines: state.cuisine
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAllDishes: () => {
      dispatch(fetchAllDishes());
    }
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DishDetail)
);
