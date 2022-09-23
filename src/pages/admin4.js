import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { fetchinstitutionkey} from "../redux/slices/KeysSlice";
import { useSelector, useDispatch } from "react-redux";


export const Store = () => {

  const dispatch = useDispatch();
  const keys = useSelector(state => state?.mykeys);
  const {institutionkey} = keys
  useEffect(() => {
    dispatch(fetchinstitutionkey("ryd427@gmail.co"));
  
  },[dispatch]);

  console.log(institutionkey[0]?.institution)
  return (
    <>
      <Navbar />

      <div className="mx-[50px]    p-30 ">
      <div className="flex items-center mx-auto justify-between m-5 max-w-[1000px] ">
       <div className="flex ">  <h3 className=" mr-5 text-xl font-semibold ">Institution : </h3> <h3 className=" text-xl  ">{institutionkey[0]?.institution} </h3></div>
        
          <div> <input
                      className="text-xl mt-3 w-full py-1 px-2 bg-sky-400 hover:bg-sky-500 cursor-pointer rounded-sm text-white"
                      type="submit"
                      id=""
                      value="Request New Key"
                    /></div>
        </div>
        <div className="flex justify-center m-5 ">
          <h3 className=" text-xl ">All Procured Keys</h3>
        </div>

        <div className="flex flex-row">
          <div className=" flex flex-col max-w-[1100px] flex-1 py-4  mx-auto rounded-md shadow-lg   border-b-8 border-t-8 border-t-sky-300 border-b-sky-300">
            <div className="flex items-center justify-center ">
              <h4 className="text-xl mb-2 font-semibold  "> Keys List</h4>
            </div>
            <table class=" mx-auto  items-center justify-center text-xl font-thin text-left text-gray-500 dark:text-gray-400">
              <thead class="text-sm  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                  Key Id
                  </th>
                  <th scope="col" class="py-3 px-6">
                  user 
                  </th>
                
                  {/* <th scope="col" class="py-3 px-6">
                  status 
                  </th> */}
                  <th scope="col" class="py-3 px-6">
                  Expire Date
                  </th>
                  <th scope="col" class="py-3 px-6">
                   Date Created
                  </th>
                  <th scope="col" class="py-3 px-6">
                   Date Procured
                  </th>
              
                  {/* <th scope="col" class="py-3 px-6">
                    Suppliers Contact
                  </th> */}
                  <th scope="col" class="py-3 px-6">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
              {institutionkey?.map(keys=> ( 
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                   <th
                      scope="row"
                      class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                     {keys.key_id}
                    </th>
                    <td class="py-2 px-6">{keys.user}</td>
                   
                    <td class="py-2 px-6">{keys.expire_at}</td>
                    <td class="py-2 px-6">{keys.created_at}</td>
                    <td class="py-2 px-6">{keys.procure_at}</td>
                    <td class="py-2 px-6">{ keys.status}</td>
                 
                 
                 
                
                  {/* <td class="py-4 px-6">$2999</td> */}
                </tr>
                  ) )} 
              </tbody>
            </table>
          </div>

      
        </div>
      </div>
    </>
  );
};

export default Store;
