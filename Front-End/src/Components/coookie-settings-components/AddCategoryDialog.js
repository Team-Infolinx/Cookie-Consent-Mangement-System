import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

function AddCategoryDialog(props) {
  const [newCategory, setNewCategory] = React.useState("");

  function handleNewCategory(event) {
    setNewCategory(event.target.value);
  }

  return (
    <Dialog
      open={props.isAddingCategory}
      onClose={props.handleIsAddingCategory}
    >
      <DialogTitle sx={{ color: "#004587", fontWeight: "600" }}>
        Add new category
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "#004587" }}>
          To help you manage your cookie categories, we are asking you to add
          new cookie categories.
        </DialogContentText>
        <TextField
          required
          autoComplete="off"
          label="Category Name"
          sx={{ mt: 2 }}
          variant="outlined"
          size="small"
          fullWidth
          onChange={handleNewCategory}
          error={props.newCategoryError}
          helperText={props.newCategoryErrorMessage}
        />
      </DialogContent>
      <DialogActions sx={{ pr: "24px", pb: "16px" }}>
        <Button
          onClick={props.handleIsAddingCategory}
          sx={{ bgcolor: "#00A5FF", color: "white" }}
          variant="contained"
        >
          Cancel
        </Button>
        <Button
          onClick={() => props.addNewCategory(newCategory)}
          sx={{ bgcolor: "#00A5FF", color: "white" }}
          variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddCategoryDialog;
