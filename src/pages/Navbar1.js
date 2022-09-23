import React, { useState } from "react";


export const Logout = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
   
      <>

<div className=" p-3 px-[300px] flex justify-center items-center text-white   bg-blue-400  ">
  
    

    <h3 className="items-center text-3xl text-center font-bold">Micro Focus Inc.</h3>
 
</div>



  </>
  );
};

export default Logout;
