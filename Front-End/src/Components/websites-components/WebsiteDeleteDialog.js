import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

function WebsiteDeleteDialog(props) {
  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleDeleteConfirmation(false)}
    >
      <DialogTitle sx={{ color: "#004587", fontWeight: "600" }}>
        Delete website
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "#004587" }}>
          Are you sure you want to delete website? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ pr: "24px", pb: "16px" }}>
        <Button
          variant="contained"
          onClick={() => props.handleDeleteConfirmation(false)}
          sx={{ bgcolor: "#00A5FF", color: "white" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => props.handleDeleteConfirmation(true)}
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default WebsiteDeleteDialog;
