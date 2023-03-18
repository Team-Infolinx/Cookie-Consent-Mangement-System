import React from "react";
import LandingPage from "./Home components/landingPage";
import Features from "./Home components/features";
import AboutUs from "./Home components/aboutUs";
import CustomerFeedBack from "./Home components/feedBack";
import Footer from "./Home components/footer";

function Home() {
  return (
    <div>

        <LandingPage />
        <Features />
        <AboutUs />
        <CustomerFeedBack />
        <Footer />

    </div>
  );
}

export default Home;

