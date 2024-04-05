import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import './App.css';
import Navbar from './features/navbar/navbar';
import store from './redux/combinedstore';
import Routes from './router';
import { getTokenData } from './utils/getToken';
import { theme } from './style/theme';

function App() {
  getTokenData();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
