import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './features/navbar/navbar';
import store from './redux/combined store';
import Routes from './router';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
