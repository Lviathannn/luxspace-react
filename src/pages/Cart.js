import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import ShoppingCart from "../parts/cart/ShoppingCart";
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
               { url: "/cart", name: "Shoping Cart" },
            ]}
         />
         <ShoppingCart />
         <SiteMap />
         <Footer />
      </>
   );
}
