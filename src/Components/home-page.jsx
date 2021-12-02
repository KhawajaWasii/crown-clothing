import React from "react";

const HomePage = () => {
  return (
    <div id="home-page" className="homepage">
      <div id="directory-menu" className="flex  max-w-6xl mx-auto flex-wrap ">
        <div className=" w-1/3 p-2" id="menu-item">
          <div id="content" className="border border-gray-500 h-56  flex-col flex  justify-center items-center ">
           <div className="border-gray-500 border p-4 text-center"> 
               <h1 alt="title" className=" text-2xl font-bold">
              HATS
            </h1> 
            <span alt="subtitle" className="">
              SHOP NOW
            </span> </div>
            </div>
          </div>
        
        {/*  */}
        <div className=" w-1/3 p-2" id="menu-item">
          <div id="content" className="border border-gray-500 h-56  flex-col flex  justify-center items-center">
           <div className="border-gray-500 border p-4 text-center"> 
               <h1 alt="title" className=" text-2xl font-bold">
              JACKETS
            </h1> 
            <span alt="subtitle" className="">
              SHOP NOW
            </span> </div>
            </div>
          </div>
        {/*  */}
        <div className=" w-1/3 p-2" id="menu-item">
          <div id="content" className="border border-gray-500 h-56  flex-col flex  justify-center items-center">
           <div className="border-gray-500 border p-4 text-center"> 
               <h1 alt="title" className=" text-2xl font-bold">
              SNEAKERS
            </h1> 
            <span alt="subtitle" className="">
              SHOP NOW
            </span> </div>
            </div>
          </div>
        {/*  */}
        <div className=" w-1/2 p-2" id="menu-item">
          <div id="content" className="border border-gray-500 h-56  flex-col flex  justify-center items-center">
           <div className="border-gray-500 border p-4 text-center"> 
               <h1 alt="title" className=" text-2xl font-bold">
              WOMENS
            </h1> 
            <span alt="subtitle" className="">
              SHOP NOW
            </span> </div>
            </div>
          </div>
          {/*  */}
          <div className=" w-1/2 p-2" id="menu-item">
          <div id="content" className="border border-gray-500 h-56  flex-col flex  justify-center items-center">
           <div className="border-gray-500 border p-4 text-center"> 
               <h1 alt="title" className=" text-2xl font-bold">
              MENS
            </h1> 
            <span alt="subtitle" className="">
              SHOP NOW
            </span> </div>
            </div>
          </div>
          {/* end */}
      </div>
    </div>
  );
};

export default HomePage;
