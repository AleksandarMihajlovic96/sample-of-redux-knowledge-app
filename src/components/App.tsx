import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { store } from "../state";
import Home from "./Home";
import NavBar from "./Navbar";
import Profile from "./Profile";
import RepositoriesList from "./RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="searchPackage" element={<RepositoriesList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
