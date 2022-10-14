import React from "react";

export default function Client() {
   return (
      <section className="container mx-auto">
         <div className="flex justify-center flex-wrap">
            <div className="w-full flex-auto lg:w-auto lg:flex-initial px-4 lg:px-6 my-4 lg:my-0">
               <img
                  src="images/content/logo-adobe.svg"
                  alt=""
                  className="mx-auto"
               />
            </div>
            <div className="w-full flex-auto lg:w-auto lg:flex-initial px-4 lg:px-6 my-4 lg:my-0">
               <img
                  src="images/content/logo-ikea.svg"
                  alt=""
                  className="mx-auto"
               />
            </div>
            <div className="w-full flex-auto lg:w-auto lg:flex-initial px-4 lg:px-6 my-4 lg:my-0">
               <img
                  src="images/content/logo-hermanmiller.svg"
                  alt=""
                  className="mx-auto"
               />
            </div>
            <div className="w-full flex-auto lg:w-auto lg:flex-initial px-4 lg:px-6 my-4 lg:my-0">
               <img
                  src="images/content/logo-miele.svg"
                  alt=""
                  className="mx-auto"
               />
            </div>
         </div>
      </section>
   );
}
