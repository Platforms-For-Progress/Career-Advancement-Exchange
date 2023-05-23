import React from 'react';
import { createBoard } from '@wixc3/react-board';
import App from '../../../App.jsx';

export default createBoard({
  name: 'App',
  Board: () => <App />
});
