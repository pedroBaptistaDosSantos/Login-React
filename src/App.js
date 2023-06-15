
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import SideBar from './components/sideBar';
import Usuarios from './components/usuarios';
const theme = createTheme({
  palette: {
    primary: {
      main: '#f50057'
    }
  }
})

function App() {
  return (
    <Provider store = {store}>
      <ThemeProvider theme={theme}>
        <div className="App">
        <SideBar/>
        <Usuarios/>
        </div>
      </ThemeProvider>
    </Provider>
    
    
  );
}

export default App;
