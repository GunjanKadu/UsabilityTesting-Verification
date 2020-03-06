import React, { useEffect } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Spinner,
  Badge,
  CardImg
} from 'reactstrap';
import { fetchTopDishes } from 'Redux/ActionCreators/Dishes';
import { fetchCuisines } from 'Redux/ActionCreators/Cuisines';
import { connect } from 'react-redux';
import './trendingDishes.css';
import like from 'assests/images/like.png';
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
          <Card
            body
            style={{
              backgroundColor: 'white',
              marginBottom: '30px',
              borderRadius: '30px',
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
              src={item.img}
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
                <h6 style={{ color: '#dc3545' }}> {item.dish_name}</h6>
                <CuisinesNames />
                <img
                  src={like}
                  style={{ height: '15px', width: '15px' }}
                  alt=''
                />

                <Badge
                  href='#'
                  style={{ backgroundColor: '#e5e5e5', color: 'black' }}
                >
                  {item.likes}
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
    });
    return <>{renderDishArray}</>;
  };
  return (
    <div>
      {props.dishes.IsLoading ? (
        <Spinner
          style={{ width: '5rem', height: '5rem' }}
          type='grow'
          color='danger'
        />
      ) : (
        <div>
          <h3 style={{ position: 'relative', left: '8%', top: '-5%' }}>
            <Badge color='danger'>Featured Dishes</Badge>
          </h3>

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
