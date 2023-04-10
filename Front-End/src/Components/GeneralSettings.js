import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect, useState} from "react";

function GeneralSettings(props) {
  const [generalSettings, setGeneralSettings] = useState({
    configName: props.website.configName,
    domain: props.website.domain,
  });
  const { configName, domain } = generalSettings;

  useEffect(() => {
    setGeneralSettings({
      configName: props.website.configName,
      domain : props.website.domain
    })
  },[props.website])

  // Related to error handling.
  const [configNameError, setConfigNameError] = React.useState(false);
  const [domainError, setDomainError] = React.useState(false);
  const [errorMessageForName, setErrorMessageForName] = React.useState("");
  const [errorMessageForDomain, setErrorMessageForDomain] = React.useState("");

  function onInputChange(event) {
    setGeneralSettings({...generalSettings,[event.target.name] : event.target.value})
  }

  function handleSaveChanges(event) {
    event.preventDefault();
    setConfigNameError(false);
    setDomainError(false);
    setErrorMessageForDomain("");
    setErrorMessageForName("");

    let isConfigNameValid = true;
    let isDomainValid = true;

    if (configName === "") {
      setConfigNameError(true);
      setErrorMessageForName("Configure Name can not be empty");
      isConfigNameValid = false;
    }
    if (domain !== "") {
      if (isValidDomain(domain) === false) {
        setDomainError(true);
        setErrorMessageForDomain("Enter a valid domain.");
        isDomainValid=false;
      }
    } else {
      setDomainError(true);
      setErrorMessageForDomain("Domain can not be empty");
      isDomainValid=false;
    }

    if (isConfigNameValid === true && isDomainValid === true) {
      props.handleConfigNameAndDomainChange(configName,domain)
      // props.handleNext();
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
      onSubmit={(event)=>handleSaveChanges(event)}
    >
      <TextField
        required
        label="Configuration Name"
        placeholder="Enter your configuration name here..."
        size="normal"
        fullWidth
        sx={{ mt: 3 }}
        name="configName"
        value={configName}
        error={configNameError}
        helperText={errorMessageForName}
        onChange={(event) => onInputChange(event)}
      ></TextField>
      <TextField
        required
        label="Domain"
        placeholder="Enter your domain here..."
        size="normal"
        fullWidth
        sx={{ mt: 3 }}
        name="domain"
        value={domain}
        error={domainError}
        helperText={errorMessageForDomain}
        onChange={(event) => onInputChange(event)}
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
