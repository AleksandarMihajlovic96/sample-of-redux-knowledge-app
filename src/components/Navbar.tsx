import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";
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

  const navLink = [
    {
      label: "Home",
      icon: <HomeIcon fontSize="large" color="error" />,
      link: "/",
    },
    {
      label: "Profile",
      icon: <AccountCircleIcon fontSize="large" color="error" />,
      link: "/profile",
    },
    {
      label: "Search Package",
      icon: <ManageSearchIcon fontSize="large" color="error" />,
      link: "/searchPackage",
    },
    {
      label: "Cat Fact",
      icon: <PetsIcon fontSize="large" color="error" />,
      link: "/catFact",
    },
  ];

  return (
    <div className={padding}>
      <Breadcrumbs aria-label="breadcrumb">
        {navLink.map((tab) => (
          <Link to={tab.link} className={linkText}>
            <Grid container>
              <Grid item>{tab.icon}</Grid>
              <Grid item>
                <Typography
                  fontSize="1.25rem"
                  color="common.white"
                  className={linkTextPadding}
                >
                  {tab.label}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};
export default NavBar;
