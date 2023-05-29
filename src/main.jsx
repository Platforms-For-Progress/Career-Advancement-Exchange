import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/* Chakra Provider */
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#fff9e6',
    100: '#ffe8b3',
    200: '#ffd380',
    300: '#ffc04d',
    400: '#ffae1a',
    500: '#FDCC7D',
    600: '#cfa85a',
    700: '#a38238',
    800: '#755f23',
    900: '#3b2c0f'
  },
  brand_pink: {
    50: '#FCE5F9',
    100: '#FAD9F5',
    200: '#F7C4E9',
    300: '#F3AFDD',
    400: '#F09BCF',
    500: '#EDA6C8',
    600: '#E88CAE',
    700: '#E37394',
    800: '#DE597A',
    900: '#DA4060'
  }
};

const theme = extendTheme({ colors });

/* User Provider */
import { UserProvider } from './utils/User';
import { ChatContextProvider } from './Components/Chat/ChatContext.jsx';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
