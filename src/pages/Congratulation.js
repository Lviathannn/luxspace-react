import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import CongratulationDetails from "../parts/congratulation/CongratulationDetails";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import SiteMap from "../parts/SiteMap";

export default function Details() {
   return (
      <>
         <Header theme={"black"} />
         <BreadCrumb
            list={[
               { url: "/", name: "Home" },
               { url: "/congratulation", name: "Congratulation" },
            ]}
         />
         <CongratulationDetails />
         <SiteMap />
         <Footer />
      </>
   );
}
