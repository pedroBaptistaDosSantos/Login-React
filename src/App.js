
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
//import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Routes from './routes'
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3'
    }
  }
})

function App() {
  return (
    <Provider store = {store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
    
    
  );
}

export default App;
