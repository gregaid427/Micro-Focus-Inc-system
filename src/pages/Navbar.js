import React, { useState } from "react";


export const Logout = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
   
      <>

<div className=" p-3 px-[300px] flex justify-between items-center text-white  bg-blue-400  ">
  
    

    <h3 className="items-center text-2xl font-bold">Micro Focus Inc.</h3>
  <div className="flex items-center " >
  <div className=" flex text-xl mr-20  ">User:</div>
    <div className="rounded p-2 text-xl bg-blue-600  flex  cursor-pointer hover:bg-blue-700 ">logout</div>
   
    </div>
</div>


<div className="flex justify-center p-4  bg-blue-200">
<ul className="flex  mx-auto justify-center items-center  text-black" >
    <li className="text-xl  font-light mx-3 rounded-md border-4  border-white  " >All Keys</li>
    <li className="text-xl font-light mx-3 rounded-md border-4  border-white " >Pending Requested Keys</li>


 
</ul>
</div>
  </>
  );
};

export default Logout;
