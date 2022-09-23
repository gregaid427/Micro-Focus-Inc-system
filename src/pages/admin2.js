import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { fetchPendingkey } from "../redux/slices/KeysSlice";
import { useSelector, useDispatch } from "react-redux";

export const Store = () => {

  const dispatch = useDispatch();
  const keys = useSelector(state => state?.mykeys);
  const {Pendingkey} = keys

  useEffect(() => {
    dispatch(fetchPendingkey());
  
  },[dispatch]);

  return (
    <>
      <Navbar />

      <div className="mx-[50px]    p-30 ">
        <div className="flex justify-center m-5 ">
          <h3 className=" text-xl ">Pending Requested Keys</h3>
        </div>

        <div className="flex flex-row">
          <div className=" flex flex-col max-w-[1100px] flex-1 py-4  mx-auto rounded-md shadow-lg   border-b-8 border-t-8 border-t-sky-300 border-b-sky-300">
            <div className="flex items-center justify-center ">
              <h4 className="text-xl mb-2 font-semibold  ">Pending Requested Keys List</h4>
            </div>
            <table class=" mx-auto  items-center justify-center text-xl font-thin text-left text-gray-500 dark:text-gray-400">
              <thead class="text-sm  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                  Request Id
                  </th>
                  <th scope="col" class="py-3 px-6">
                  user 
                  </th>
                  <th scope="col" class="py-3 px-6">
                  institution
                  </th>
                  {/* <th scope="col" class="py-3 px-6">
                  institution Email
                  </th> */}
                  {/* <th scope="col" class="py-3 px-6">
                  status 
                  </th> */}
                  <th scope="col" class="py-3 px-6">
                  Request Date
                  </th>
              
                  {/* <th scope="col" class="py-3 px-6">
                    Suppliers Contact
                  </th> */}
                  <th scope="col" class="py-3 px-6">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
              {Pendingkey?.map(keys=> ( 
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th
                      scope="row"
                      class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                     {keys.req_id}
                    </th>
                    <td class="py-2 px-6">{keys.user}</td>
                    <td class="py-2 px-6">{keys.institution}</td>
                    <td class="py-2 px-6">{keys.requested_at}</td>
                    {/* <td class="py-2 px-6">{keys.institution_email}</td> */}
                    {/* <td class="py-2 px-6">{ keys.status}</td> */}
                 
                 
                  <td class="flex gap-1 py-2 items-center justify-center my-auto ">
                    <h1 className=" text-sm font-bold  p-1 items-center py-1 justify-center flex  bg-sky-400 rounded-sm hover:bg-sky-500 cursor-pointer my-auto  text-white  ">
                      Create Key
                    </h1>
                  
                  </td>
                  {/* <td class="py-4 px-6">$2999</td> */}
                </tr>
                   ) )} 
              </tbody>
            </table>
          </div>

          <div className=" flex-col w-[400px]  py-4    gap-3 rounded-md shadow-lg  border-b-8 border-t-8 border-t-sky-300 border-b-sky-300">
            <div className="flex items-center justify-center ">
              <h4 className="text-xl mb-2 font-semibold  ">Create Key Details</h4>
            </div>

            <div className=" px-5 ">
                <form action="" method="post">
                  <div className=" flex flex-col   gap-2 ">
               
                    <div className="flex justify-between flex-col">
                      <label for="Label" >
                        <span className="text-xl font-light ">Request Id </span>
                      </label>
                      <input type="text" className="border w-full " name=""  />
                    </div>
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
