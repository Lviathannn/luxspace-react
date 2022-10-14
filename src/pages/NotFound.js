import React from "react";
import ErrorMessage from "../parts/notfound/ErrorMessage";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import SiteMap from "../parts/SiteMap";

export default function Details() {
   return (
      <>
         <Header theme={"black"} />
         <ErrorMessage />
         <SiteMap />
         <Footer />
      </>
   );
}
