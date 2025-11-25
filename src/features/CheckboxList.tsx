import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

export const CheckboxList = () => {
  const [checked, setChecked] = React.useState([1]);
  const [items, setItems] = React.useState({});

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  //localStorage.setItem("lastname", "Smith");
  console.log("localStorage:", localStorage);
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {[...Array(5).keys()].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.includes(value)}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                id={labelId}
                primary={`Line item ${localStorage.getItem("lastname")} ${value + 1}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
