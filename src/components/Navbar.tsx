import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    padding: {
      paddingTop: "1.5rem",
    },
    linkText: {
      textDecoration: "none",
    },
    linkTextPadding: {
      paddingTop: ".25rem",
    },
  })
);

const NavBar: React.FC = () => {
  const { padding, linkText, linkTextPadding } = useStyles();

  return (
    <div className={padding}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className={linkText}>
          <Grid container>
            <Grid item>
              <HomeIcon fontSize="large" color="error" />
            </Grid>
            <Grid item>
              <Typography
                fontSize="1.25rem"
                color="common.white"
                className={linkTextPadding}
              >
                Home
              </Typography>
            </Grid>
          </Grid>
        </Link>
        <Link to="/profile" className={linkText}>
          <Grid container>
            <Grid item>
              <WhatshotIcon fontSize="large" color="error" />
            </Grid>
            <Grid item>
              <Typography
                fontSize="1.25rem"
                color="common.white"
                className={linkTextPadding}
              >
                Profile
              </Typography>
            </Grid>
          </Grid>
        </Link>
        <Link to="/searchPackage" className={linkText}>
          <Grid container>
            <Grid item>
              <GrainIcon fontSize="large" color="error" />
            </Grid>
            <Grid item>
              <Typography
                fontSize="1.25rem"
                color="common.white"
                className={linkTextPadding}
              >
                Search Package
              </Typography>
            </Grid>
          </Grid>
        </Link>
      </Breadcrumbs>
    </div>
  );
};
export default NavBar;
