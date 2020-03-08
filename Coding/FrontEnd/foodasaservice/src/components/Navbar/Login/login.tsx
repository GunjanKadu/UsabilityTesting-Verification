import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postLoginData } from 'Redux/ActionCreators/Login';
import { postSignupData } from 'Redux/ActionCreators/SignUp';

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
  Input,
  Spinner
} from 'reactstrap';

const Login = props => {
  const { buttonLabel, title } = props;

  //Modal State
  const [modal, setModal] = useState(false);

  //Login State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  //Nested Modal State
  const [nestedModal, setNestedModal] = useState(false);

  //Sign Up state
  const [signupEmail, setsignupEmail] = useState('');
  const [signupPassword, setsignupPassword] = useState('');
  const [signupConfirmPassword, setsignupConfirmPassword] = useState('');
  const [signUpFullName, setSignUpFullName] = useState('');

  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };

  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  const handleSignInSubmit = event => {
    event.preventDefault();
    props.postSignupData(signupEmail, signupPassword, signUpFullName);
    setModal(false);
    setNestedModal(false);
  };

  const handleLoginSubmit = event => {
    event.preventDefault();
    props.postLoginData(loginEmail, loginPassword);
    setModal(false);
  };

  //Loading Effect
  const isAccountLoading = props.account.Loading;
  let loader;
  if (isAccountLoading) {
    loader = (
      <div>
        <Spinner size='sm' color='light' />
      </div>
    );
  } else {
    loader = buttonLabel;
  }
  //

  return (
    <div>
      <Button color='danger' onClick={toggle}>
        {loader}
      </Button>
      <Modal
        style={{ position: 'relative', top: '17%', left: '-2%', width: '80%' }}
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>
          <span style={{ position: 'relative', left: '320%' }}>{title}</span>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLoginSubmit}>
            <Label
              style={{ padding: '0', marginBottom: '5px', fontWeight: 'bold' }}
              for='email'
              sm={4}
            >
              Email:
            </Label>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type='email'
                  name='email'
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  placeholder='Enter Your Email'
                />
              </Col>
            </FormGroup>
            <Label
              style={{ padding: '0', marginBottom: '5px', fontWeight: 'bold' }}
              for='email'
              sm={4}
            >
              Password:
            </Label>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type='password'
                  name='password'
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  placeholder='Enter Your Password'
                />
              </Col>
            </FormGroup>
            <Button
              disabled={loginEmail && loginPassword ? false : true}
              color='danger'
              onClick={toggle}
              type='submit'
              style={{ position: 'relative', width: '100%' }}
            >
              Login
            </Button>
            <p
              style={{
                textAlign: 'center',
                color: '#3464a8',
                marginTop: '10px'
              }}
            >
              Forgot Password?
            </p>
          </Form>
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

      {/* SignUp Modal */}
      <Modal
        style={{ position: 'relative', top: '17%', left: '-2%' }}
        isOpen={nestedModal}
        toggle={toggleNested}
        onClosed={closeAll ? toggle : undefined}
      >
        <ModalHeader>
          <span style={{ position: 'relative', left: '225%' }}>Sign Up</span>
        </ModalHeader>
        <ModalBody>
          {' '}
          <Form onSubmit={handleSignInSubmit}>
            <FormGroup row>
              <Label for='exampleEmail' sm={2}>
                Full Name
              </Label>
              <Col sm={10}>
                <Input
                  type='Name'
                  name='Name'
                  value={signUpFullName}
                  onChange={event => setSignUpFullName(event.target.value)}
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
                  value={signupEmail}
                  onChange={event => setsignupEmail(event.target.value)}
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
                  value={signupPassword}
                  onChange={event => setsignupPassword(event.target.value)}
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
                  type='password'
                  name='passwordconfirm'
                  value={signupConfirmPassword}
                  onChange={event =>
                    setsignupConfirmPassword(event.target.value)
                  }
                  placeholder='Enter Your Password Again'
                />
              </Col>
            </FormGroup>
            <ModalFooter>
              <Button
                disabled={
                  signUpFullName &&
                  signupEmail &&
                  signupPassword &&
                  signupConfirmPassword
                    ? false
                    : true
                }
                color='danger'
                onClick={toggleNested}
                type='submit'
              >
                SignUp{' '}
              </Button>{' '}
              <Button color='secondary' onClick={toggleAll}>
                Cancel{' '}
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
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
    },
    postSignupData: (email, password, fullName) => {
      dispatch(postSignupData(email, password, fullName));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
