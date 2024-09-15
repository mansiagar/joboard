import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
const Filter = ({
  FullTime = "Full Time",
  PartTime = "Part Time",
  Internship = "Internship",
}) => {
  const [menuItem, setMenuItem] = useState("");

  const handleSelect = (type) => {
    setMenuItem(type);
  };

  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button variant="contained" {...bindTrigger(popupState)}>
              Type
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem
                onClick={() => {
                  handleSelect(FullTime);
                  popupState.close();
                }}
              >
                Full Time
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleSelect(PartTime);
                  popupState.close();
                }}
              >
                Part Time
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleSelect(Internship);
                  popupState.close();
                }}
              >
                Internships
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <div>
        <h1>{menuItem ? `${menuItem} ` : "Please select a type"}</h1>
      </div>
    </div>
  );
};
export default Filter;
