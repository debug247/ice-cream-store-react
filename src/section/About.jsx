import React, { useEffect } from 'react'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
    });
  }, [])

  return (
    <div id='about' className='w-full lg:px-[120px] px-[20px] py-[80px] bg-gray-600 flex lg:flex-row flex-col justify-center items-start gap-[70px]'>
      <div className='flex flex-col justify-center items-start gap-[30px]' data-aos="zoom-in" data-aos-delay="200"><h1 className='text-white text-[45px] font-semibold font-Lobster'>What We Do</h1>
        <p className='text-[18px] text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis libero deleniti ad atque? Molestias ab ea itaque nobis ex. <br />Odit consequuntur nobis facilis itaque, tempore eos quas ratione corporis.</p>
        <button className='bg-red-600 px-10 py-3 text-white rounded-full font-semibold'>REACH US</button></div>
      <div className='flex flex-col justify-center items-center gap-4' data-aos="zoom-in" data-aos-delay="400">
        <img src={about1} alt="about img" className='rounded-full w-[150px]' />
        <h1 className='text-white text-3xl font-Lobster'>Classic</h1>
        <p className='text-[18px] text-white text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores!</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-4' data-aos="zoom-in" data-aos-delay="600">
        <img src={about2} alt="about img" className='rounded-full w-[150px]' />
        <h1 className='text-white text-3xl font-Lobster'>Cakes</h1>
        <p className='text-[18px] text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, accusamus?</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-4' data-aos="zoom-in" data-aos-delay="800">
        <img src={about3} alt="about img" className='rounded-full w-[150px]' />
        <h1 className='text-white text-3xl font-Lobster'>Vegan</h1>
        <p className='text-[18px] text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, accusamus?</p>
      </div>
    </div>
  )
}

export default About