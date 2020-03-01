import React, { useEffect, useState } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner
} from 'reactstrap';
import { fetchTopDishes } from 'Redux/ActionCreators/Dishes';
import { connect } from 'react-redux';
import './trendingDishes.css';

const TrendingDishes = props => {
  useEffect(() => {
    props.fetchTopDishes();
  }, []);

  const dishes = props.dishes.Dishes;

  const RenderDishes = () => {
    const renderDishArray = dishes.map(item => {
      return (
        <div key={item.id}>
          <Card className='card'>
            <CardBody>
              <CardTitle>{item.dish_name}</CardTitle>
              <CardSubtitle>Indian</CardSubtitle>
              <hr />
            </CardBody>
            <img
              className='image'
              width='30%'
              src='https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/07/main/bean-veg-chili-ck.jpg?itok=Wuhrkr2_'
              alt='Card image cap'
            />
            <CardBody className='text'>
              <CardText>
                {' '}
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
    return <>{renderDishArray}</>;
  };
  return (
    <div>
      {props.dishes.IsLoading ? (
        <Spinner
          style={{ width: '5rem', height: '5rem' }}
          type='grow'
          color='info'
        />
      ) : (
        <div>
          <h3>Featured Dishes</h3>
          <RenderDishes />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    dishes: state.dish,
    chefs: state.chef
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopDishes: () => {
      dispatch(fetchTopDishes());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingDishes);
