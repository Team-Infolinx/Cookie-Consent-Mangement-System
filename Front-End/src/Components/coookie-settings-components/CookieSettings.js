import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import React, {useEffect, useState} from "react";
import { Button, Typography } from "@mui/material";
import CookieCategoryList from "./CookieCategoryList";
import CookieIcon from "@mui/icons-material/Cookie";
import CategoryIcon from "@mui/icons-material/Category";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Cookie from "./Cookie";
import CookieApi from "./ccokie-settings-api/CookieApi";
import CookieCategoryApi from "./ccokie-settings-api/CookieCategoryApi";
import AddCategoryDialog from "./AddCategoryDialog";
import DeleteCategoryDialogBox from "./DeleteCategoryDialogBox";
import axios from "axios";

function CookieSettings(props) {
  const [cookies, setCookies] = useState(CookieApi);
  const [cookieCategories, setCookieCategories] = useState([]);

  useEffect(() => {
    axios.post(`http://localhost:8080/api/v1/1/addCookieCategoryList` , CookieCategoryApi)
        .then((response) => {setCookieCategories(response)})
  })

  //Related to AddCategoryDialog component.
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryError, setNewCategoryError] = useState(false);
  const [newCategoryErrorMessage, setNewCategoryErrorMessage] = useState("");

  function handleAddCategoryClick() {
    setIsAddingCategory(true);
  }

  function handleIsAddingCategory() {
    setIsAddingCategory(false);
  }
  // Validating new category.
  function addNewCategory(newCategory) {
    setNewCategoryError(false);
    setNewCategoryErrorMessage("");
    if (newCategory !== "") {
      for (let i = 0; i < cookieCategories.length; i++) {
        if (cookieCategories[i] === newCategory) {
          setNewCategoryError(true);
          setNewCategoryErrorMessage("The category enetered is already exist.");
          return;
        }
      }
      setCookieCategories((prev) => [...prev, newCategory]);
      handleIsAddingCategory(false);

      return;
    }
    setNewCategoryError(true);
    setNewCategoryErrorMessage("Text feild can not be empty.");
  }

  //Related to Deleting Category.
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    React.useState(false);
  const [categoryToDelete, setCategoryToDelete] = React.useState(null);

  function handleDeleteCategory(category) {
    setShowDeleteConfirmation(true);
    setCategoryToDelete(category);
  }

  function handleDeleteConfirmation(confirm) {
    if (confirm) {
      const newCategories = cookieCategories.filter(
        (category) => category !== categoryToDelete
      );
      setCookieCategories(newCategories);
    }
    setShowDeleteConfirmation(false);
    setCategoryToDelete(null);
  }

  // Cookie Categorization using categories.

  function handleCategorization(event, cookieId) {
    const newCookies = cookies.map((cookie) => {
      if (cookie.id === cookieId) {
        return { ...cookie, category: event.target.value };
      }
      return cookie;
    });
    setCookies(newCookies);
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
            open={showDeleteConfirmation}
            handleDeleteConfirmation={handleDeleteConfirmation}
          />

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
              key={cookie.id}
              cookie={cookie}
              cookieCategories={cookieCategories}
              handleCategorization={handleCategorization}
            />
          ))}
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "row",
          pt: "32px",
          justifyContent : "space-between"
        }}
      >
        <Button variant="contained" sx={{ mt: 1, bgcolor: "#00A5FF", mb: 1 }} onClick={props.handleBack}>
          Back
        </Button>
        <Button variant="contained" sx={{ mt: 1, bgcolor: "#00A5FF", mb: 1 }}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}

export default CookieSettings;
