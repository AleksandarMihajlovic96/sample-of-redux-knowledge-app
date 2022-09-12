import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Button, Grid, Input } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelecter";
import SendIcon from "@mui/icons-material/Send";
import DataLoader from "./core/DataLoader";

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

const AgePredict: React.FC = () => {
  const [name, setName] = useState("");
  const [showAge, setAge] = useState(false);
  const { getAgePredict } = useActions();
  const { agePredict, errorAgePredict, loadingAgePredict } = useTypedSelector(
    (state) => state.agePredict
  );
  const { root, padding, searchInput, button } = useStyles();

  const onSubmit = () => {
    getAgePredict(name);
    setAge(true);
  };

  return (
    <Grid
      container
      spacing={3}
      className={root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item className={padding}>
        <Typography variant="h4" color="common.white">
          This is Age predict component
        </Typography>
      </Grid>
      <Grid item className={padding}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Input
              placeholder="Enter your name..."
              value={name}
              className={searchInput}
              onChange={(e) => setName(e.target.value)}
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
              Predict Age
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {showAge ? (
        <Grid item className={padding} xs={12}>
          <DataLoader
            error={errorAgePredict}
            loading={loadingAgePredict}
            renderComponent={
              <Typography variant="h5" color="common.white" textAlign="center">
                My prediction of age for the name {agePredict.name} is{" "}
                {agePredict.age}. <br /> Did I get it right?
              </Typography>
            }
            loadingText="Please wait while data is loaded."
          />
        </Grid>
      ) : (
        <Grid item className={padding} xs={12}>
          <Typography variant="h5" color="common.white" textAlign="center">
            Please enter your name above so that I can predict your age!
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};
export default AgePredict;
