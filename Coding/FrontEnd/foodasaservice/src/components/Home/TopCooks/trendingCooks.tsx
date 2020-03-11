import React, { useEffect } from 'react';
import { Spinner, Badge, Button } from 'reactstrap';
import { fetchTopDishes } from 'Redux/ActionCreators/Dishes';
import { fetchCuisines } from 'Redux/ActionCreators/Cuisines';
import { connect } from 'react-redux';

const TrendingCooks = props => {
  //On Mounting Fetch States
  useEffect(() => {
    props.fetchTopDishes();
    props.fetchCuisines();
  }, []);

  //Global Dishes
  let dishes = props.dishes.Dishes;
  dishes = dishes.slice(1, 2);

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
        let list_ = cuisineOfEachDish.map(name => {
          return name.name;
        });
        return list_.join(', ');
      };

      return (
        <div key={item.id} className='my-1' style={{ margin: '2%' }}>
          <div className='card border-danger '>
            {/*<div className="card-header bg-transparent border-danger">Header</div>*/}
            <div className='card-body text-dark'>
              <div className='row'>
                <div className='col'>
                  <img
                    src={item.img}
                    alt=''
                    className='col rounded img-thumbnail'
                  />
                </div>
                <div className='col '>
                  <div className='row'>
                    <blockquote className='blockquote mb-1'>
                      <h5 className='card-title text-danger my-1'>
                        {item.dish_name}
                      </h5>
                      <footer className='blockquote-footer'>
                        By <cite title='Source Title'>{item.chef_name}</cite>
                      </footer>
                      <div className='my-1'>
                        <i
                          className='material-icons'
                          style={{ color: 'orange' }}
                        >
                          star
                        </i>
                        <i
                          className='material-icons'
                          style={{ color: 'orange' }}
                        >
                          star
                        </i>
                        <i
                          className='material-icons'
                          style={{ color: 'orange' }}
                        >
                          star
                        </i>
                        <i
                          className='material-icons'
                          style={{ color: 'orange' }}
                        >
                          star
                        </i>
                        <i
                          className='material-icons'
                          style={{ color: 'orange' }}
                        >
                          star_border
                        </i>
                        {item.likes}
                      </div>
                    </blockquote>
                  </div>
                  <div className='row'>
                    <p>
                      <b>Cuisine: </b>
                      <CuisinesNames />.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row mx-2'>
                <p className='my-1'>
                  {/*<b>Cuisine: </b>Italian, Indian, Arabiac. <br/>*/}
                  <b>Description: </b>
                  {item.description}...
                  <u>
                    <a href='#'>view more</a>
                  </u>
                </p>
                {/*<p className="card-text">Some quick example text to build on the card title and make up*/}
                {/*    the bulk of the card's content.</p>*/}
              </div>
            </div>
            <div className='card-footer bg-transparent border-danger'>
              <div className='row'>
                <div className='col'>
                  <Button color='success' size='sm'>
                    Vegetarian
                  </Button>
                </div>
                <div className='col'>
                  <Button color='danger' size='sm'>
                    Spicy: {item.spicy}/5
                  </Button>
                </div>
                <div className='col'>
                  <Button color='warning' size='sm'>
                    € {item.price}
                  </Button>
                </div>
                <div className='col'>
                  <Button color='primary' size='sm'>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <>{renderDishArray}</>;
  };
  return (
    <div>
      {props.dishes.IsLoading ? (
        <Spinner
          style={{
            width: '3.5rem',
            height: '3.5rem',
            position: 'relative',
            left: '50%',
            top: '18vh'
          }}
          color='danger'
        />
      ) : (
        <div>
          <RenderDishes />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    dishes: state.topDish,
    chefs: state.topChef,
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

export default connect(mapStateToProps, mapDispatchToProps)(TrendingCooks);
