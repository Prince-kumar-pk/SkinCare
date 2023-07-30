import React, { useContext } from 'react'
import './Hero.css'
import image from '../../assets/background.png'
import { Context } from '../Context/Context';
const Hero = () => {

    const Data = useContext(Context);


    console.log(Data[0]?.heading1);

  
  return (
    <div className='h-[90vh] w-[1515px] border-0 border-red-800  backgrnd'>

        <img src={image} alt="" />
        <div className='absolute top-0 h-[80vh] w-[100vw] '> 
    <div className="flex  justify-between h-[75vh] border-0 border-green-900">
      {/* Left Side: Content */}
      <div className="w-1/2 p-10">
        <h1 className="text-6xl font-bold mb-4 w-10">{Data[0]?.heading1}</h1>
        <h3 className="text-2xl  mb-4"> {Data[0]?.heading2} </h3>
        <p className="text-lg mb-6 w-[50%]"> {Data[0]?.heading3} </p>
        <button className="px-6 py-3 w-48 bg-blue-500 rounded-tr-full rounded-bl-full text-white rounded-md ">Button</button>
      </div>
      {/* Right Side: Testimonial */}
      <div className="w-1/4 p-10 flex flex-col   border-0 border-red-800">
        {/* Testimonial Content */}
        <div className="bg-gray-100 p-1 rounded-lg  mb-4 border-0 border-green-800">
          
          {/* Star Rating */}
          <div className="flex items-center ">
          <span className='font-bold text-4xl'>&#8220;</span>
            <span className="text-yellow-500 mx-1">★</span>
            <span className="text-yellow-500 mx-1">★</span>
            <span className="text-yellow-500 mx-1">★</span>
            <span className="text-yellow-500 mx-1">★</span>
            <span className="text-yellow-500 mx-1">★</span>
          </div>
        </div>
        <p>{Data[0]?.testimonial}</p>
        {/* Circular Profile Image */}
        <div className="relative left-[150px] w-50 h-12 profile flex justify-end mt-24">
  <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg" alt="Profile" className='absolute left-[3px] z-10 border-2 border-white' />
  <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg" alt="Profile"  className=' absolute left-[35px] z-20 border-2 border-white' />
  <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg" alt="Profile" className=' absolute left-[55px]  z-30 border-2 border-white' />
  <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg" alt="Profile" className=' absolute left-[75px]  z-40 border-2 border-white' />
</div>

<span className='relative left-[150px]'>100k+ Women Turst</span>


      </div>
    </div>

{/* ######################### */}

<div className="flex  justify-around h-[15vh] border-0 border-blue-900">

<div className="users border-0 border-black flex  items-center">

    <h1 className='w-1/2 text-3xl font-bold'>{Data[0]?.totalreview}k+</h1>
    <p className='w-1/3 text-1xl'>Active Users with Positive reviews</p>
</div>

<div className="buttons users border-0 border-black flex  justify-around flex-wrap w-50">
<button className='w-20 h-10   rounded-lg  text-black  border-2 border-black'>Vitamin</button>
<button className='w-20 h-10 bg-black rounded-lg  text-white  border-2 border-black'>AHA</button>
<button className='w-20 h-10   rounded-lg  text-black  border-2 border-black'>lorem</button>
<button className='w-20 h-10  bg-black rounded-lg  text-white border-2 border-black'>hello</button>
<button className='w-20 h-10   rounded-lg  text-black border-2 border-black'>c++</button>
<button className='w-20 h-10  bg-black rounded-lg  text-white border-2 border-black'>java</button>
</div>

</div>

</div>
    </div>
  )
}

export default Hero