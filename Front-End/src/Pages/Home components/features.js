import {Button, Grid, Typography} from "@mui/material"
import features_1 from "../../Assets/features-1.svg"
import features_2 from "../../Assets/features-2.svg"
import features_3 from "../../Assets/features-3.svg"
import features_4 from "../../Assets/features-4.svg"
import CardHome from "../../Common componenets/cardHome"



const homeCards = [
    {title: "Customizable Banner", content: "Customizable banner content is here"},
    {title: "Consent Option", content: "Consent content is here"},
    {title: "Analytics", content: "Analytics content is here"},
    {title: "Scan Cookies", content: "Scan Cookies content is here"},
];


const Features = () => {
    return (
        <div className="features"
             style={{
                 backgroundColor: '#ffffff',
                 backgroundRepeat: "no-repeat",
                 minHeight: "100vh",
             }}>


            <Grid container direction="row" justifyContent={"flex-start"} alignItems="center" pt={10} pl={5} pb={5}>
                <Typography style={{color: "#024481"}} variant="h2">Features</Typography>
            </Grid>

            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <Grid sx={{pb: {md: 10, sm: 10, xs: 10}}} container item direction="column" justify={"center"}
                      alignItems={"center"} lg={3} md={6} sm={12}>
                    <CardHome V1={homeCards[0].title} V2={homeCards[0].content} img={features_1}/>
                </Grid>

                <Grid sx={{pb: {md: 10, sm: 10, xs: 10}}} container item direction="column" justify={"center"}
                      alignItems={"center"} lg={3} md={6} sm={12}>

                    <CardHome V1={homeCards[1].title} V2={homeCards[1].content} img={features_2}/>

                </Grid>

                <Grid sx={{pb: {md: 10, sm: 10, xs: 10}}} container item direction="column" justify={"center"}
                      alignItems={"center"} lg={3} md={6} sm={12}>

                    <CardHome V1={homeCards[2].title} V2={homeCards[2].content} img={features_3}/>

                </Grid>

                <Grid sx={{pb: {md: 10, sm: 10, xs: 10}}} container item direction="column" justify={"center"}
                      alignItems={"center"} lg={3} md={6} sm={12}>

                    <CardHome V1={homeCards[3].title} V2={homeCards[3].content} img={features_4}/>

                </Grid>


            </Grid>

            {/*<Grid item lg={3} md={12} sm={12} xs={12} sx={{bgcolor: {lg: "#d00101", md: "#0261ea", sm: "#45ff00", xs: "#121212"}}}>
                <Button variant="contained">Learn more</Button>
            </Grid>*/}

        </div>);
}

export default Features;
