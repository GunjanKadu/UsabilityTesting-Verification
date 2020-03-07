import React, { useEffect } from 'react';
import { Card, CardText, CardTitle, Spinner, Badge } from 'reactstrap';
import { fetchTopCooks } from 'Redux/ActionCreators/Chefs';
import { connect } from 'react-redux';
import like from 'assests/images/like.png';

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
          <Card
            body
            style={{
              backgroundColor: 'white',
              marginBottom: '30px',
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
                <h6 style={{ color: '#dc3545' }}> {item.name}</h6>
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
    return <>{renderCookArray}</>;
  };
  return (
    <div>
      {props.chefs.IsLoading ? (
        <Spinner
          style={{ width: '5rem', height: '5rem' }}
          type='grow'
          color='danger'
        />
      ) : (
        <div>
          <h3 style={{ position: 'relative', left: '8%', top: '-5%' }}>
            <Badge color='danger'>Featured Cooks</Badge>
          </h3>
          <RenderCooks />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dishes: state.topDish,
    chefs: state.topChef
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
