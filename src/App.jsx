import "./App.css";
import Headers from "./component/Headers";
import Sidebar from "./component/Sidebar";
import { Provider } from "react-redux";
import { store } from "./store/app";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Headers />
      <Sidebar />
      <Home />
    </Provider>
  );
}

export default App;
