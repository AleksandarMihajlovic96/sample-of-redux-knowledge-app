import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: "linear-gradient(to right, #28313B, #485461)",
    },
    padding: {
      paddingBottom: "3.4rem",
      paddingRight:"1.875rem"
    },
  })
);

const Home: React.FC = () => {
  const { root, padding} = useStyles();
  return (
    <Grid container spacing={3} className={root}>
      <Grid item className={padding}>
        <Typography variant="h4" color="common.white" textAlign="center">
          Welcome to Sample of React and Redux knowledge app
        </Typography>
      </Grid>
      <Grid item className={padding}>
        <Typography variant="body1" color="common.white" textAlign="center">
          Here you will find some basic concepts of React and Redux, simple go
          through the Breadcrumbs to see all functionalities that are
          implemented inside this app.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={padding}
      >
        <Typography variant="h6" color="common.white">
          Have fun!!!
        </Typography>
        <EmojiEmotionsIcon sx={{ color: "yellow" }} />
      </Grid>
    </Grid>
  );
};
export default Home;
