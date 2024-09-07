import React, { useEffect } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import contactimg from '../assets/contact.png'
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
    });
  }, [])

  return (
    <div id='contact' className='w-full bg-gray-300 lg:px-[170px] px-[20px] lg:pt-[150px] pt-[70px] pb-[100px] flex flex-col justify-center items-center gap-[150px]'>

      {/* 1st box  */}
      <div data-aos="zoom-in" data-aos-delay="200" className='lg:w-[60%] w-full flex flex-col justify-center items-center gap-6'>
        <h1 className='font-Lobster text-[55px] leading-[60px] text-center'>Order Preparation</h1>
        <div className='bg-red-600 h-2 w-[100px]'></div>
        <p className='text-[20px] text-center mb-[30px] leading-[40px]'>Pick-up orders made before 4 p.m. can be ready for SAME DAY PICK UP. Please indicate your preferred pick-up date and time prior to checking out. We will send a notification as soon as your order is ready for pick up. </p>
        <div className='flex justify-center items-center gap-4'>
          <FaPhoneVolume className='fill-red-600 lg:size-10 size-7' /><h1 className='lg:text-4xl text-3xl  font-Lobster text-center'>+91 890 989 1029</h1>
        </div>
      </div>

      {/* 2nd box  */}
      <div className='w-full flex lg:flex-row flex-col justify-center items-start mt-[40px] lg:gap-[0px] gap-[60px]'>
        <div data-aos="zoom-in" data-aos-delay="400" className='lg:w-[40%] w-full bg-white lg:p-12 p-7 flex flex-col justify-center items-start gap-6 lg:h-[520px] h-fit z-20'>
          <h1 className='text-[50px] font-Lobster leading-[50px]'>Ice Cream layer cakes!</h1>
          <p className='text-[20px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button className='bg-red-600 px-10 py-3 text-white rounded-full font-semibold'>REACH US</button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className='lg:w-[80%] w-full z-10'><img src={contactimg} alt="" className='lg:mt-[-190px] lg:ml-[-50px] bg-cover bg-center' /></div>
      </div>

      {/* 3rd box  */}
      <div className='w-full flex lg:flex-row flex-col justify-center items-center gap-[50px]'>
        <div data-aos="zoom-in" data-aos-delay="200" className='lg:w-[30%] w-full flex flex-col justify-center items-start gap-5'>
          <h1 className='text-[45px] font-Lobster leading-[65px] text-center'>Contact Us</h1>
          <p className='text-[20px] text-left'>New York, 4140 Parker Rd. Allentown,
            New Mexico 31134</p>
          <h1 className='text-[30px] text-red-600 font-Lobster mb-[-18px]'>+91 (890) 890 1891</h1>
          <h1 className='text-[30px] text-red-600 font-Lobster'>company@gmail.com</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className='lg:w-[70%] w-full bg-gray-600 lg:p-12 p-8 flex flex-col justify-center items-start gap-10 lg:h-[400px] h-fit'>
          <h1 className='text-[40px] text-white font-Lobster leading-[50px]'>Subscribe and never miss out on finds & deals delivered to your inbox.</h1>
          <form action="" className='flex lg:flex-row flex-col justify-center items-start gap-5 w-full'>
            <input type="text" placeholder='Enter your fullname' className='px-10 py-3 w-full rounded-full' />
            <button type='submit' className='bg-red-600 px-10 py-3 text-white rounded-full font-semibold'>SUBMIT</button>

          </form>
          <div className='flex justify-start items-center gap-6 w-full'>
            <FaFacebookF className='fill-white hover:fill-red-600 size-8' />
            <BsInstagram className='fill-white hover:fill-red-600 size-8' />
            <FaYoutube className='fill-white hover:fill-red-600 size-8' />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact