  import React from "react";
  import { projects } from "@/data";
  import { PinContainer } from "./ui/3d-pin";
  import { section } from "framer-motion/m";
  import { FaLocationArrow } from "react-icons/fa";


  const RecentProject = () => {
    return (
      
          <div className="py-20" id="projects">
        <h1 className="md:text-4xl text-xl text-center mx-auto   lg:flex items-center gap-2 justify-center ">
          A small section of {"  "}
          <span className="text-purple-500 tracking-[0.25em]">
            recent project
          </span> 
        </h1>
        <div className="flex flex-wrap items-center  justify-center p-4 gap-x-24 gap-y-7 mt-10">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center  sm:w-[570px] w-[80vw]">
              <PinContainer title={link} href={link}>
                  <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 ">
                      <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13132d]" >

                      <img src="/bg.png" alt="bg-img" />
                      </div>
                      <img src={img} alt={title} className="z-10 absolute bottom-0" />
                  </div>
                  <h1 className="line-clamp-1 font-bold lg:text-2xl md:text-xl text-base ">
                      {title}
                  </h1>
                  <p className="lg:text-xl line-clamp-2 lg:font-normal font-light text-sm">
                      {des}
                  </p>
                  <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                          {iconLists.map((icon,index)=>(
                              <div key={icon} style={{transform:`translateX(-${5 *index *2}px)`}} className="border border-white/[0.2] rounded-full gap-1 bg-black w-8 h-8 flex items-center justify-center lg:w-10 lg:h-10 ">
                                  <img src={icon} alt={icon} className="p-2" />
                              </div>
                          ))}
                      </div>
                      <div className="flex justify-center items-center text-purple-400 text-sm">
                          <p>Check Live Site</p>
                          <FaLocationArrow className="ms-3 " color="#CBACF9"/>
                      </div>
                  </div>
              </PinContainer>
          </div>)
          )}
        </div>
      </div>
    
      
    );
  };

  export default RecentProject;
