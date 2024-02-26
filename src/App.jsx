import { Provider } from 'react-redux';

import Registration from './features/registration/registration';
import store from './redux/combined store';

function App() {
  return (
    <Provider store={store}>
      <Registration />
    </Provider>
  );
}

export default App;
