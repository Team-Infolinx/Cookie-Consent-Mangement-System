import React from "react";
import LandingPage from "./Home components/landingPage";
import Features from "./Home components/features";
import AboutUs from "./Home components/aboutUs";
import CustomerFeedBack from "./Home components/feedBack";
import Footer from "./Home components/footer";


function Home() {
  return (
    <div>
        <section id={'homeSection_1'}>
            <LandingPage />
        </section>
        <section id={'homeSection_2'}>
            <Features />
        </section>
        <section id={'homeSection_3'}>
            <AboutUs />
        </section>
        <CustomerFeedBack />
        <Footer />

    </div>
  );
}

export default Home;

