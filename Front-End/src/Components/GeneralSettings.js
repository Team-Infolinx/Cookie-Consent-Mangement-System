import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function GeneralSettings() {
  const [configName, setConfigName] = React.useState("");
  const [domain, setDomain] = React.useState("");
  const [configNameError, setConfigNameError] = React.useState(false);
  const [domainError, setDomainError] = React.useState(false);
  const [errorMessageForName, setErrorMessageForName] = React.useState("");
  const [errorMessageForDomain, setErrorMessageForDomain] = React.useState("");

  function handleConfigName(event) {
    setConfigName(event.target.value);
  }

  function handleDomain(event) {
    setDomain(event.target.value);
  }

  function handleSaveChanges(event) {
    event.preventDefault();
    setConfigNameError(false);
    setDomainError(false);
    setErrorMessageForDomain("");
    setErrorMessageForName("");

    if (configName === "") {
      setConfigNameError(true);
      setErrorMessageForName("Configure Name can not be empty");
    }
    if (domain !== "") {
      if (isValidDomain(domain) === false) {
        setDomainError(true);
        setErrorMessageForDomain("Enter a valid domain.");
      }
    } else {
      setDomainError(true);
      setErrorMessageForDomain("Domain can not be empty");
    }

    if (configNameError === false && domainError === false) {
      console.log(configName + " and " + domain);
    }
  }

  function isValidDomain(domain) {
    const pattern =
      /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,})(?:\/)?$/;
    return pattern.test(domain);
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSaveChanges}
    >
      <TextField
        required
        id="outlined-required"
        label="Configuration Name"
        placeholder="Enter your configuration name here..."
        size="normal"
        fullWidth
        sx={{ mt: 3 }}
        onChange={handleConfigName}
        error={configNameError}
        helperText={errorMessageForName}
      ></TextField>
      <TextField
        required
        id="outlined-required"
        label="Domain"
        placeholder="Enter your domain here..."
        size="normal"
        fullWidth
        sx={{ mt: 3 }}
        onChange={handleDomain}
        error={domainError}
        helperText={errorMessageForDomain}
      ></TextField>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 4, bgcolor: "#00A5FF" }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}

export default GeneralSettings;
