import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Social = () => {
    const links = [
        {
            id:1,
            child:(
                <>
                Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/deepak-yadav-032b2b247/',
            style:'rounder-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/deepakyadav-02',
            style:'rounder-tr-md'
        },
        {
            id:3,
            child:(
                <>
                Gmail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:deepakyadav101002@gmail.com',
        },
        {
            id:4,
            child:(
                <>
               Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Resume.pdf',
            style:'rounder-br-md',
            download:true,
        },
    ]
  return (
    <div className='hidden lg:flex flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id ,child ,href,download})=>(
           <li key={id} className={' flex justify-between items-center rounded-xl w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-xl duration-300 bg-gradient-to-r from-orange-600 to-yellow-400'}>
 <a href={href} className='flex justify-between items-center w-full text-black'
 download={download}
 target='_blank'
 rel ='noreferrer'>

     {child}
     </a>
     </li>
            ))}
           
        </ul>
    </div>
  )
}

export default Social