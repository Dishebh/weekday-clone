import "./App.css";
import Filters from "./components/filters/Filters";
import Profiles from "./components/profiles/Profiles";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Filters />
        <Profiles />
      </div>
    </Provider>
  );
}

export default App;
