import React, { useEffect } from 'react';
import { Card, CardTitle, Badge, Spinner, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { Link, NavLink, withRouter } from 'react-router-dom';
import { fetchAllDishes } from 'Redux/ActionCreators/Dishes';
import like from 'assets/images/like.png';

const DishItem = props => {
  const { match, inputValue, searchParams } = props;
  let toBeSearched;

  useEffect(() => {
    props.fetchAllDishes();
  }, []);

  if (searchParams !== '' && inputValue == '') {
    toBeSearched = searchParams;
  } else {
    toBeSearched = inputValue;
  }
  const listOfAllDishes = props.allDishes.DishList;

  //Global Cuisines Array
  const cuisines = props.cuisines.Cuisine;

  const RenderDishesItems = () => {
    const renderDishItems = listOfAllDishes.map(item => {
      if (!toBeSearched) {
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
            return <span key={name.id}>{name.name} &nbsp;</span>;
          });
        };

        return (
          <div
            key={item.id}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            <NavLink
              activeStyle={{
                color: '#dc3545',
                fontWeight: 'bold',
                display: 'block',
                border: '2px solid rgb(224, 146, 153)'
              }}
              to={`${match.url}/${item.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Card
                body
                style={{
                  backgroundColor: 'white',
                  marginBottom: '4px',
                  borderRadius: '4px',
                  height: '100px',
                  border: '4px solid #ebebeb'
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
                  <CardTitle>
                    <Row>
                      <h6
                        style={{
                          color: 'black',
                          marginTop: '-4%',
                          fontWeight: 'bold'
                        }}
                      >
                        {' '}
                        {item.dish_name}
                      </h6>
                    </Row>
                    <Row style={{ marginTop: '-2%' }}>
                      <CuisinesNames />
                    </Row>
                    <div
                      style={{
                        display: 'block',
                        position: 'absolute',
                        left: ' 88%',
                        top: '-40% '
                      }}
                    >
                      <img
                        src={like}
                        style={{ height: '15px', width: '15px' }}
                        alt=''
                      />{' '}
                      <Badge
                        href='#'
                        style={{ backgroundColor: '#e5e5e5', color: 'black' }}
                      >
                        {item.likes}
                      </Badge>
                    </div>

                    <Row>
                      <Badge
                        color='info'
                        style={{
                          position: 'absolute',
                          top: '111%',
                          right: '83%'
                        }}
                      >
                        Price: € {item.price}
                      </Badge>
                      <Badge
                        color='danger'
                        style={{
                          position: 'absolute',
                          top: '111%',
                          right: '54%'
                        }}
                      >
                        Spice : {item.spicy}/5
                      </Badge>

                      <Badge
                        color='primary'
                        style={{
                          position: 'absolute',
                          top: '111%',
                          right: '21%'
                        }}
                      >
                        Chef : {item.chef_name}
                      </Badge>
                      {item.available ? (
                        <Badge
                          color='success'
                          style={{
                            position: 'absolute',
                            top: '111%',
                            right: '-5%'
                          }}
                        >
                          Available
                        </Badge>
                      ) : (
                        <Badge
                          color='success'
                          style={{
                            position: 'absolute',
                            top: '111%',
                            right: '-5%'
                          }}
                        >
                          Not-Available
                        </Badge>
                      )}
                    </Row>
                  </CardTitle>
                </div>
              </Card>
            </NavLink>
          </div>
        );
      } else if (
        toBeSearched !== '' &&
        item.dish_name.toLowerCase().indexOf(toBeSearched.toLowerCase()) !== -1
      ) {
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
            return <span key={name.id}>{name.name} &nbsp;</span>;
          });
        };

        return (
          <div
            key={item.id}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            <NavLink
              activeStyle={{
                color: '#dc3545',
                fontWeight: 'bold',
                display: 'block',
                border: '2px solid rgb(224, 146, 153)'
              }}
              to={`${match.url}/${item.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Card
                body
                style={{
                  backgroundColor: 'white',
                  marginBottom: '4px',
                  borderRadius: '4px',
                  height: '100px',
                  border: '4px solid #ebebeb'
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
                  <CardTitle>
                    <Row>
                      <h6
                        style={{
                          color: 'black',
                          marginTop: '-4%',
                          fontWeight: 'bold'
                        }}
                      >
                        {' '}
                        {item.dish_name}
                      </h6>
                    </Row>
                    <Row style={{ marginTop: '-2%' }}>
                      <CuisinesNames />
                    </Row>
                    <div
                      style={{
                        display: 'block',
                        position: 'absolute',
                        left: ' 88%',
                        top: '-40% '
                      }}
                    >
                      <img
                        src={like}
                        style={{ height: '15px', width: '15px' }}
                        alt=''
                      />{' '}
                      <Badge
                        href='#'
                        style={{ backgroundColor: '#e5e5e5', color: 'black' }}
                      >
                        {item.likes}
                      </Badge>
                    </div>

                    <Row>
                      <Badge
                        color='info'
                        style={{
                          position: 'absolute',
                          top: '111%',
                          right: '83%'
                        }}
                      >
                        Price: € {item.price}
                      </Badge>
                      <Badge
                        color='danger'
                        style={{
                          position: 'absolute',
                          top: '111%',
                          right: '54%'
                        }}
                      >
                        Spice : {item.spicy}/5
                      </Badge>

                      <Badge
                        color='primary'
                        style={{
                          position: 'absolute',
                          top: '111%',
                          right: '21%'
                        }}
                      >
                        Chef : {item.chef_name}
                      </Badge>
                      {item.available ? (
                        <Badge
                          color='success'
                          style={{
                            position: 'absolute',
                            top: '111%',
                            right: '-5%'
                          }}
                        >
                          Available
                        </Badge>
                      ) : (
                        <Badge
                          color='success'
                          style={{
                            position: 'absolute',
                            top: '111%',
                            right: '-5%'
                          }}
                        >
                          Not-Available
                        </Badge>
                      )}
                    </Row>
                  </CardTitle>
                </div>
              </Card>
            </NavLink>
          </div>
        );
      }
    });

    return <>{renderDishItems}</>;
  };

  return (
    <div style={{ height: '80vh', overflow: 'auto', marginLeft: '2%' }}>
      {props.allDishes.IsLoading ? (
        <Spinner
          style={{
            width: '3rem',
            height: '3rem',
            position: 'absolute',
            left: '41%',
            top: '43%'
          }}
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
