import { List, ListItem, ListItemText } from "@mui/material";
import { PackageInterface } from "../state/models";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface MapRepositoriesProps {
  list: PackageInterface[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemText: {
      color: "white",
      textAlign: "center",
      "& p": {
        color: "#E2DFD2",
      },
    },
  })
);

const MapRepositories: React.FC<MapRepositoriesProps> = (props) => {
  const { listItemText } = useStyles();

  return (
    <div>
      {props.list.map((result) => (
        <List>
          <ListItem>
            <ListItemText
              key={result.name}
              primary={result.name}
              secondary={result.version}
              className={listItemText}
            />
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default MapRepositories;
