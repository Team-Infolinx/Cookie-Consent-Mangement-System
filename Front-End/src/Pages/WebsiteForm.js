import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import GeneralSettings from "../Components/GeneralSettings";
import CookieSettings from "../Components/coookie-settings-components/CookieSettings";
import PrivacyRegulation from "../Components/PrivacyRegulation";
import BannerCustomization from "../Components/BannerCustomization";
import Script from "../Components/Script";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function WebsiteForm() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h3" color="#004587">
        Websites
      </Typography>
      <Typography variant="caption" color="#004587">
        Add your website here...
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="General Settings" {...a11yProps(0)} />
          <Tab label="Cookie" {...a11yProps(1)} />
          <Tab label="Privacy Regulation" {...a11yProps(2)} />
          <Tab label="Customization" {...a11yProps(3)} />
          <Tab label="Script" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <GeneralSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CookieSettings />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PrivacyRegulation />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BannerCustomization />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Script />
      </TabPanel>
    </Box>
  );
}

export default WebsiteForm;
