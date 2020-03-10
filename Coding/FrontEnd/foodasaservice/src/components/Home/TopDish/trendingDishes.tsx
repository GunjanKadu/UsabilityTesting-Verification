import React, { useEffect } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Spinner,
  Badge,
  CardImg,
  Button,
  ButtonGroup
} from "reactstrap";
import { fetchTopDishes } from "Redux/ActionCreators/Dishes";
import { fetchCuisines } from "Redux/ActionCreators/Cuisines";
import { connect } from "react-redux";
import "./trendingDishes.css";
import like from "assests/images/like.png";

const TrendingDishes = props => {
  //On Mounting Fetch States
  useEffect(() => {
    props.fetchTopDishes();
    props.fetchCuisines();
  }, []);

  //Global Dishes
  let dishes = props.dishes.Dishes;
  dishes = dishes.slice(0,2)


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
        return list_.join(", ");
      };

      return (
        <div key={item.id} className="my-1">
          <div className="card border-danger ">
            {/*<div className="card-header bg-transparent border-danger">Header</div>*/}
            <div className="card-body text-dark">
              <div className="row">
                <div className="col">
                  <img
                    src="https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg"
                    alt=""
                    className="col rounded img-thumbnail"
                  />
                </div>
                <div className="col ">
                  <div className="row">
                    <blockquote className="blockquote mb-1">
                      <h5 className="card-title text-danger my-1">
                        Idly Sambhar & Vada
                      </h5>
                      <footer className="blockquote-footer">
                        By <cite title="Source Title">Chef Anurag</cite>
                      </footer>
                      <div className="my-1">
                        <i
                          className="material-icons"
                          style={{ color: "orange" }}
                        >
                          star
                        </i>
                        <i
                          className="material-icons"
                          style={{ color: "orange" }}
                        >
                          star
                        </i>
                        <i
                          className="material-icons"
                          style={{ color: "orange" }}
                        >
                          star
                        </i>
                        <i
                          className="material-icons"
                          style={{ color: "orange" }}
                        >
                          star
                        </i>
                        <i
                          className="material-icons"
                          style={{ color: "orange" }}
                        >
                          star_border
                        </i>
                        (53)
                      </div>
                    </blockquote>
                  </div>
                  <div className="row">
                    <p>
                      <b>Cuisine: </b>
                      <CuisinesNames />.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mx-2">
                <p className="my-1">
                  {/*<b>Cuisine: </b>Italian, Indian, Arabiac. <br/>*/}
                  <b>Description: </b>Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor. Duis mollis, est non commodo...
                  <u>
                    <a href="#">view more</a>
                  </u>
                </p>
                {/*<p className="card-text">Some quick example text to build on the card title and make up*/}
                {/*    the bulk of the card's content.</p>*/}
              </div>
            </div>
            <div className="card-footer bg-transparent border-danger">
              <div className="row">
                <div className="col">
                  <Button color="success" size="sm">
                    Vegetarian
                  </Button>
                </div>
                <div className="col">
                  <Button color="danger" size="sm">
                    Spicy: 3/5
                  </Button>
                </div>
                <div className="col">
                  <Button color="warning" size="sm">
                    ₹ 450
                  </Button>
                </div>
                <div className="col">
                  <Button color="primary" size="sm">
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
          style={{ width: "5rem", height: "5rem" }}
          type="grow"
          color="danger"
        />
      ) : (
        <div>
          <h3 style={{ position: "relative", left: "8%", top: "-5%" }}>
            <Badge color="danger">Featured Dishes</Badge>
          </h3>

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

export default connect(mapStateToProps, mapDispatchToProps)(TrendingDishes);
