import React from "react";
import Navbar from "./Navbar";

export const Store = () => {
  return (
    <>
      <Navbar />

      <div className="mx-[50px]    p-30 ">
        <div className="flex justify-center m-5 ">
          <h3 className=" text-xl ">Create New Key</h3>
        </div>

        <div className="flex flex-row">
       

          <div className=" flex-col w-[400px]  py-4 mx-auto    gap-3 rounded-md shadow-lg  border-b-8 border-t-8 border-t-sky-300 border-b-sky-300">
            <div className="flex flex-col items-center justify-center ">
              <h4 className="text-xl mb-2 font-semibold  ">Create Key Details</h4>
              <h4 className="text-sm mb-2   ">Fill out forms to create a new key</h4>
            </div>

            <div className=" px-5 ">
                <form action="" method="post">
                  <div className=" flex flex-col   gap-2 ">
               
                  
                    <div className="flex justify-between flex-col ">
                      <label for="Label" >
                        <span className="text-xl font-thin ">User </span>
                      </label>
                      <input type="text" className="border w-full " name=""  />
                    </div>
                    <div className="flex justify-between flex-col">
                      <label for="Label" >
                        <span className="text-xl font-light ">institution </span>
                      </label>
                      <input type="text" className="border w-full " name=""  />
                    </div>
                    <div className="flex justify-between flex-col">
                      <label for="Label" >
                        <span className="text-xl font-light ">
                          institution Email{" "}
                        </span>
                      </label>
                      <input type="text" className="border w-full " name=""  />
                    </div>
                    <div className="flex justify-between flex-col ">
                      <label for="Label" >
                        <span className="text-xl font-thin ">Expire Date </span>
                      </label>
                      <input type="text" className="border w-full " name=""  />
                    </div>
              
                 
                
                    <input
                      className="text-xl mt-3 w-full py-1 bg-sky-400 hover:bg-sky-500 cursor-pointer rounded-sm text-white"
                      type="submit"
                      id=""
                      value="Submit"
                    />

                  </div>
                </form>
              </div>

       
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
