import React from 'react';
import { connect } from 'react-redux';

const Home = props => {
  return <div></div>;
};

const mapStateToProps = (state: any) => {
  return {
    dishes: state.dish
  };
};

export default connect(mapStateToProps)(Home);
