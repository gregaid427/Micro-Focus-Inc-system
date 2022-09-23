import React, { useState } from "react";
import Navbar1 from "./Navbar1";
import { Link } from "react-router-dom";

import { loginUserAction } from "../redux/slices/UsersSlice";
import { useDispatch } from "react-redux";

export const Store = () => {
const dispatch = useDispatch()

const [user,setuser] = useState("")
const [password, setpassword] = useState("")

const handleSubmit = e =>  {
  e.preventDefault();
 const data = {
  "email": user,
  "password": password
 
  }
console.log(data)
  dispatch(loginUserAction(data))
}
  return (
    <>
     <Navbar1 />

      <div className="mx-[50px]    p-30 ">
       

        <div className="flex flex-row">
       

          <div className=" flex-col w-[400px] mt-20 py-4 mx-auto    gap-3 rounded-md shadow-lg  border-b-2 border-t-2 border-t-sky-300 border-b-sky-300">
            <div className="flex flex-col items-center justify-center ">
              <h4 className="text-xl mb-2   ">Sign In</h4>
              <h4 className="text-sm mb-2   ">Enter your credentials to login</h4>
            </div>

            <div className=" px-5 ">
                <form onSubmit={ (e) => handleSubmit(e) } >
                  <div className=" flex flex-col   gap-2 ">
               
                  
                    <div className="flex justify-between flex-col ">
                      <label for="Label" >
                        <span className="text-xl font-thin ">Email </span>
                      </label>
                      <input type="text" onChange={ (e)  => setuser(e.target.value)  }  className="border w-full " name=""  />
                    </div>
                    <div className="flex justify-between flex-col">
                      <label for="Label" >
                        <span className="text-xl font-light ">Password</span>
                      </label>
                      <input type="password" onChange={ (e)  => setpassword(e.target.value)  } className="border w-full " name=""  />
                    </div>
                    <div className="flex justify-between flex-col">
                      <label for="Label" >
                        <span className="text-sm font-light mr-2 ">Forgot Password?</span>
                       <Link to="/admin7" > <span className="text-sm font-light text-blue-700 ">Click here to reset password </span></Link>
                      </label>
                    
                    </div>
                 
                    <input
                      className="text-xl mt-3 w-full py-1 bg-sky-400 hover:bg-sky-500 cursor-pointer rounded-sm text-white"
                      type="submit"
                      id=""
                      value="Login"
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
