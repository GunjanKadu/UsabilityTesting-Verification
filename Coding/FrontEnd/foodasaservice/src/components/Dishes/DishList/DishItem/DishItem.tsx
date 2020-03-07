import React, { useEffect } from 'react';
import { Card, CardText, CardTitle, Badge, Spinner } from 'reactstrap';
import { connect } from 'react-redux';

import { Link, withRouter } from 'react-router-dom';
import { fetchAllDishes } from 'Redux/ActionCreators/Dishes';
import like from 'assests/images/like.png';

const DishItem = props => {
  const { match, location, history } = props;

  useEffect(() => {
    props.fetchAllDishes();
  }, []);

  const listOfAllDishes = props.allDishes.DishList;
  //Global Cuisines Array
  const cuisines = props.cuisines.Cuisine;

  const RenderDishesItems = () => {
    const renderDishItems = listOfAllDishes.map(item => {
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
        <div key={item.id} style={{ cursor: 'pointer' }}>
          <Link
            to={`${match.url}/${item.id}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Card
              body
              style={{
                backgroundColor: 'white',
                marginBottom: '10px',
                borderRadius: '4px',
                height: '130px'
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
                src={item.img}
              ></img>
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
          </Link>
        </div>
      );
    });
    return <>{renderDishItems}</>;
  };

  return (
    <div style={{ height: '80vh', overflow: 'auto', marginLeft: '2%' }}>
      {props.allDishes.IsLoading ? (
        <Spinner
          style={{ width: '5rem', height: '5rem' }}
          type='grow'
          color='danger'
        />
      ) : (
        <RenderDishesItems />
      )}
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
  connect(mapStateToProps, mapDispatchToProps)(DishItem)
);
