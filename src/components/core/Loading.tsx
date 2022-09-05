import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

interface LoadingProps {
  loadingText: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h6" color="common.white">
          {props.loadingText}
        </Typography>
      </Grid>
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loading;
