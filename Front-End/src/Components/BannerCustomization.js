import React, {useState} from "react";
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
import CustSelectBox from "../Common componenets/custSelectBox";

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




    const[ top,setTop] =useState(10);



    function handleChangeTop(event){
        const value=event.target.value;
        if(value=="Top"){
            setTop(10);
        }
        if(value=="Bottom"){
            setTop(330);
        }

    }

    const[ left,setLeft] =useState(10);

    function handleChangeHorizontal(event){
        const value=event.target.value;
        if(value=="Left"){
            setLeft(10);
        }
        if(value=="Right"){
            setLeft(730);
        }

    }

    const[ color,setColor] =useState('#eb6c44');

    function handleChangeColor(event){
        const value= event.target.value;
        if(value=="Orange"){
            setColor("#eb6c44");
        }
        if(value=="Black"){
            setColor("#000000");
        }

    }









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
                height: 700,
                backgroundColor: '#fefefe',
                borderRadius:5,
                pt:{ lg:3,md: 3, sm:3, xs: 5},
                pb:{ lg:5,md: 5, sm:5, xs: 5},
                pl:{ lg:5,md: 5, sm:5, xs: 5},
                pr:{ lg:5,md: 5, sm:5, xs: 5},
                boxShadow: "4px 4px 20px 4px rgba(0, 0, 0, 0.25)"

            }}>
            <Typography variant={"h5"} sx={{color:"#004587",pb:{lg:3,md: 3, sm:3, xs: 3}}} fontWeight={"Bold"}>Customization</Typography>





            <Grid container direction={'row'} spacing={2}>
                <Grid container item direction="column" justify={"center"} xs={3}  lg={3} xl={3}>
                    <Typography variant={"h5"} sx={{color:"#004587",pb:{lg:3,md: 3, sm:3, xs: 3}}} fontWeight={"Bold"}>Settings</Typography>

                    <Typography variant={"h6"} sx={{color:"#00A5FF",pb:{lg:3,md: 3, sm:3, xs: 3}}} fontWeight={"Bold"}>Banner Template</Typography>

                    <CustSelectBox name={"Banner Template"}  val1={"Web Safe-GDPR"} val2={"Web Safe-CCPA" } />

                    <Typography variant={"h6"} sx={{color:"#00A5FF",pb:{lg:3,md: 3, sm:3, xs: 3},pt:2}} fontWeight={"Bold"}>Banner Position</Typography>

                    <CustSelectBox name={"Banner Position"}  fun={handleChangeTop} val1="Top" val2={"Bottom"} />

                    <Typography variant={"h6"} sx={{color:"#00A5FF",pb:{lg:3,md: 3, sm:3, xs: 3},pt:2}} fontWeight={"Bold"}>Banner Alignment</Typography>

                    <CustSelectBox name="Banner Alignment"  fun={handleChangeHorizontal} val1="Left" val2="Right" />

                    <Typography variant={"h6"} sx={{color:"#00A5FF",pb:{lg:3,md: 3, sm:3, xs: 3},pt:2}} fontWeight={"Bold"}>Banner Colour</Typography>

                    <CustSelectBox name="Banner Colour"  fun={handleChangeColor} val1="Orange" val2="Black" />


                    {/*<FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Banner Position</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            onChange={handleChangeTop}
                        >
                            <MenuItem value="Top">Top</MenuItem>
                            <MenuItem value="Bottom">Bottom</MenuItem>
                        </Select>
                    </FormControl>*/}
                </Grid>

                <Grid container item direction="column" justify="center" xs={9} lg={9} xl={9}>


                    <div style={{width:'1050px',
                        height:"550px",
                        backgroundColor:"white",
                        padding:15,
                        position:"relative",
                        border: " 5px solid #00a5ff",
                        borderRadius:10,


                    }}>
                        <div style={{
                            width:'300px',height:"200px",
                            backgroundColor:color,
                            alignSelf:"right",
                            position:"absolute",
                            padding:5,
                            top:top,
                            left:left,
                            bottom:0,

                        }}>
                            <h5 style={{color:"#ffffff"}}>This Website Uses cookies</h5>
                            <h5 style={{color:"#ffffff"}}>Our site enables script (e.g. cookies)
                                that is able to read, store, and write information on your browser and
                                in your device.</h5>

                        </div>

                    </div>
                    <Typography variant={"h6"} sx={{color:"#00A5FF",pb:{lg:3,md: 3, sm:3, xs: 3}, }} fontWeight={"Bold"} align={"center"}>Banner Preview</Typography>
                </Grid>
            </Grid>

        </Box>




    </Grid>



  );
}

export default BannerCustomization;





