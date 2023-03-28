import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

function CookieCategoryList(props) {
  const categoryList = (
    <List
      sx={{
        bgcolor: "background.paper",
        color: "#004587",
        pt: "0px",
        pb: "0px",
        mt: 2,
        minWidth: "200px",
        borderRadius: "5px",
      }}
    >
      {props.cookieCategories.map((category) => (
        <ListItem key={category} divider>
          <ListItemText primary={category} />
          <IconButton
            size="small"
            onClick={() => props.handleDeleteCategory(category)}
          >
            <DeleteOutlineIcon fontSize="small" sx={{ color: "#004587" }} />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );

  return <Box>{categoryList}</Box>;
}

export default CookieCategoryList;
