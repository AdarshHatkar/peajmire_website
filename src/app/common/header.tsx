import { useState } from "react";
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch, IoClose } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { websiteDetails } from "../constants";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [isCoursesHovered, setIsCoursesHovered] = useState(false);
    const [isResearchHovered, setIsResearchHovered] = useState(false);

    const handleSubMenuToggle = (menu) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };
    const router = useRouter();
    return (
        <div className="w-full">
            <div className="w-full bg-[#F6F8FA] border-b-2">
                <div className="hidden lg:flex justify-between items-center px-2 xl:w-[1200px] xl:mx-auto">
                    <div className="flex items-center space-x-2 px-2 text-sm">
                        <FaEnvelope className="text-gray-500" />
                        <a href={`mailto:${websiteDetails.email}`} className="text-green-600 hover:underline">
                            {websiteDetails.email}
                        </a>
                    </div>
                    <div className="flex space-x-4 my-3 ">
                        <a href={`mailto:${websiteDetails.email}`}>
                            <FaEnvelope className="text-gray-400 hover:text-green-600" />
                        </a>
                        <a href={websiteDetails.facebook}>
                            <FaFacebookF className="text-gray-400 hover:text-green-600" />
                        </a>

                        <a href={websiteDetails.linkedIn}>
                            <FaLinkedinIn className="text-gray-400 hover:text-green-600" />
                        </a>
                        <a href={websiteDetails.youtube}>
                            <FaYoutube className="text-gray-400 hover:text-green-600" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="relative w-full xl:w-[1200px] xl:mx-auto py-2 px-4 bg-white">
                <div className="flex justify-between items-center w-full">
                    <Image
                        src="https://raymondrumpf.com/wp-content/uploads/2021/10/cropped-Logov1-close-crop-e1634752408519.png"
                        alt="headerImage"
                        width={120}
                        height={30}
                        className="hover:cursor-pointer"
                        onClick={() => router.push("/")}
                    />

                    {!showSearch && (
                        <ul className="hidden lg:flex justify-start items-center gap-4 text-black text-md font-semibold">
                            <li
                                className="cursor-pointer hover:text-green-600 group transition-colors duration-500 relative"
                                onMouseEnter={() => setIsCoursesHovered(true)}
                                onMouseLeave={() => setIsCoursesHovered(false)}
                                onClick={() => router.push("/course-offerings")}
                            >
                                Courses Offering
                                {isCoursesHovered && (
                                    <div className="pt-3 right-[0.5px] absolute top-0 z-50">
                                        <div className="mt-4 w-[190px] text-black bg-[#F6F8FA] z-50 border-2">
                                            <ul className="flex flex-col items-start">
                                                <li className="p-2 hover:text-green-600">
                                                    <Link
                                                        href="https://empossible.net/academics/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Academic Materials
                                                    </Link>
                                                </li>
                                                <li className="p-2 hover:text-green-600">
                                                    <Link
                                                        href="https://empossible.thinkific.com/collections"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        EMPossible Courses
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li
                                className="cursor-pointer hover:text-green-600 group transition-colors duration-500 relative"
                                onMouseEnter={() => setIsResearchHovered(true)}
                                onMouseLeave={() => setIsResearchHovered(false)}
                                onClick={() => router.push("/research")}
                            >
                                Research
                                {isResearchHovered && (
                                    <div className="pt-3 right-[0.5px] absolute top-0 z-50">
                                        <div className="mt-4 w-[190px] text-black bg-[#F6F8FA] z-50 border-2">
                                            <ul className="flex flex-col items-start">
                                                {/* Prevent redirect when clicking on the dropdown items */}
                                                <li className="p-2 hover:text-green-600">
                                                    <Link
                                                        href="/research"
                                                        onClick={(e) => e.stopPropagation()} // Prevent parent onClick
                                                    >
                                                        EMLab
                                                    </Link>
                                                </li>
                                                <li className="p-2 hover:text-green-600">
                                                    <Link
                                                        href="/hybrid-3d-printing"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        Hybrid 3D Printing
                                                    </Link>
                                                </li>
                                                <li className="p-2 hover:text-green-600">
                                                    <Link
                                                        href="/spatially-variant-lattices"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        Spatially Variant Lattices
                                                    </Link>
                                                </li>
                                                <li className="p-2 hover:text-green-600">
                                                    <Link href="/photonics" onClick={(e) => e.stopPropagation()}>
                                                        Photonics
                                                    </Link>
                                                </li>
                                                <li className="p-2 hover:text-green-600">
                                                    <Link href="/electromagnetics" onClick={(e) => e.stopPropagation()}>
                                                        Electromagnetics
                                                    </Link>
                                                </li>
                                                <li className="p-2 hover:text-green-600">
                                                    <Link
                                                        href="/computational-electromagnetics"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        Computational Electromagnetics
                                                    </Link>
                                                </li>
                                                <li className="p-2 hover:text-green-600">
                                                    <Link
                                                        href="/emlab-capabilities"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        EMLab Capabilities
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>

                            <li className="cursor-pointer hover:text-green-600 transition-colors duration-500"></li>
                            <li className="cursor-pointer hover:text-green-600 transition-colors duration-500">
                                {" "}
                                <Link href="/news">News</Link>
                            </li>
                            <li className="cursor-pointer hover:text-green-600 transition-colors duration-500">
                                <Link href="/about">About {websiteDetails.doctorName}</Link>
                            </li>
                            <li>
                                <IoSearch className="text-xl cursor-pointer" onClick={() => setShowSearch(true)} />
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
                            <RxCross2 className="text-xl cursor-pointer" onClick={() => setShowSearch(false)} />
                        )}
                    </div>

                    <button
                        className="hidden lg:flex rounded-full bg-green-600 text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-green-500 hover:border-green-500 border-2 border-transparent"
                        onClick={() => router.push("/contact")}
                    >
                        Contact Us
                    </button>

                    {/* for hamburger */}
                    <div className="xl:hidden z-50 hover:border-green rounded-full">
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

            <div
                className={`fixed top-0 right-0 bottom-0 bg-white overflow-y-auto h-full z-40 w-[90%] sm:w-[60%] px-2 pt-[40px] xl:hidden transition-all duration-300 transform ease-in-out ${
                    isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
            >
                <div className="flex flex-col items-start pt-4 pb-6 pl-4 border-b-2">
                    <ul className="flex flex-col text-black text-md pt-3">
                        <li className="py-3">
                            <div className="flex gap-4">
                                <h2 className="w-32">
                                    <Link href="/course-offerings">Courses Offering</Link>{" "}
                                </h2>
                                <span onClick={() => handleSubMenuToggle("courses")}>
                                    <IoMdArrowDropdown />
                                </span>
                            </div>
                            <div
                                className={`transition-all duration-300 ease-in overflow-hidden ${
                                    openSubMenu === "courses" ? "max-h-40" : "max-h-0"
                                }`}
                            >
                                <ul className="mt-3 text-md pl-2">
                                    <li className="py-2">
                                        <Link
                                            href="https://empossible.net/academics/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Academic Materials
                                        </Link>
                                    </li>
                                    <li className="py-2">
                                        <Link
                                            href="https://empossible.thinkific.com/collections"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            EMPossible Courses
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="py-3">
                            <div className="flex gap-4">
                                <h2 className="w-32">
                                    {" "}
                                    <Link href="/research">Research</Link>
                                </h2>

                                <span onClick={() => handleSubMenuToggle("research")}>
                                    <IoMdArrowDropdown />
                                </span>
                            </div>
                            <div
                                className={`transition-all duration-300 ease-in overflow-hidden ${
                                    openSubMenu === "research" ? "max-h-40" : "max-h-0"
                                }`}
                            >
                                <ul className="mt-3 text-md pl-2">
                                    <li className="py-2">
                                        <Link href="/research">
                                            <span>EMLab</span>
                                        </Link>
                                    </li>
                                    <li className="py-2">
                                        <Link href="/hybrid-3d-printing">
                                            <span>Hybrid 3D Printing</span>
                                        </Link>
                                    </li>
                                    <li className="py-2">
                                        <Link href="/spatially-variant-lattices">
                                            <span>Spatially Variant Lattices</span>
                                        </Link>
                                    </li>
                                    <li className="py-2">
                                        <Link href="/photonics">
                                            <span>Photonics</span>
                                        </Link>
                                    </li>
                                    <li className="py-2">
                                        <Link href="/electromagnetics">
                                            <span>Electromagnetics</span>
                                        </Link>
                                    </li>
                                    <li className="py-2">
                                        <Link href="/computational-electromagnetics">
                                            <span>Computational Electromagnetics</span>
                                        </Link>
                                    </li>
                                    <li className="py-2">
                                        <Link href="/emlab-capabilities">
                                            <span>EMLab Capabilities</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="py-3">
                            <Link href="/publications">
                                <span>Publications</span>
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link href="/news">
                                <span>News</span>
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link href="/about">
                                <span>About {websiteDetails.doctorName}</span>
                            </Link>
                        </li>
                    </ul>
                    <Input
                        placeholder="Search this Website"
                        type="text"
                        variant={"bordered"}
                        radius={"full"}
                        className="py-3"
                    />
                </div>
                <div className="mt-5 px-4 lg:hidden">
                    <div className="flex items-center space-x-2 px-2 text-sm">
                        <FaEnvelope className="text-gray-500" />
                        <a href={`mailto:${websiteDetails.email}`} className="text-green-600 hover:underline">
                            {websiteDetails.email}
                        </a>
                    </div>
                    <div className="flex space-x-4 my-3 ">
                        <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded">
                            <a href={`mailto:${websiteDetails.email}`}>
                                {" "}
                                <FaEnvelope className="text-gray-400 hover:text-green-600" />{" "}
                            </a>
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded">
                            <a href={websiteDetails.facebook}>
                                {" "}
                                <FaFacebookF className="text-gray-400 hover:text-green-600" />{" "}
                            </a>
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded">
                            <a href={websiteDetails.linkedIn}>
                                {" "}
                                <FaLinkedinIn className="text-gray-400 hover:text-green-600" />{" "}
                            </a>
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded">
                            <a href={websiteDetails.youtube}>
                                <FaYoutube className="text-gray-400 hover:text-green-600" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
