import React from "react";
import "./App.css";
import Headers from "./component/Headers";
import MainContainer from "./component/MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store/app";

function App() {
  return (
    <Provider store={store}>
      <div className="overflow-hidden">
        <Headers />
        <MainContainer />
      </div>
    </Provider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default App;
