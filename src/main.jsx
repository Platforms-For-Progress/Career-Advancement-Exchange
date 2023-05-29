import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/* Chakra Provider */
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  "black": "#0c1015",
  "gray": {
    "50": "#f9fafa",
    "100": "#f1f1f2",
    "200": "#e6e7e9",
    "300": "#d2d4d7",
    "400": "#a9adb2",
    "500": "#797f88",
    "600": "#4d5560",
    "700": "#2e3744",
    "800": "#19202b",
    "900": "#141a23"
  },
  "orange": {
    "50": "#fdfaf6",
    "100": "#f7ecda",
    "200": "#edd6b0",
    "300": "#e0b572",
    "400": "#ce9944",
    "500": "#b1833b",
    "600": "#956f32",
    "700": "#775827",
    "800": "#5d451f",
    "900": "#4d3919"
  },
  "green": {
    "50": "#f5fdfa",
    "100": "#cbf3e4",
    "200": "#90e6c5",
    "300": "#47d59f",
    "400": "#3ebb8b",
    "500": "#35a077",
    "600": "#2c8563",
    "700": "#22674d",
    "800": "#1c543f",
    "900": "#174534"
  },
  "teal": {
    "50": "#f1fcfb",
    "100": "#c1f1ef",
    "200": "#88e4e0",
    "300": "#45d1ca",
    "400": "#3bb2ac",
    "500": "#329792",
    "600": "#297b77",
    "700": "#205f5c",
    "800": "#1a4f4d",
    "900": "#16413f"
  },
  "cyan": {
    "50": "#f3fbfc",
    "100": "#cdeff4",
    "200": "#b6e8ef",
    "300": "#9ce0e9",
    "400": "#47c5d6",
    "500": "#41b5c4",
    "600": "#3ba3b1",
    "700": "#308792",
    "800": "#286e78",
    "900": "#1f565d"
  },
  "blue": {
    "50": "#f2f6fc",
    "100": "#d1dff5",
    "200": "#afc7ed",
    "300": "#8aade5",
    "400": "#6794dd",
    "500": "#477ed6",
    "600": "#3b69b3",
    "700": "#2d5189",
    "800": "#254270",
    "900": "#1e365b"
  },
  "purple": {
    "50": "#f9f6fd",
    "100": "#e7daf7",
    "200": "#d5bef0",
    "300": "#ba95e7",
    "400": "#a778e1",
    "500": "#8e52d8",
    "600": "#783fbf",
    "700": "#63349c",
    "800": "#512b80",
    "900": "#3c1f5f"
  },
  "pink": {
    "50": "#fdf6f8",
    "100": "#f7d9e5",
    "200": "#f0bbcf",
    "300": "#e690b2",
    "400": "#df719b",
    "500": "#d3467c",
    "600": "#b53c6a",
    "700": "#933157",
    "800": "#732644",
    "900": "#541c32"
  },
  "brand": {
    "50": "#fdf6f5",
    "100": "#f6dad6",
    "200": "#eeb9b2",
    "300": "#e49084",
    "400": "#dd7768",
    "500": "#cf5645",
    "600": "#af493a",
    "700": "#8d3b2f",
    "800": "#773228",
    "900": "#56241d"
  },
  "background": {
    "400":"#FFFDFD"
  }
}

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
