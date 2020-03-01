import React, { useEffect } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Spinner,
  Badge,
  Button
} from 'reactstrap';
import { fetchTopDishes } from 'Redux/ActionCreators/Dishes';
import { fetchCuisines } from 'Redux/ActionCreators/Cuisines';
import { connect } from 'react-redux';
import './trendingDishes.css';

const TrendingDishes = props => {
  //On Mounting Fetch States
  useEffect(() => {
    props.fetchTopDishes();
    props.fetchCuisines();
  }, []);

  //Global Dishes
  const dishes = props.dishes.Dishes;

  //Global Cuisines Array
  const cuisines = props.cuisines.Cuisine;

  const RenderDishes = () => {
    const renderDishArray = dishes.map(item => {
      // Cuisines Array in Each Dish
      const cuisinesInEachDish = item.cuisine;

      //Mapping Cuisines of each Dish with the Global Cuisines Array
      const cuisineOfEachDish = cuisinesInEachDish.map(element => {
        const dishCuisine = cuisines.find(cuisineElement => {
          return element === cuisineElement.id;
        });
        //Returning Array of Mapped Global Cuisines Array with Cuisines Array  in Each Dish
        return dishCuisine;
      });

      //Rendering Each Cuisines for Dish
      const CuisinesNames = () => {
        return cuisineOfEachDish.map(name => {
          return (
            <span key={name.id}>
              {name.name} {''} {''}{' '}
            </span>
          );
        });
      };

      return (
        <div key={item.id}>
          <Card className='card'>
            <CardBody>
              <CardTitle className='dishCardTitle'>{item.dish_name} </CardTitle>
              <Badge color='danger' style={{ color: 'white' }}>
                {item.likes} Fingers Licked
              </Badge>

              <CardSubtitle>
                <CuisinesNames />
              </CardSubtitle>
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
    chefs: state.chef,
    cuisines: state.cuisine
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopDishes: () => {
      dispatch(fetchTopDishes());
    },
    fetchCuisines: () => {
      dispatch(fetchCuisines());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingDishes);
