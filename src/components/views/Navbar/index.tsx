"use client"

import Image from 'next/image'
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import {BiSearch} from "react-icons/bi"
import {BsCart2} from "react-icons/bs"
import Link from "next/link"
import { HiOutlineChevronDown } from "react-icons/hi"
import DropDown from './subComponents/DropDown'
import { IoMdClose } from "react-icons/io"
import { GiHamburgerMenu } from "react-icons/gi"
import Expand from "@/components/views/Navbar/subComponents/Expand"
import {useState} from 'react'
import {useRouter} from 'next/navigation'



const Navbar = () => {
    const router = useRouter();
    const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [cartItemNumber, setcartNumber] = useState<number>(0);
    const [searchQuery, setSearchQuery] = useState("");

    function handleSerachCalledFunc(e: any) {
        if (e.key === "Enter" && e.keyCode === 13) {
            router.push(`/search/${searchQuery}`);
        }
    }
    
    return (
        <div className='sticky backdrop-blur-lg bg-opacityDownColor top-0 bg-white z-50'>
            <div className="py-5 flex justify-between items-center space-x-12">
                <div className='w-36 flex-shrink-0'>
                <Image width={500} height={500} src={"/logo.webp"} alt="logo"/>
                </div>
                <div className="hidden lg:flex justify-between items-center w-full">
                <ul className='flex space-x-5 font-medium text-lg text-purple-950'>
                {NavbarArray.map((item: NavbarItemType, index: number) => (
                    <li key={index} className='flex items-center relative rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer group'>
                    <Link href={item.href}>{item.label}</Link>
                     {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                    {item.isDropDown && <div className='invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]'>
                    <DropDown item={item}/>
                    </div>}
                    </li>
                ))}
                </ul>
                <div className='border flex items-center text-gray-600 px-3 rounded-md'>
                    <Link href={`/${searchQuery}`}><BiSearch /></Link>
                    <input
                                type="text"
                                value={searchQuery}
                                onKeyDown={handleSerachCalledFunc}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="focus:outline-none pl-1 pr-5 py-1 w-80 rounded-r-md"
                                placeholder="Search in Our Store"
                            />
                </div>
                <div className='flex-shrink-0 w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center'><div className='w-4 h-4 absolute top-5 bg-red-400 text-xs font-light rounded-full flex justify-center items-center'>{cartItemNumber}</div><BsCart2  size={24}/></div>
                </div>
                <div onClick={() => setNavbarOpen(!isNavbarOpen)}>   
                {isNavbarOpen ?  
                    <div className='flex lg:hidden'><GiHamburgerMenu size={30}/></div>:
                    <div className='flex lg:hidden'><IoMdClose size={25}/></div>
                }
                    </div>
                </div>
                {
                  isNavbarOpen &&  <MobileNavbar />
                }
       </div>
    )
}

export default Navbar



const MobileNavbar = () => {
    return (
        
            <div className="w-full px-6 py-4 bg-gray-100">
                {NavbarArray.map((item: NavbarItemType, index: number) => {
                    return (
                        <Expand key={index} item={item} />
                    );
                })}
            </div>

    );
};