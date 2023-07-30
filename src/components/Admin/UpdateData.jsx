import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context';
import axios from "axios";
const UpdateData = () => {

    const Prevdata = useContext(Context);

    const [heading1, setHeading1] = useState(`${Prevdata[0].heading1}`);
  const [heading2, setHeading2] = useState(`${Prevdata[0].heading2}`);
  const [heading3, setHeading3] = useState(`${Prevdata[0].heading3}`);
  const [testimonial, setTestimonial] = useState(`${Prevdata[0].testimonial}`);
  const [totalreview, setTotalreview] = useState(`${Prevdata[0].totalreview}`);



const id = Prevdata[0]._id;

 
const updatepost = async (obj)=>{
    try {
        
        const result  = await axios.put(`http://3.110.161.162:3000/skincare/editPost/${id}`, obj
       )

       
        console.log(result.data)

        alert("ok");

    } catch (error) {
        console.log(error)
    }
}




  const handlesubmit = (e) => {
    e.preventDefault();

    const obj ={
        heading1:heading1,
        heading2:heading2,
        heading3:heading3,
        testimonial:testimonial,
        totalreview:totalreview
    }

    console.log(heading1)

    updatepost(obj);
  };



  return (
  <>
   <div className="flex flex-col  w-screen ml-auto mr-auto">
          <div className="text-5xl text-center mt-15 mb-12">
            {" "}
           Admin Can Change the Hero Section Deatils Here.........
          </div>

          <form>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={heading1}
                onChange={(e) => {
                  setHeading1(e.target.value);
                }}
              />
              <label
                htmlfor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
               Main Heading
              </label>
            </div>

           
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={heading2}
                onChange={(e) => {
                  setHeading2(e.target.value);
                }}
              />
              <label
                htmlfor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Sub Heading
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={heading3}
                onChange={(e) => {
                  setHeading3(e.target.value);
                }}
              />
              <label
                htmlfor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                content
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={testimonial}
                  onChange={(e) => {
                    setTestimonial(e.target.value);
                  }}
                />
                <label
                  htmlfor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                 Testimonial
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={totalreview}
                  onChange={(e) => {
                    setTotalreview(e.target.value);
                  }}
                />
                <label
                  htmlfor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
               Total Reviews
                </label>
              </div>
            </div>

            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handlesubmit}
            >
              Update
            </button>
          </form>
        </div>
  </>
  )
}

export default UpdateData