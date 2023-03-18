import {Typography,Avatar} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Grid from "@mui/material/Grid";
import "./styles.css"
import 'swiper/swiper-bundle.min.css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import cus1 from "../../Assets/image/customer1.jpg";
import cus2 from "../../Assets/image/customer2.jpg";
import cus3 from "../../Assets/image/customer 3.avif";



const CustomerFeedBack = () => {



    const feedbackItems = [
        {id:"0",name: "Jane", image:cus1, text:"I was really impressed with how easy it was to set up and customize the cookie consent banner on my website using your system. The analytics  " +
                "are also really useful for keeping track of my website's cookie usage. " +
                "Thank you for such a great product!"},
        {id:"1",name: "Jone", image: cus2, text:"I was really impressed with how easy it was to set up and customize the cookie consent banner on my website using your system. The analytics  " +
                "are also really useful for keeping track of my website's cookie usage. " +
                "Thank you for such a great product!"},
        {id:"2",name: "Jack", image: cus3, text:"I was really impressed with how easy it was to set up and customize the cookie consent banner on my website using your system. The analytics  " +
                "are also really useful for keeping track of my website's cookie usage. " +
                "Thank you for such a great product!"},


    ];


    return (
        <div className="customerFeedBack"
             style={{
                 backgroundColor:'#ffffff',
                 backgroundRepeat: "no-repeat",
                 minHeight: "100vh",

             }}>
            <Grid>
                <Typography style={{color : "#024481"}} variant="h2" pt={10} pl={5} pb={5}>What our customers say</Typography>
            </Grid>

            <Grid alignItems={"center"} className={"salinda"}>
                <Swiper
                    // spaceBetween={50}
                    // slidesPerView={1}
                    navigation={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    // scrollbar={{ draggable: true }}
                    modules={[Pagination, Navigation]}
                    style={{width: "75vw"}}
                >
                    {feedbackItems.map((feedback) => (

                        <SwiperSlide key={feedback.id} >

                                    {/*<img src={feedback.image} alt={feedback.name} sx={{borderRadius:50, height:100, width:100}} />*/}
                                    <Grid container direction={"row"} justifyContent={"space-evenly"}>
                                        <Grid container item direction={"column"} lg={6} justifyContent={"center"} alignContent={"center"} >
                                            <Avatar alt="Remy Sharp" src={feedback.image} sx={{width: 300, height: 300}}  />
                                            {/*<img src={feedback.image} alt={feedback.name} sx={{borderRadius:50, height:100, width:100}} />*/}
                                        </Grid>
                                        <Grid container item direction={"column"} lg={6} justifyContent={"center"} flexWrap={"nowrap"}>
                                            <Typography variant="h5" component="div">
                                                {feedback.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {feedback.text}
                                            </Typography>
                                        </Grid>

                                    </Grid>


                                    {/*<Typography variant="h5" component="div">
                                            {feedback.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {feedback.text}
                                        </Typography>*/}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Grid>
        </div> );
}

export default CustomerFeedBack;
