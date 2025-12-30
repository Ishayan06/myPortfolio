import { div } from 'framer-motion/client';
import React from 'react';
import MagicButton from './ui/magicbutton';
import { IoAddOutline } from 'react-icons/io5';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    // <div>
    //     <div className=' lg:text-3xl text-xl mb-10 flex flex-col items-center justify-center'>
    //    <div className='gap-2 flex justify-center items-center'>
    //      <h1 className=''>
    //         Ready to take 
            
    //      </h1>
    //      <span className='text-purple-400'>your</span>
    //      <h1 className=''>
    //         digital presence to next level
    //      </h1>
         
    //    </div>
    //    <p className='lg:w-[50vw] text-xl'>reach out to me today and lets discuss how i can help you acheive yout goal </p>
    // </div>
    // </div>
    <footer id='contact'  className="w-full py-20 flex flex-col  items-center justify-center">
      <div className="max-w-4xl text-center flex flex-col items-center gap-6 px-4">
        
        {/* Heading */}
        <h1 className="lg:text-4xl text-2xl font-semibold leading-tight">
          Ready to take{" "}
          <span className="text-purple-400">your</span>{" "}
          digital presence to the next level?
        </h1>

        {/* Description */}
        <p className="text-gray-400 lg:text-lg text-sm max-w-2xl">
          Reach out to me today and let’s discuss how I can help you achieve your goals.
        </p>

        {/* CTA Button */}
        <a
  href="mailto:ishayankundu6@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Ishayan,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
>
  <MagicButton
    icon={<FaLocationArrow />}
    position="right"
    text="Get in touch"
  />
</a>
      </div>
      <div className="flex mt-10 items-center md:gap-3 gap-6">
  {socialMedia.map((profile) => (
    <a
      key={profile.id}
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-purple-400 hover:scale-110 transition"
    >
      <img
        src={profile.img}
        alt="social-icon"
        width={20}
        height={20}
      />
    </a>
  ))}
</div>

    </footer>
    
  );
}

export default Footer;
