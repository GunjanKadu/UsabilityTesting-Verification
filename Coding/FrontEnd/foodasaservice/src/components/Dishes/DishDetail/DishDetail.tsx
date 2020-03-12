import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Card,
  CardText,
  CardTitle,
  Badge,
  Button,
  Spinner,
  CardBody,
  CardSubtitle,
  CardImg,
  Row,
  Col
} from 'reactstrap';
import { fetchAllDishes } from 'Redux/ActionCreators/Dishes';
import { DetailsToCart, EnableCartAlert } from 'Redux/ActionCreators/Cart';
import like from 'assets/images/like.png';
import { useAlert } from 'react-alert';

const DishDetail = props => {
  useEffect(() => {}, [props.cart.ContentAdded]);
  const allDishes = props.allDishes.DishList;
  const { match } = props;
  const userId = sessionStorage.getItem('userId');
  const alert = useAlert();
  const AddedToCartSuccess = name => {
    alert.show(
      <div style={{ fontSize: '14px' }}>{name} Has Been Added To Cart.</div>,
      {
        timeout: 3000,
        type: 'success',
        transition: 'fade'
      }
    );
  };

  let dishDetail;

  if (allDishes.length > 0) {
    if (match.params.id) {
      dishDetail = allDishes.find(item => {
        return item.id == match.params.id;
      });
    } else {
      dishDetail = allDishes.find(item => {
        return item.id == 8;
      });
    }
  }

  const handleAddToCart = (userId, dishId, dishName, price) => {
    props.detailsToCart({ userId, dishId, dishName, price });
  };
  return (
    <div
      style={{
        position: 'relative',
        top: '6.5%',
        width: '130%',
        height: '100%'
      }}
    >
      {dishDetail ? (
        <Card
          body
          style={{
            backgroundColor: 'white',
            marginBottom: '20px',
            borderRadius: '4px',
            height: '100%',
            border: '4px solid #ebebeb'
          }}
        >
          <img
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              width: '100%',
              height: '30%',
              objectFit: 'cover'
            }}
            src={dishDetail.img}
            alt={dishDetail.dish_name}
          ></img>

          <div>
            {' '}
            <CardTitle style={{ fontWeight: 'bold' }}>
              <h6
                style={{
                  color: '#dc3545',
                  position: 'absolute',
                  top: '33%',
                  left: '45%'
                }}
              >
                {' '}
                {dishDetail.dish_name}
              </h6>

              <div style={{ position: 'absolute', top: '36%', left: '45%' }}>
                <img
                  src={like}
                  style={{ height: '50px', width: '50px' }}
                  alt=''
                />
                <Badge
                  href='#'
                  style={{ backgroundColor: '#e5e5e5', color: 'black' }}
                >
                  {dishDetail.likes}
                </Badge>
              </div>
            </CardTitle>
            {userId ? (
              <Button
                onClick={() => {
                  return (
                    handleAddToCart(
                      userId,
                      dishDetail.id,
                      dishDetail.dish_name,
                      dishDetail.price
                    ),
                    AddedToCartSuccess(dishDetail.dish_name),
                    props.enableCartAlert()
                  );
                }}
                color='danger'
                style={{ position: 'absolute', left: '86%', top: '34%' }}
              >
                Add To Cart
              </Button>
            ) : (
              <Button
                disabled
                color='danger'
                style={{ position: 'absolute', left: '86%', top: '34%' }}
              >
                Add To Cart
              </Button>
            )}
            <CardText
              style={{ position: 'absolute', top: '46%', paddingRight: '10px' }}
            >
              <Card
                style={{
                  border: '1px solid #dc3545',
                  padding: '5px'
                }}
              >
                <CardText
                  body
                  style={{
                    backgroundColor: 'white',
                    padding: '5px',
                    fontWeight: '500',
                    marginBottom: '20px'
                  }}
                >
                  {dishDetail.description}
                </CardText>
              </Card>
            </CardText>
            <div style={{ position: 'relative', top: '50vh' }}>
              <Card
                style={{
                  border: '1px solid #dc3545',
                  width: '50%',
                  height: '21vh',
                  overflow: 'hidden'
                }}
              >
                <Row>
                  <Col sm={4}>
                    <CardImg
                      top
                      style={{
                        width: '90px',
                        height: '90px',
                        position: 'relative',
                        top: '14%',
                        left: '22%'
                      }}
                      src='https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png'
                      alt='Card image cap'
                    />
                  </Col>
                  <Col>
                    <CardBody>
                      <CardTitle style={{ fontWeight: 'bold' }}>
                        Made By
                      </CardTitle>
                      <CardSubtitle>Chef: {dishDetail.chef_name}</CardSubtitle>
                      <CardText style={{ fontSize: '9' }}>
                        I am a person who is positive about every aspect of
                        life. There are many things I like to do, to see, and to
                        experience. I like to cook & I like to write.
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </div>
          </div>
        </Card>
      ) : (
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
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    allDishes: state.allDishes,
    account: state.account,
    cuisines: state.cuisine,
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllDishes: () => {
      dispatch(fetchAllDishes());
    },
    detailsToCart: value => {
      dispatch(DetailsToCart(value));
    },
    enableCartAlert: () => {
      dispatch(EnableCartAlert());
    }
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DishDetail)
);
