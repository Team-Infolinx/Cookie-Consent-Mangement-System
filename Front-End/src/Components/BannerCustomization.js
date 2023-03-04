import React from "react";
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, Switch} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function BannerCustomization() {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#00a5ff",
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createTemplate(tempID,templateName, regType, defaultTemp, editTemp) {
        return { tempID,templateName, regType, defaultTemp, editTemp };
    }

    const Templates = [
        createTemplate('01','Web safe - GDPR', 'GDPR', 6.0, 24),
        createTemplate('02','Web safe - CCPA', 'CCPA', 9.0, 37,),
        createTemplate('03','Web safe - LGPD', 'LGPD', 16.0, 24,),

    ];





    return (
    <Grid className="BannerCustomization">
        <Box
            sx={{
            width: 1500,
            height: 500,
            backgroundColor: '#fefefe',
                borderRadius:5,
                pt:{ lg:3,md: 3, sm:3, xs: 5},
                pb:{ lg:5,md: 5, sm:5, xs: 5},
                pl:{ lg:5,md: 5, sm:5, xs: 5},
                pr:{ lg:5,md: 5, sm:5, xs: 5},
                boxShadow: "4px 4px 20px 4px rgba(0, 0, 0, 0.25)",
                mb:8,

            }}>
            <Typography variant={"h5"} sx={{color:"#004587",pb:{lg:3,md: 3, sm:3, xs: 3}}} fontWeight={"Bold"}>Bannner Templates</Typography>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Template Name</StyledTableCell>
                            <StyledTableCell align="right">Regulation Type</StyledTableCell>
                            <StyledTableCell align="right">Default Template</StyledTableCell>
                            <StyledTableCell align="right">Edit Template</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Templates.map((template) => (


                            <StyledTableRow key={template.tempID}>
                                <StyledTableCell component="th" scope="row">
                                    {template.templateName}
                                </StyledTableCell>
                                <StyledTableCell align="right">{template.regType}</StyledTableCell>
                                <StyledTableCell align="right"><Switch /></StyledTableCell>
                                <StyledTableCell align="right"><Button startIcon={<BorderColorIcon />}>Edit</Button></StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>


        <Box
            sx={{
                width: 1500,
                height: 500,
                backgroundColor: '#fefefe',
                borderRadius:5,
                pt:{ lg:3,md: 3, sm:3, xs: 5},
                pb:{ lg:5,md: 5, sm:5, xs: 5},
                pl:{ lg:5,md: 5, sm:5, xs: 5},
                pr:{ lg:5,md: 5, sm:5, xs: 5},
                boxShadow: "4px 4px 20px 4px rgba(0, 0, 0, 0.25)"

            }}>
            <Typography variant={"h5"} sx={{color:"#004587",pb:{lg:3,md: 3, sm:3, xs: 3}}} fontWeight={"Bold"}>Customization</Typography>

        <Grid container direction={"column"} alignItems={"center"} jusitfyContent={"space-around"}>
            <Grid container direction={"row"} spacing={6}>
                <Grid>
                    <Typography variant={"h6"} sx={{color:"#004587",pb:{lg:3,md: 3, sm:3, xs: 3}}} fontWeight={"Bold"}>Settings</Typography>





                </Grid>

                <Grid>
                   <Box
                       sx={{
                           width: 300,
                           height: 300,
                           backgroundColor: '#000000'}}>

                           </Box>

                </Grid>
            </Grid>
        </Grid>
        </Box>




    </Grid>



  );
}

export default BannerCustomization;





