import {Grid, Typography} from "@mui/material";
import aboutUsImg from "../../Assets/about-us.jpg"

const AboutUs = () => {
    return (<div className="aboutUs"
                 style={{
                     backgroundColor: '#024481',
                     backgroundRepeat: "no-repeat",
                     minHeight: "100vh",

                 }}>


        <Grid container direction="row" justifyContent="space-evenly">

            <Grid item lg={12} md={12} sm={12} xs={12} alignItems="left">
                <Typography style={{color: "#ffffff"}} variant="h2" pt={10} pl={5} pb={5}>About Us</Typography>
            </Grid>


            <Grid item justify={"center"} alignItems={"center"} lg={6} md={12} sm={12} xs={12}>

                <img src={aboutUsImg} style={{
                    height: 200,
                    marginRight: '1em',
                }}/>
            </Grid>

            <Grid item justify={"center"} alignItems={"center"} lg={6} md={12} sm={12} xs={12}>

                <Typography variant="h5" style={{color: "#ffffff"}}>Welcome to our cookie consent management system! We
                    are a team of web developers who are passionate about helping businesses and organizations comply
                    with cookie consent regulations and protect the data of their website visitors.</Typography>

            </Grid>
        </Grid>


    </div>);
}

export default AboutUs;
