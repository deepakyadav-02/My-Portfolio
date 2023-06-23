import React from 'react'
import sms from '../assets/projects/sms.png'
import csew from '../assets/projects/csew.png'
import fer from '../assets/projects/fer.png'
import hdp from '../assets/projects/hdp.png'

const Projects = () => {
    const projects = [
        {
            id:1,
            src:sms,
            href:'https://github.com/deepakyadav-02/School-Management-System.git'
        },
        {
            id:2,
            src:csew,
            href:'https://github.com/deepakyadav-02/CSE-Website.git'
          
        },
        {
            id:3,
            src:hdp,
            href:'https://github.com/deepakyadav-02/heart-disease-prediction.git'
        },
        {
            id:4,
            src:fer,
            href:'https://github.com/deepakyadav-02/emotion-detector.git'
        },

    ]

  return (
    <div
    name="Projects"
    className="bg-gradient-to-r from-orange-600 to-yellow-400 w-full text-black md:h-screen my-11"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-black">
          Projects
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {projects.map(({ id, src ,href}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center" target='_blank'
            rel ='noreferrer'>
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Projects