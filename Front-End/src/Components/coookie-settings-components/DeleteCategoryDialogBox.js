import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

function DeleteCategoryDialogBox(props) {
  return (
    <Dialog open={props.open} onClose={props.close}>
      <DialogTitle sx={{ color: "#004587", fontWeight: "600" }}>
        Delete category
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "#004587" }}>
          Are you sure you want to delete {props.category} category? This action
          cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ pr: "24px", pb: "16px" }}>
        <Button
          variant="contained"
          onClick={props.close}
          sx={{ bgcolor: "#00A5FF", color: "white" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => props.deleteConfirm(true)}
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteCategoryDialogBox;
