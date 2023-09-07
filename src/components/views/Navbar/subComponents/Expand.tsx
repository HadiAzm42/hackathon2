import React, { useState } from 'react';
import { NavbarItemType } from "@/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi";

const Expand: React.FC<{ item: NavbarItemType }> = ({ item }) => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <li className={`${isExpanded ? "h-auto" : "h-12"} list-none duration-300 transition-height ease-in-out`}>
            <div onClick={() => setExpanded(!isExpanded)} className="flex items-center hover:bg-purple-600 justify-between border rounded-md duration-300 py-2 px-3">
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? (
                    <HiOutlineChevronDown className={`mt-1 transition-transform duration-300 transform ${isExpanded ? "rotate-0" : "-rotate-180"} group-hover:rotate-0`} size={15} />
                ) : (
                    ""
                )}
            </div>
            <div className={`flex flex-col space-y-1 mt-2 ${isExpanded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
                {item.dropDownData?.map((item: NavbarItemType, index: number) => (
                    <Link key={index} className="hover:bg-gray-50 duration-300 px-5 py-1 rounded-md" href={item.href}>{item.label}</Link>
                ))}
            </div>
        </li>
    );
};

export default Expand;
