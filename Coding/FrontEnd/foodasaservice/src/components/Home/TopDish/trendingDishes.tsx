import React, { useEffect } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import { fetchTopDishes } from 'Redux/ActionCreators/Dishes';
import { connect } from 'react-redux';
import './trendingDishes.css';

const TrendingDishes = props => {
  useEffect(() => {
    props.fetchTopDishes();
    console.log(props.dishes);
  }, []);
  return (
    <Card>
      <CardImg
        top
        width='100%'
        src='/assets/318x180.svg'
        alt='Card image cap'
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};
const mapStateToProps = (state: any) => {
  return {
    dishes: state.dish
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
