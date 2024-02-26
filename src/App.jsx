import { Provider } from 'react-redux';

import Navbar from "./features/navbar/navbar";
import Registration from './features/registration/registration';
import store from './redux/combined store';

function App() {
  return (
    <Provider store={store}>
        <Navbar/>
      <Registration />
    </Provider>
  );
}

export default App;
