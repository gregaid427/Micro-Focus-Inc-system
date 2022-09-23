import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchkeyAction , fetchSinglekey , fetchPendingkey } from "../redux/slices/KeysSlice";
import { useSelector, useDispatch } from "react-redux";

function Store() {
  const dispatch = useDispatch();
  const keys = useSelector(state => state?.mykeys);
  const {keysList,loading,error,Singlekey} = keys
  // const {,sloading,serror} = keys
  const {Value, setsValue } = useState("")

  const [selectValue, setselectValue ] = useState("")
  const [select, setselect ] = useState("")
 
  // function call(val){
  //   dispatch(fetchSinglekey(val))
    
  // }
  useEffect(() => {
    dispatch(fetchkeyAction());
    // dispatch(fetchReposAction(user));
    dispatch(fetchSinglekey(selectValue));
    setselect(Singlekey)
  },[dispatch,setselectValue]);


// function setselect(val){
//   setselectValue(val)
// }

  console.log(Singlekey);
  console.log(select);
  console.log(Singlekey);
  return (
    <>

      <Navbar />

      <div className="mx-[50px]    p-30 ">
        <div className="flex justify-center m-5 ">
          <h3 className=" text-xl ">Access Keys</h3>
        </div>

        <div className="flex flex-row">
          <div className=" flex flex-col max-w-[1100px] flex-1 py-4  mx-auto rounded-md shadow-lg   border-b-8 border-t-8 border-t-sky-300 border-b-sky-300">
            <div className="flex items-center justify-center ">
              <h4 className="text-xl mb-2 font-semibold  ">Access Key List</h4>
            </div>
            <table class=" mx-auto  items-center justify-center text-xl font-thin text-left text-gray-500 dark:text-gray-400">
              <thead class="text-sm  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    key_id
                  </th>
                  <th scope="col" class="py-3 px-6">
                    user Email
                  </th>
                  <th scope="col" class="py-3 px-6">
                    institution
                  </th>
                  {/* <th scope="col" class="py-3 px-6">
                    institution Email
                  </th> */}
                  <th scope="col" class="py-3 px-6">
                    status
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
                {keysList?.map(keys=> ( 
               
                  <tr key={keys.key_id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                     {keys.key_id}
                    </th>
                    <td class="py-2 px-6">{keys.user}</td>
                    <td class="py-2 px-6">{keys.institution}</td>
                    {/* <td class="py-2 px-6">{keys.institution_email}</td> */}
                    <td class="py-2 px-6">{ keys.status}</td>

                    <td class="flex gap-1 py-2 items-center justify-center my-auto ">
                      <h1 onClick={(e) => dispatch(fetchSinglekey(keys.key_id))} className=" text-sm font-bold  p-1 items-center py-1 justify-center flex rounded-sm bg-red-600 my-auto  text-white  ">
                        Revoke Key
                      </h1>
                      <h1 onClick={(e) => setselectValue(keys.key_id)} className=" font-bold  p-1 items-center py-1 justify-center flex rounded-sm bg-blue-400 text-sm my-auto  text-white  ">
                        View
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
              <h4  className="text-xl mb-2 font-semibold  ">Key Details</h4>
            </div>

            <div className="flex px-5  w-full   ">
              <div className=" flex flex-col  w-full  gap-1  ">
                <div className="flex w-full  ">
                  <div className="flex flex-col justify-between ">
                    <div className="flex flex-col w-full  justify-between ">
                      {/* <h1 className="text-xl font-thin flex justify-start  ">Name </h1> */}

                      <h1 className="text-xl   flex  font-light mr-5 ">
                        Key Id : {Singlekey.key_id}
                      </h1>

                      <h1 className="text-xl   flex  font-light mr-5 ">
                        {/* User Email: {select.data.user} */}
                      </h1>

                      {/* <h1 className="text-xl  font-light mr-5 ">
                        institution : {Singlekey?.data.institution}
                      </h1>
                      <h1 className="text-xl  font-light mr-5 ">
                        institution Email : {Singlekey?.institution_email}
                      </h1>
                      <h1 className="text-xl  font-light mr-5 ">
                        Key Status : {Singlekey?.status}
                      </h1>
                      <h1 className="text-xl  font-light mr-5 ">
                        Date Created : {Singlekey?.created_at}
                      </h1>
                      <h1 className="text-xl  font-light mr-5 ">
                        Date Procured : {Singlekey?.user}
                      </h1>
                      <h1 className="text-xl  font-light mr-5 ">
                        Expire Date : {Singlekey?.expire_at}
                      </h1> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-1 flex-row px-5 ">
              <input
                className="text-xl mt-3 w-full py-1 bg-sky-400 rounded-sm hover:bg-sky-500 cursor-pointer text-white"
                type="submit"
                id=""
                value="Hide Details"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
