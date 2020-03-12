import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Col, Row, Button, Badge } from 'reactstrap';

export const AddDish = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div
      style={{
        position: 'relative',
        top: '20%',
        left: '20vw'
      }}
    >
      <Container>
        <h2
          style={{
            position: 'relative',
            left: '8%',
            top: '-5%',
            marginBottom: '60px'
          }}
        >
          <Badge color='danger'>Add You Own Dishes</Badge>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row style={{ margin: '20px' }}>
            <Col sm={2} style={{ fontWeight: 'bold' }}>
              DishName:
            </Col>
            <Col>
              <input name='firstname' ref={register} />{' '}
              {/* register an input */}
            </Col>
          </Row>
          <Row style={{ margin: '20px' }}>
            <Col style={{ fontWeight: 'bold' }} sm={2}>
              Cuisine:
            </Col>
            <Col>
              <input name='firstname' ref={register} />{' '}
              {/* register an input */}
            </Col>
          </Row>
          <Row style={{ margin: '20px' }}>
            <Col style={{ fontWeight: 'bold' }} sm={2}>
              Price:
            </Col>
            <Col>
              <input name='firstname' ref={register} />{' '}
              {/* register an input */}
            </Col>
          </Row>
          <Row style={{ margin: '20px' }}>
            <Col style={{ fontWeight: 'bold' }} sm={2}>
              Spice:
            </Col>
            <Col>
              <input name='firstname' ref={register} />{' '}
              {/* register an input */}
            </Col>
          </Row>
          <Row style={{ margin: '20px' }}>
            <Col style={{ fontWeight: 'bold' }} sm={2}>
              Description:
            </Col>
            <Col>
              <input name='firstname' ref={register} />{' '}
              {/* register an input */}
            </Col>
          </Row>{' '}
          <Row style={{ margin: '20px' }}>
            <Col style={{ fontWeight: 'bold' }} sm={2}>
              Img:
            </Col>
            <Col>
              <input name='firstname' ref={register} />{' '}
              {/* register an input */}
            </Col>
          </Row>
          <Row style={{ margin: '39px', position: 'relative', left: '11%' }}>
            <Button color='primary'> Submit</Button>
          </Row>
        </form>
      </Container>
    </div>
  );
};
