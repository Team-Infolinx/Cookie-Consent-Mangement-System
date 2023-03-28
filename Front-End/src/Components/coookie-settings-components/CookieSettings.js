import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import React from "react";
import { Button, Typography } from "@mui/material";
import CookieCategoryList from "./CookieCategoryList";
import CookieIcon from "@mui/icons-material/Cookie";
import CategoryIcon from "@mui/icons-material/Category";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Cookie from "./Cookie";
import CookieApi from "./ccokie-settings-api/CookieApi";
import CookieCategoryApi from "./ccokie-settings-api/CookieCategoryApi";
import { Category, FlareSharp } from "@mui/icons-material";
import AddCategoryDialog from "./AddCategoryDialog";
import DeleteCategoryDialogBox from "./DeleteCategoryDialogBox";

function CookieSettings() {
  const [cookies, setCookies] = React.useState(CookieApi);
  const [cookieCategories, setCookieCategories] =
    React.useState(CookieCategoryApi);

  //Related to AddCategoryDialog component
  const [isAddingCategory, setIsAddingCategory] = React.useState(false);
  const [newCategoryError, setNewCategoryError] = React.useState(false);
  const [newCategoryErrorMessage, setNewCategoryErrorMessage] =
    React.useState("");

  function handleAddCategoryClick() {
    setIsAddingCategory(true);
  }

  function handleIsAddingCategory() {
    setIsAddingCategory(false);
  }

  function addNewCategory(newCategory) {
    setNewCategoryError(false);
    setNewCategoryErrorMessage("");
    if (newCategory !== "") {
      for (let i = 0; i < cookieCategories.length; i++) {
        if (cookieCategories[i] === newCategory) {
          console.log("category exist");
          setNewCategoryError(true);
          setNewCategoryErrorMessage("The category enetered is already exist.");
          return;
        }
      }
      setCookieCategories((prev) => [...prev, newCategory]);
      handleIsAddingCategory(false);

      return;
    }
    console.log("Empty inputFeild");
    setNewCategoryError(true);
    setNewCategoryErrorMessage("Text feild can not be empty.");
  }
  //end of AddCategoryDialog

  //Related to Deleting Category
  const [IsDeletingCategory, setIsDeletingCategory] = React.useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = React.useState(false);

  function handleOpenDeletingDialogBox() {
    setIsDeletingCategory(true);
  }

  function handleCloseDeletingDialogBox() {
    setIsDeletingCategory(false);
  }

  function deleteConfirm(confirmation) {
    setDeleteConfirmation(confirmation);
  }

  function handleDeleteCategory(deletingcategory) {
    handleOpenDeletingDialogBox();

    if (deleteConfirm) {
      const newCategories = cookieCategories.filter(
        (category) => category !== deletingcategory
      );
      setCookieCategories(newCategories);
    }
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <Button
          variant="contained"
          sx={{ mt: 1, bgcolor: "#00A5FF", mb: 1 }}
          startIcon={<DocumentScannerIcon />}
        >
          Scan Cookies
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography
            sx={{ color: "#004587", display: "flex", fontWeight: "600" }}
          >
            Cookie Categories
            <CategoryIcon sx={{ ml: 1 }} />
          </Typography>
          <CookieCategoryList
            cookieCategories={cookieCategories}
            handleDeleteCategory={handleDeleteCategory}
          />
          <Button
            variant="contained"
            sx={{ mt: 2, bgcolor: "#00A5FF", width: "100%" }}
            onClick={handleAddCategoryClick}
          >
            Add category
          </Button>
          <AddCategoryDialog
            isAddingCategory={isAddingCategory}
            handleIsAddingCategory={handleIsAddingCategory}
            addNewCategory={addNewCategory}
            newCategoryError={newCategoryError}
            newCategoryErrorMessage={newCategoryErrorMessage}
          />
          <DeleteCategoryDialogBox
            open={IsDeletingCategory}
            close={handleCloseDeletingDialogBox}
            deleteConfirm={deleteConfirm}
          />
          ;
        </Grid>
        <Grid item xs={8}>
          <Typography
            sx={{ color: "#004587", display: "flex", fontWeight: "600" }}
          >
            Cookie List
            <CookieIcon sx={{ ml: 1 }} />
          </Typography>
          {cookies.map((cookie) => (
            <Cookie
              key={cookie.key}
              cookie={cookie}
              cookieCategories={cookieCategories}
            />
          ))}
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          pt: "32px",
        }}
      >
        <Button variant="contained" sx={{ mt: 1, bgcolor: "#00A5FF", mb: 1 }}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}

export default CookieSettings;
