import React, { useEffect } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner
} from 'reactstrap';
import { fetchTopCooks } from 'Redux/ActionCreators/Chefs';
import { connect } from 'react-redux';
import './trendingCooks.css';

const TrendingCooks = props => {
  useEffect(() => {
    props.fetchTopCooks();
    console.log(props.dishes.IsLoading);
  }, []);
  const chefs = props.chefs.Chefs;

  const RenderCooks = () => {
    const renderCookArray = chefs.map(item => {
      return (
        <div key={item.id}>
          <Card className='card'>
            <CardBody>
              <CardTitle>{item.chef_name}</CardTitle>
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
    return <>{renderCookArray}</>;
  };
  return (
    <div>
      {props.chefs.IsLoading ? (
        <Spinner
          style={{ width: '5rem', height: '5rem' }}
          type='grow'
          color='info'
        />
      ) : (
        <div>
          <h3>Featured Chefs</h3>
          <RenderCooks />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dishes: state.dish,
    chefs: state.chef
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchTopCooks: () => {
      dispatch(fetchTopCooks());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingCooks);
