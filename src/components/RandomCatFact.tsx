import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelecter";
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
  })
);

const RandomCatFact: React.FC = () => {
  const { root, padding } = useStyles();
  const { getRandomCatFact, getRandomCatImg } = useActions();
  const { catFact, errorCatFact, loadingCatFact } = useTypedSelector(
    (state) => state.catFact
  );
  const { catImg, errorCatImg, loadingCatImg } = useTypedSelector(
    (state) => state.catImg
  );

  useEffect(() => {
    getRandomCatFact();
    getRandomCatImg();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Grid container spacing={3} className={root} justifyContent="center">
      <Grid item className={padding}>
        <Typography variant="h4" color="common.white">
          Random Cat Fact component
        </Typography>
      </Grid>
      <Grid item className={padding}>
        <Typography variant="body1" color="common.white">
          On this tab, everytime you come here, you will get a random fact about
          a cat.
        </Typography>
      </Grid>
      <Grid item className={padding}>
        <DataLoader
          error={errorCatFact}
          loading={loadingCatFact}
          renderComponent={
            <Typography variant="h6" color="common.white" alignContent="center">
              {catFact}
            </Typography>
          }
          loadingText="Please wait while data is loaded."
        />
      </Grid>
      <Grid item className={padding}>
        <DataLoader
          error={errorCatImg}
          loading={loadingCatImg}
          renderComponent={<Avatar src={catImg} />}
          loadingText="Please wait while image is loaded."
        />
      </Grid>
    </Grid>
  );
};
export default RandomCatFact;
