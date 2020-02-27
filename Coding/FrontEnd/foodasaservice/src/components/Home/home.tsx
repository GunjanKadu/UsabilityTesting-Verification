import React from 'react';
import { connect } from 'react-redux';

const Home = props => {
  return (
    <div>
      <h3>{props.dishes[0].name}</h3>
      <h3>{props.dishes[0].price}</h3>
      <h3>{props.dishes[0].chef}</h3>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    dishes: state.dish
  };
};

export default connect(mapStateToProps)(Home);
