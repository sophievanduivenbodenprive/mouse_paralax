import React from 'react';
import ReactDOM from 'react-dom';
import Dummy from './Dummy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dummy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
