import axios from "axios";
import React, { useEffect, useState } from "react";

import { createContext } from "react";
// import { fetchDataFromApi } from "../API/API";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [CourseData, setCourseData] = useState([]);
  const config = {
    headers: {},
  };

  

  const getData = async () => {
    const result = await axios.get(
      "http://3.110.161.162:3000/skincare/getAllPost",
      config
    );
    console.log(result.data);
    setCourseData(result.data);
  };

  useEffect(() => {
    // Update the document title using the browser API
    getData();
  }, []);

  return <Context.Provider value={CourseData}>{children}</Context.Provider>;
};
