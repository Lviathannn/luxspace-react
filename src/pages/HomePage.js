import React from "react";
import Client from "../parts/Client";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/homePages/Hero";
import BrowseRoom from "../parts/homePages/BrowseRoom";
import JustArrived from "../parts/homePages/JustArrived";
import SiteMap from "../parts/SiteMap";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";

export default function HomePage() {
   useScrollAnchor();
   useModalDOM();
   return (
      <>
         <Header theme="white" position="absolute" />
         <Hero />
         <BrowseRoom />
         <JustArrived />
         <Client />
         <SiteMap />
         <Footer />
      </>
   );
}
