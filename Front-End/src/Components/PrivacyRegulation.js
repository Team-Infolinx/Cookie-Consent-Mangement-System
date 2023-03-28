import {
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function PrivacyRegulation() {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [options, setOptions] = React.useState(["A1", "A2", "A3", "A4"]);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOptions((prev) => [...prev, selectedOption]);
    const newOptions = options.filter((option) => option !== selectedOption);
    setOptions(newOptions);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">select regulation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption}
          label="option"
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <List>
        {selectedOptions.map((option) => (
          <ListItem key={option}>
            <ListItemText>{option}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PrivacyRegulation;
