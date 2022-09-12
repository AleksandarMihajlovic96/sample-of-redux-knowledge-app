import { Grid } from "@mui/material";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { store } from "../state";
import AgePredict from "./AgePredict";
import Home from "./Home";
import NavBar from "./Navbar";
import Profile from "./Profile";
import RandomCatFact from "./RandomCatFact";
import RepositoriesList from "./RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <Grid container spacing={10}>
        <BrowserRouter>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <NavBar />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
          >
            <Grid item xs={3} />
            <Grid item xs={6}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="searchPackage" element={<RepositoriesList />} />
                <Route path="catFact" element={<RandomCatFact />} />
                <Route path="agePredict" element={<AgePredict />} />
              </Routes>
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </BrowserRouter>
      </Grid>
    </Provider>
  );
};

export default App;
