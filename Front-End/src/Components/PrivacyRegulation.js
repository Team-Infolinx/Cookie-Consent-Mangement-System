import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


function PrivacyRegulation() {

  const [selectedOption, setSelectedOption] = React.useState("");
  const [selectedPolicies, setSelectedPolicies] = React.useState([]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [addPrivacy, setAddPrivacy] = React.useState([]);

  const getDescription = () => {
    switch (selectedOption) {
      case "option1":
        return "The GDPR is a data privacy regulation that provides a framework for the protection of personal data of individuals within the European Union and European Economic Area. It grants individuals rights over their personal data and places obligations on organizations to protect personal data, report data breaches, and obtain consent for processing personal data. The GDPR applies to all organizations that process the personal data of EU citizens and has significant penalties for non-compliance..";
      case "option2":
        return "The California Consumer Privacy Act (CCPA) is a privacy law that grants certain rights to California residents over their personal information and places obligations on businesses that collect personal information. California residents have the right to know what personal information is being collected about them, to request the deletion of their personal information, and to opt-out of the sale of their personal information. Businesses that collect personal information from California residents must provide certain disclosures and implement measures to protect the privacy and security of personal information. The CCPA applies to certain businesses that collect personal information from California residents and includes penalties for non-compliance.";
      case "option3":
        return "The Lei Geral de Proteção de Dados (LGPD) is a data privacy law in Brazil that grants certain rights to Brazilian citizens over their personal data and places obligations on organizations that collect and process personal data. Brazilian citizens have the right to know what personal data is being collected about them, to request the deletion of their personal data, and to withdraw their consent to the processing of their personal data. Organizations that collect and process personal data must provide certain disclosures and implement measures to protect the privacy and security of personal data. The LGPD applies to all organizations that collect and process personal data in Brazil, and includes penalties for non-compliance.";
      case "option4":
        return "The Personal Information Protection and Electronic Documents Act (PIPEDA) is a Canadian federal privacy law that regulates the collection, use, and disclosure of personal information by private sector organizations. PIPEDA provides individuals with certain rights over their personal information, including the right to access, correct, and file complaints related to their personal information. PIPEDA applies to all private sector organizations, including charities and non-profit organizations, that collect, use, or disclose personal information in commercial activities. Penalties for non-compliance with PIPEDA include fines and potential legal action.";
      case "option5":
        return "The Personal Data Protection Act (PDPA) is a data privacy law in Singapore that requires organizations to obtain consent from individuals before collecting, using, or disclosing their personal data. Individuals have the right to access and correct their personal data, and organizations are required to take appropriate measures to protect personal data and notify individuals in the event of a data breach. The PDPA applies to all organizations in Singapore, and includes penalties for non-compliance, as well as the requirement to appoint a Data Protection Officer (DPO) to oversee data protection matters and ensure compliance with the law.";
      default:
        return "Please select the appropriate privacy regulation/s that you wish to incorporate into your website.";
    }
  };

  const getAddedRegulations = () => {
    const Regulations = {
      option1: "GDPR",
    };
  };

  React.useEffect(() => {});

  const allselectedPolicies = (
    <div>
      {selectedPolicies.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );

  return (
    <div>
      <Box sx={{ width: 500, backgroundColor: "white" }}>
        <FormControl fullWidth>
          <InputLabel id="privacy-select-label">Privacy Policy</InputLabel>
          <Select
            labelId="privacy-label"
            id="privacy-select"
            value={selectedOption}
            label="Privacy"
            onChange={handleChange}
          >
            <MenuItem value="option1">GDPR</MenuItem>
            <MenuItem value="option2">CCPA</MenuItem>
            <MenuItem value="option3">LGPD</MenuItem>
            <MenuItem value="option4">PIPEDA</MenuItem>
            <MenuItem value="option5">PDPA</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button
        onClick={getAddedRegulations}
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          bgcolor: "#00A5FF",
          marginTop: 4,
          marginBottom: 4,
        }}
        size="large"
      >
        <FormControl></FormControl>
        Add
      </Button>

      <Paper elevation={2} sx={{ p: 2 }}>
        <h3>Description</h3>
        <p>{getDescription()}</p>
      </Paper>
      <p> </p>
      <Paper elevation={2} sx={{ p: 3 }}>
        <h3>Added Privacy Regulations</h3>
        <p></p>
      </Paper>

      {allselectedPolicies}

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" sx={{ mt: 30, bgcolor: "#00A5FF" }}>
          Save Changes
        </Button>
      </Box>
    </div>
  );
}

export default PrivacyRegulation;

