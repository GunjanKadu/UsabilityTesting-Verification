import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardText, CardTitle, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchAllDishes } from 'Redux/ActionCreators/Dishes';

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
            width: '25%',
            height: '100%'
          }}
          src={dishDetail.img}
        ></img>
        <div
          style={{
            width: '70%',
            height: '90%',
            float: 'left'
          }}
        >
          {' '}
          <CardTitle style={{ fontWeight: 'bold' }}>
            <h6 style={{ color: '#dc3545' }}> {dishDetail.dish_name}</h6>

            <Badge
              href='#'
              style={{ backgroundColor: '#e5e5e5', color: 'black' }}
            >
              {dishDetail.like}
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
