import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

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

const Profile: React.FC = () => {
  const { root, padding } = useStyles();

  return (
    <Grid container spacing={3} className={root} justifyContent="center">
      <Grid item className={padding}>
        <Typography variant="h4" color="common.white">
          This is Profile component.
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Profile;
