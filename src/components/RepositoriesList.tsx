import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Input, List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelecter";
import SendIcon from "@mui/icons-material/Send";

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
        color: "white"
      }
    },
    listItemText: {
      color: "white",
      textAlign: "center",
      "& p": {
        color: "#E2DFD2",
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
  const { root, padding, searchInput, listItemText, button } = useStyles();

  const onSubmit = () => {
    searchRepositories(term);
    console.log("test");
  };

  return (
    <Grid container spacing={3} className={root} justifyContent="center">
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
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error &&
          !loading &&
          data.map((result) => (
            <List>
              <ListItem>
                <ListItemText
                  primary={result.name}
                  secondary={result.version}
                  className={listItemText}
                />
              </ListItem>
            </List>
          ))}
      </Grid>
    </Grid>
  );
};

export default RepositoriesList;
