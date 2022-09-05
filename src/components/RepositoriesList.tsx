import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Input } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelecter";
import SendIcon from "@mui/icons-material/Send";
import DataLoader from "./core/DataLoader";
import MapRepositories from "./MapRepositories";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: "linear-gradient(to right, #28313B, #485461)",
    },
    padding: {
      paddingBottom: "3.4rem",
      paddingRight: "1.875rem",
    },
    searchInput: {
      minWidth: "15.6rem",
      "& input": {
        color: "white",
      },
    },
    button: {
      color: "red",
      backgroundColor: "black",
    },
  })
);

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const { root, padding, searchInput, button } = useStyles();

  const onSubmit = () => {
    searchRepositories(term);
    console.log("test");
  };

  return (
    <Grid container spacing={3} className={root} justifyContent="center" alignItems="center">
      <Grid item className={padding}>
        <Typography variant="h4" color="common.white">
          This is Search Repositories component
        </Typography>
      </Grid>
      <Grid item className={padding}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Input
              placeholder="Enter package name..."
              value={term}
              className={searchInput}
              onChange={(e) => setTerm(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              className={button}
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => {
                onSubmit();
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={padding} xs={12}>
        <Typography variant="h5" color="common.white" textAlign="center">
          List of found packages:
        </Typography>
      </Grid>
      <Grid item className={padding} xs={12}>
        <DataLoader
          error={error}
          loading={loading}
          renderComponent={<MapRepositories list={data} />}
          loadingText="Please wait while data is loaded."
        />
      </Grid>
    </Grid>
  );
};

export default RepositoriesList;
