import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import WebsitesTable from "../Components/websites-components/WebsitesTable";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import WebsiteDeleteDialog from "../Components/websites-components/WebsiteDeleteDialog";

function Websites() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    loadWebsites();
  }, []);

  const loadWebsites = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/v1/1/getWebsites"
    );
    setWebsites(result.data);
  };

  //Deleting website.

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [websiteToDelete, setWebsiteToDelete] = useState(null);

  function handleDeleteWebsite(website) {
    setShowDeleteConfirmation(true);
    setWebsiteToDelete(website);
  }

  async function handleDeleteConfirmation(confirm) {
    if (confirm) {
      const newWebsites = websites.filter(
        (website) => website !== websiteToDelete
      );
      try {
        await axios.delete(
          `http://localhost:8080/api/v1/1/${websiteToDelete.websiteId}/deleteWebsite`
        );
        setWebsites(newWebsites);
      } catch (error) {
        console.log(error);
      }
    }

    setShowDeleteConfirmation(false);
    setWebsiteToDelete(null);
  }

  return (
    <Box>
      <Typography variant="h3" sx={{ color: "#004587" }}>
        Websites
      </Typography>
      <Typography variant="caption" sx={{ color: "#004587" }}>
        all your websites
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          mb: "16px",
        }}
      >
        <Button
          variant="contained"
          sx={{ mt: 1, bgcolor: "#00A5FF", mb: 1 }}
          href="/user/websiteform"
        >
          Add Website
        </Button>
      </Box>
      <WebsitesTable
        websites={websites}
        handleDeleteWebsite={handleDeleteWebsite}
      />
      <WebsiteDeleteDialog
        open={showDeleteConfirmation}
        handleDeleteConfirmation={handleDeleteConfirmation}
      />
    </Box>
  );
}

export default Websites;
