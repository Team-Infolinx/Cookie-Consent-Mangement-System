import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "../../Assets/web-safe-logo.svg";
import {Stack} from "@mui/system";
import {Grid, Typography} from "@mui/material";

function HomeNavBar() {

    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <AppBar position="fixed" sx={{backgroundColor: scroll > 0 ? { xl:"#ffffff",lg:"#ffffff",sm:"#ffffff", md:"#ffffff",xs:"#ffffff" } :  { xl:'transparent', lg:"#ffffff", sm:"#ffffff", md:"#ffffff",xs:"#ffffff" },boxShadow: scroll > 0 ? "0px 2px 0px 0px rgba(0, 0, 0, 0.2)" : "none",
        }}>

            {/*
            backgroundColor:{lg:"#ffffff",sm:"#ffffff", md:"#ffffff",xs:"#ffffff" }
            backgroundColor: scroll > 0 ? '#ffffff' : 'transparent',boxShadow: scroll > 0 ? "0px 2px 0px 0px rgba(0, 0, 0, 0.2)" : "none"

            */}
            <Toolbar disableGutters>
                    <Grid container spacing={4} sx={{display:"flex",pl: { lg:10,md: 10, sm: 10, xs: 10},pt:2}} style={{flexDirection:"row",}}
                          justifyContent={"center"}
                    >
                        <Grid item spacing={4} xs={2} sm={6} md={6} lg={6} xl={6} alignContent="screenLeft">
                            <img src={logo}
                                 style={{
                                     height: 100,
                                     marginRight: '1em',
                                 }} />

                        </Grid>

                        <Grid className={"123"} item spacing={4} xs={2} sm={6} md={6} lg={6} xl={6} style={{alignItems:"center",justifyContent:"center"}} sx={{top:"50%",left:"50%"}}>
                            <Stack spacing={2} direction="row" justifyContent={"flex-end"} sx={{padding:5}}>
                                <Button variant="contained" ><Typography style={{fontWeight:"bold"}}>Log in</Typography></Button>
                                <Button variant="contained"><Typography style={{fontWeight:"bold"}}>Sign Up</Typography></Button>
                            </Stack>
                        </Grid>

                    </Grid>
               </Toolbar>
        </AppBar>
    );
}
export default HomeNavBar;
