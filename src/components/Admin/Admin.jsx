import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import AdminLoginSignUp from "./Login";
import { Context } from "../Context/Context";



export default function Admin() {
  const [login, setLogin] = useState(false);


  const Prevdata = useContext(Context);

  const id = Prevdata[0]?._id;

  const islogin = (flag) => {
    setLogin(flag);
  };

  if (!login) {
    return <AdminLoginSignUp islogin={islogin} />;
  }
  else
    return (
      <>

<div className="text-5xl text-center mt-15 mb-12">
            {" "}
           Admin Can Change the Hero Section Deatils Here.........
          </div>

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#/">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Prevdata[0]?.heading1} </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {Prevdata[0]?.heading3} </p>
    <Link to={`/updateHeroSection/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Edit
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
</div>
      </>
    );
}
