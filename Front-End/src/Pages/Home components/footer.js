import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import logoWhite from "../../Assets/web-safe-logo.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { tab } from '@testing-library/user-event/dist/tab';


const Footer = () => {
    return ( 
    <div className="footer"
    style={{
                backgroundColor:'#00a5ff',
                backgroundRepeat: "no-repeat",

    

            }}>
        
        
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
            
            {/*Column 1 */}
            <Grid container direction="column" justify={"center"} alignItems={"center"} item lg={3} md={12} sm={12}
                      xs={12}>
                <div className="white logo">
                    <img src={logoWhite}
                            alt={"logo white"}
                            style={{
                                height: 200,
                                width: 400,
                                marginRight: '1em',
                            }}></img></div>
                <Typography style={{ color: "#ffffff" }} variant="h5">About us</Typography>
                <Typography style={{ color: "#ffffff" }} variant="h6">We manage your consent</Typography>
                <ul className='social icons'style={{display:'flex', justifyContent:'space-between', listStyleType:'none' }}>
                    <li style={{width:"30%", textAlign:"center", color:"#ffffff"}}><FacebookIcon /></li>
                    <li style={{width:"30%", textAlign:"center",color:"#ffffff"}}><InstagramIcon /></li>
                    <li style={{width:"30%", textAlign:"center",color:"#ffffff"}}><LinkedInIcon /></li>

                </ul>
            </Grid>

            {/*Column 2 */}
            <Grid container direction="column" justify={"center"} alignItems={"center"} item lg={3} md={12} sm={12}
                      xs={12}>
                <Typography variant={"h5"} style={{ color: "#ffffff" }}>Useful links</Typography>
                <Typography variant={"h6"} style={{ color: "#ffffff" }}>Home</Typography>
                <Typography variant={"h6"} style={{ color: "#ffffff" }}>Features</Typography>
                <Typography variant={"h6"} style={{ color: "#ffffff" }}>About Us</Typography>
            </Grid>
            

            {/*Column 3 */}
            <Grid container direction="column" justify={"center"} alignItems={"center"} item lg={3} md={12} sm={12} xs={12}>
            <Typography variant={"h5"} style={{ color: "#ffffff" }}>Contact with us</Typography>
            <Typography variant={"h6"} style={{ color: "#ffffff" }}><DraftsOutlinedIcon />WebSafe@gmail.com</Typography>
            <Typography variant={"h6"} style={{ color: "#ffffff" }}><LocalPhoneIcon />+9400-000-0000</Typography>
                


            </Grid>
        
            
        
        </Grid>
        <Grid container direction="row" justifyContent={"center"}
                  style={{backgroundColor : "#024481", padding: "30px"}}
            >
                <Typography style={{textAlign:"center", color:"#ffffff"}}>Copyright Web Safe © 2023. All rights reserved.
                </Typography>
        </Grid>
        

        

    
    
    </div> );
}


 
export default Footer;
