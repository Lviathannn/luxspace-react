import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import Client from "../parts/Client";
import ProductDetails from "../parts/details/ProductDetails";
import Suggestion from "../parts/details/Suggestion";
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
               { url: "/categories/91231", name: "Office Room" },
               { url: "/categories/91231/products/78888", name: "Details" },
            ]}
         />
         <ProductDetails />
         <Suggestion />
         <Client />
         <SiteMap />
         <Footer />
      </>
   );
}
