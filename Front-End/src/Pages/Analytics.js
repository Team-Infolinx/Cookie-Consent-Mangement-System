import React from "react";
import {Grid} from "@mui/material";

import AppWidgetSummary from "../Common componenets/AppWidgetSummary";
import AppWebsiteVisits from "../Common componenets/WebsiteVisits";
import AppCurrentVisits from "../Common componenets/AppCurrentVisits";
import Typography from "@mui/material/Typography";

function Analytics() {
  return (
    <div>
        <Typography variant={"h3"} sx={{pt:3,color:"#00a5ff"}}>Welcome to Back!</Typography>

        <Grid container spacing={3} sx={{pt:5}}>

            <Grid item xs={12} sm={6} md={3}>

                <AppWidgetSummary value={"30"} title="Number of Websites" total={714000} icon={'ant-design:android-filled'} />
            </Grid>

            <Grid item  xs={12} sm={6} md={3}>
                <AppWidgetSummary value={"231"} title="Number of Cookies" total={1352831} color="info" icon={'ant-design:apple-filled'} />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary value={"180"} title="All Accepted Users" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary value={"51"} title="All Rejected Users" total={234} color="error" icon={'ant-design:bug-filled'} />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
                <AppWebsiteVisits
                    title="Website Visits"
                    subheader="(+43%) than last year"
                    chartLabels={[
                        '01/01/2003',
                        '02/01/2003',
                        '03/01/2003',
                        '04/01/2003',
                        '05/01/2003',
                        '06/01/2003',
                        '07/01/2003',
                        '08/01/2003',
                        '09/01/2003',
                        '10/01/2003',
                        '11/01/2003',
                    ]}
                    chartData={[
                        {
                            name: 'Website A',
                            type: 'column',
                            fill: 'solid',
                            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                        },
                        {
                            name: 'Website B',
                            type: 'area',
                            fill: 'gradient',
                            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                        },
                        {
                            name: 'Website C',
                            type: 'line',
                            fill: 'solid',
                            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                        },
                    ]}
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <AppCurrentVisits
                    title="Regional Visits"
                    chartData={[
                        { label: 'America', value: 4344 },
                        { label: 'Asia', value: 5435 },
                        { label: 'Europe', value: 1443 },
                        { label: 'Africa', value: 4443 },
                    ]}
                    chartColors={[
                        "#ff4842",
                        "#fec107",
                        "#1790ff",
                        "#00ab55",
                    ]}
                />
            </Grid>

        </Grid>
    </div>
  );
}

export default Analytics;
