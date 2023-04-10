import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import GeneralSettings from "../Components/GeneralSettings";
import CookieSettings from "../Components/coookie-settings-components/CookieSettings";
import PrivacyRegulation from "../Components/PrivacyRegulation";
import BannerCustomization from "../Components/BannerCustomization";
import Script from "../Components/Script";
import axios from "axios";
import {useEffect} from "react";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{p: 3}}>{children}</Box>}
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
    const [flag, setFlag] = React.useState(0)

    //Handling Tab panels next and back buttons.
    function handleNext() {
        setValue(value + 1);
        setFlag(flag + 1);
    }
    function handleBack() {
        setValue(value - 1);
    }

    // Related to the website object
    const [website, setWebsite] = React.useState({
        configName: "",
        domain: "",
    });
    function handleConfigNameAndDomainChange(newConfigName,newDomain){
        setWebsite((prevState) => ({
            ...prevState,
            configName: newConfigName,
            domain: newDomain
        }));
        handleNext();
    }

    useEffect(()=>{
        if (website.configName!=="" && website.domain!==""){
            saveWebsite();
        }
    },[flag])
    // saving website to the database.
      function saveWebsite(){
        axios.post("http://localhost:8080/api/v1/1/addWebsite" , website)
            .then((response) => {
                setWebsite(response.data);
            })
    }


    return (
        <Box sx={{width: "100%"}}>
            <Typography variant="h3" color="#004587">
                Websites
            </Typography>
            <Typography variant="caption" color="#004587">
                Add your website here...
            </Typography>
            <Box sx={{borderBottom: 1, borderColor: "divider", mt: 4}}>
                <Tabs
                    value={value}
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
                <GeneralSettings
                    handleNext={handleNext}
                    website={website}
                    handleConfigNameAndDomainChange={handleConfigNameAndDomainChange}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CookieSettings handleNext={handleNext} handleBack={handleBack} website={website}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <PrivacyRegulation handleNext={handleNext} handleBack={handleBack}/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <BannerCustomization handleNext={handleNext} handleBack={handleBack}/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Script handleNext={handleNext} handleBack={handleBack}/>
            </TabPanel>
        </Box>
    );
}

export default WebsiteForm;
