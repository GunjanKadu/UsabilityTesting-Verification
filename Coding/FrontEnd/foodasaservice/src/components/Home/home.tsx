import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

interface HomeState {
  message: string;
}
export default class Home extends Component<{}, HomeState> {
  constructor(props) {
    super(props);
    this.state = {
      message: 'HOME PAGE'
    };
  }
  render() {
    return (
      <div>
        <Container>
          <h3>{this.state.message}</h3>
        </Container>
      </div>
    );
  }
}
