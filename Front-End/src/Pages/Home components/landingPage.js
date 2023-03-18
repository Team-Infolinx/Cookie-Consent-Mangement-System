import {Button, Grid, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import homePageBackground from "../../Assets/home-page-background.svg";
import logo from "../../Assets/web-safe-logo.svg";
import landingImage from "../../Assets/landing-image.svg";



const LandingPage = () => {


    return (

        <Grid className="landingPage"
              style={{


                  minHeight: "100vh",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",

              }}
              sx={{backgroundImage:{xl:`url(${homePageBackground})`,lg:"none"},bgcolor: {lg: "#024481",sm: "#024481", xs: "#024481",} }}
        >

            <Grid container spacing={2} sx={{ pl: { lg:10,md: 10, sm: 10, xs: 10},
                pt:{ lg:5,md: 5, sm:5, xs: 5},


            }}>

                <Grid item xs={2} alignContent="screenLeft" >
                    <img src={logo}
                         style={{
                             height: 100,
                             marginRight: '1em',
                            
                         }} />
                </Grid>

                <Grid item xs={6}/>
                <Grid item xs={4} >
                    <Stack spacing={2} direction="row-reverse" justifyContent={"space-around"} pt={10} pr={10}>
                        <Button variant="contained" >Log in</Button>
                        <Button variant="contained">Sign Up</Button>
                    </Stack>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center" alignItems={"center"} sx={{pl: { lg: 10,md: 10, sm: 10, xs: 10}}}>

                <Grid item lg={5}>
                    <Typography style={{color: "#ffffff"}} variant="h3">Effortlessly manage cookie <br/>consent on your
                        website</Typography>
                    <Typography style={{color: "#ffffff"}} variant="h5">Our easy-to-use cookie consent management system
                        makes it simple to comply with <br/>privacy regulations and protect the data of your website
                        visitors</Typography>
                </Grid>
                <Grid item lg={2} />
                <Grid item lg={5} justifyContent={"right"} sx={{pl: {lg: 10}, display: { xs: 'none', lg: 'block', xl: 'block' }}}  >
                    <img src={landingImage}
                         style={{
                             height:"600px"

                         }}/>

                   <div style={{
                        backgroundImage: "url(${landingImage})",
                        backgroundRepeat: "no-repeat",
                        minHeight: "50vh",

                    }}/>
                </Grid>

            </Grid>


        </Grid>


    );

}

export default LandingPage;
