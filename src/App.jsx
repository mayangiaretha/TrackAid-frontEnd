
import { Provider } from "react-redux";
import store from "./redux/combined store";
import Registration from "./features/registration/registration";
import Login from "./features/login/login";

  function App() {
    return (

        <Provider store={store}>
          <Registration />

  </Provider>

    );
  }

  export default App;




