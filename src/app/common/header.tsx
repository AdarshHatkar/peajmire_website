"use client";

import { useState } from "react";
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaGraduationCap, FaResearchgate } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch, IoClose } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { websiteDetails } from "../constants";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [isResearchHovered, setIsResearchHovered] = useState(false);

    const handleSubMenuToggle = (menu) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };
    const router = useRouter();
    return (
        <div className="w-full shadow-md">
            <div className="w-full bg-light-bg border-b border-gray-200">
                <div className="hidden lg:flex justify-between items-center px-4 xl:w-[1200px] xl:mx-auto">
                    <div className="flex items-center space-x-2 px-2 text-sm py-2">
                        <FaEnvelope className="text-primary" />
                        <a
                            href={`mailto:${websiteDetails.email}`}
                            className="text-primary hover:text-secondary transition-colors"
                        >
                            {websiteDetails.email}
                        </a>
                    </div>
                    <div className="flex space-x-4 my-3">
                        <a href={`mailto:${websiteDetails.email}`} aria-label="Email">
                            <FaEnvelope className="text-gray-500 hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={websiteDetails.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="text-gray-500 hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={websiteDetails.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="text-gray-500 hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={websiteDetails.scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Google Scholar"
                        >
                            <FaGraduationCap className="text-gray-500 hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={websiteDetails.researchID}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="ResearchGate"
                        >
                            <FaResearchgate className="text-gray-500 hover:text-primary transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="relative w-full xl:w-[1200px] xl:mx-auto py-3 px-4 bg-white">
                <div className="flex justify-between items-center w-full">
                    <div
                        className="text-2xl font-bold text-primary hover:cursor-pointer transition-colors"
                        onClick={() => router.push("/")}
                    >
                        Dr. Prafulla E Ajmire
                    </div>

                    {!showSearch && (
                        <ul className="hidden lg:flex justify-start items-center gap-6 text-dark-bg text-md font-semibold">
                            <li
                                className="cursor-pointer hover:text-primary group transition-colors duration-300 relative"
                                onMouseEnter={() => setIsResearchHovered(true)}
                                onMouseLeave={() => setIsResearchHovered(false)}
                                onClick={() => router.push("/research")}
                            >
                                Research
                                {isResearchHovered && (
                                    <div className="pt-3 right-[-50px] absolute top-0 z-50">
                                        <div className="mt-4 w-[260px] text-dark-bg bg-white z-50 shadow-lg rounded-md overflow-hidden border border-gray-100">
                                            <ul className="flex flex-col items-start">
                                                <li className="w-full hover:bg-light-bg">
                                                    <Link
                                                        href="/research"
                                                        className="block p-3 hover:text-primary transition-colors"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        Research Areas
                                                    </Link>
                                                </li>
                                                <li className="w-full hover:bg-light-bg">
                                                    <Link
                                                        href="/research-publications"
                                                        className="block p-3 hover:text-primary transition-colors"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        Research Publications
                                                    </Link>
                                                </li>
                                                <li className="w-full hover:bg-light-bg">
                                                    <Link
                                                        href="https://scholar.google.co.in/citations?user=FsJjR5sAAAAJ&hl=en"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block p-3 hover:text-primary transition-colors"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        Google Scholar Profile
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>

                            <li className="cursor-pointer hover:text-primary transition-colors duration-300">
                                <Link href="/course-offerings">Course Offerings</Link>
                            </li>

                            <li className="cursor-pointer hover:text-primary transition-colors duration-300">
                                <Link href="/about">About {websiteDetails.doctorName}</Link>
                            </li>
                            <li>
                                <IoSearch
                                    className="text-xl cursor-pointer hover:text-primary"
                                    onClick={() => setShowSearch(true)}
                                />
                            </li>
                        </ul>
                    )}

                    <div
                        className={`flex justify-end items-center transition-all duration-300 ease-in-out ${
                            showSearch ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                    >
                        {showSearch && (
                            <Input placeholder="Search this Website" type="text" variant={"bordered"} radius={"full"} />
                        )}
                        {showSearch && (
                            <RxCross2 className="text-xl cursor-pointer ml-2" onClick={() => setShowSearch(false)} />
                        )}
                    </div>

                    <button
                        className="hidden lg:flex rounded-full bg-primary text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-primary border-2 border-primary"
                        onClick={() => router.push("/contact")}
                    >
                        Contact Us
                    </button>

                    {/* for hamburger */}
                    <div className="lg:hidden z-50 hover:border-primary rounded-full p-2">
                        {isSidebarOpen ? (
                            <IoClose
                                className="text-black text-2xl hover:cursor-pointer duration-200"
                                onClick={() => setIsSidebarOpen((prev) => !prev)}
                            />
                        ) : (
                            <SlMenu
                                className="text-black text-lg hover:cursor-pointer duration-200"
                                onClick={() => setIsSidebarOpen((prev) => !prev)}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile sidebar */}
            <div
                className={`fixed top-0 right-0 bottom-0 bg-white overflow-y-auto h-full z-40 w-[90%] sm:w-[60%] px-2 pt-[40px] lg:hidden transition-all duration-300 transform ease-in-out ${
                    isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
            >
                <div className="flex flex-col items-start pt-4 pb-6 pl-4 border-b border-gray-200">
                    <ul className="flex flex-col text-dark-bg text-md pt-3 w-full">
                        <li className="py-3">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold">
                                    <Link href="/research">Research</Link>
                                </h2>

                                <span onClick={() => handleSubMenuToggle("research")} className="cursor-pointer p-2">
                                    <IoMdArrowDropdown
                                        className={`transition-transform ${
                                            openSubMenu === "research" ? "rotate-180" : ""
                                        }`}
                                    />
                                </span>
                            </div>
                            <div
                                className={`transition-all duration-300 ease-in overflow-hidden ${
                                    openSubMenu === "research" ? "max-h-40" : "max-h-0"
                                }`}
                            >
                                <ul className="mt-3 text-md pl-2">
                                    <li className="py-2">
                                        <Link href="/research" className="hover:text-primary transition-colors">
                                            <span>Research Areas</span>
                                        </Link>
                                    </li>
                                    <li className="py-2">
                                        <Link
                                            href="/research-publications"
                                            className="hover:text-primary transition-colors"
                                        >
                                            <span>Research Publications</span>
                                        </Link>
                                    </li>
                                    <li className="py-2">
                                        <Link
                                            href="https://scholar.google.co.in/citations?user=FsJjR5sAAAAJ&hl=en"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            <span>Google Scholar Profile</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="py-3">
                            <Link href="/research-publications" className="hover:text-primary transition-colors">
                                <span>Publications</span>
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link href="/course-offerings" className="hover:text-primary transition-colors">
                                <span>Course Offerings</span>
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link href="/about" className="hover:text-primary transition-colors">
                                <span>About {websiteDetails.doctorName}</span>
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link href="/contact" className="hover:text-primary transition-colors">
                                <span>Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start gap-4 pt-4 pb-4 pl-4 border-b border-gray-200">
                    <div className="flex gap-4 items-center">
                        <FaEnvelope className="text-primary" />
                        <span className="text-primary">{websiteDetails.email}</span>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={websiteDetails.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="text-gray-500 hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={websiteDetails.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="text-gray-500 hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={websiteDetails.scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Google Scholar"
                        >
                            <FaGraduationCap className="text-gray-500 hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={websiteDetails.researchID}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="ResearchGate"
                        >
                            <FaResearchgate className="text-gray-500 hover:text-primary transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
