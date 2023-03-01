import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import 'modern-normalize/modern-normalize.css';
import { theme } from './styles/theme';
import { App } from 'components/App';
import './index.css';
import { store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <BrowserRouter basename='goit-react-hw-08-phonebook'>
        <App />
        </BrowserRouter>
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
