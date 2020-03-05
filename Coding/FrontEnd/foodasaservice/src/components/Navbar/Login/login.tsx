import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { postLoginData } from 'Redux/ActionCreators/Login';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const Login = props => {
  const { buttonLabel, title } = props;

  //Modal State
  const [modal, setModal] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  //Nested Modal State
  const [nestedModal, setNestedModal] = useState(false);

  const [signupEmail, setsignupEmail] = useState('');
  const [signupPassword, setsignupPassword] = useState('');
  const [signupConfirmPassword, setsignupConfirmPassword] = useState('');

  const [signUpFullName, setSignUpFullName] = useState('');

  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (props.account.LoginDetails.token) {
      console.log('Validated');
    } else {
      console.log('Not Validated');
    }
  }, [props.account.LoginDetails]);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.postLoginData(loginEmail, loginPassword);
  };

  return (
    <div>
      <Button color='danger' onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{ textAlign: 'center' }}>
          {title}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for='exampleEmail' sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type='email'
                  name='email'
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  placeholder='Enter Your Email'
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='examplePassword' sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input
                  type='password'
                  name='password'
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  placeholder='Enter Your Password'
                />
              </Col>
            </FormGroup>
            <br />
            <Button
              color='success'
              onClick={toggle}
              type='submit'
              style={{ position: 'relative', left: '40%', top: '1vh ' }}
            >
              Login
            </Button>
          </Form>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Sign Up</ModalHeader>
            <ModalBody>
              {' '}
              <Form>
                <FormGroup row>
                  <Label for='exampleEmail' sm={2}>
                    Full Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type='Name'
                      name='Name'
                      id='Name'
                      placeholder='Enter Your Full Name'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for='exampleEmail' sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Enter Your Email'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for='examplePassword' sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type='password'
                      name='password'
                      id='Password'
                      placeholder='Enter Your Password'
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for='examplePassword' sm={2}>
                    Confirm Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type='passwordconfirm'
                      name='passwordconfirm'
                      id='passwordconfirm'
                      placeholder='Enter Your Password Again'
                    />
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={toggleNested}>
                SignUp{' '}
              </Button>{' '}
              <Button color='secondary' onClick={toggleAll}>
                Cancel{' '}
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggleNested}>
            Sign Up
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    account: state.account
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postLoginData: (email, password) => {
      dispatch(postLoginData(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
