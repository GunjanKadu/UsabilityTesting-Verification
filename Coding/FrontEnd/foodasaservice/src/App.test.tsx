import React from 'react';
import { render } from '@testing-library/react';
import { App } from 'App';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConfigureStore } from 'Redux/Store/configureStore';

import AlertTemplate from 'react-alert-template-basic';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';

const store = ConfigureStore();
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_LEFT,
  timeout: 3000,
  // you can also just use 'scale'
  transition: transitions.SCALE
};

describe('<App>', () => {
  it('Is the How It Works Section There', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </Router>
      </Provider>
    );
    expect(getByText('How We Work?')).toBeInTheDocument();
  });
});

describe('<App>', () => {
  it('Is The Login Button There?', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </Router>
      </Provider>
    );
    expect(getByText('Login')).toBeInTheDocument();
  });
});

describe('<App>', () => {
  it('Is The Search Button There?', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </Router>
      </Provider>
    );
    expect(getByText('Search')).toBeInTheDocument();
  });
});
