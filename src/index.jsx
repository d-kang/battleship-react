import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component index={0} />
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextComponent = require('./components/App').default;
    render(NextComponent);
  });
}
