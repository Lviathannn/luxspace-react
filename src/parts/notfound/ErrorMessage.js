import React from "react";
import { Link } from "react-router-dom";

export default function ErrorMessage({
   title = "404 NotFound",
   message = "Im Sorry Your Pages Is Not Found",
}) {
   return (
      <section className="mt-28">
         <div className="container mx-auto min-h-screen">
            <div className="flex flex-col items-center justify-center">
               <div className="w-full md:w-4/12 text-center">
                  <h2 className="text-3xl font-semibold mb-6">{title}</h2>
                  <p className="text-lg mb-12">{message} </p>
                  <Link
                     to="/"
                     className="text-gray-900 bg-blue-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
                  >
                     Back to Shop
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
}
