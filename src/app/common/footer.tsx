"use client";

import { FaEnvelope, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { websiteDetails } from "../constants";

export default function Footer() {
    return (
        <div className="w-full bg-[#8F9193] px-4 py-8 border-t-2 border-white">
            <div className="flex flex-col lg:flex-row justify-between gap-4 py-6 xl:w-[1200px] xl:mx-auto">
                <div className="">
                    <h2 className="text-md font-semibold text-black">Sitemap</h2>
                    <ul className="flex flex-col gap-4 text-gray-700 text-sm pt-3">
                        <li className="hover:text-white cursor-pointer">Courses Offering</li>
                        <li className="hover:text-white cursor-pointer">Research</li>
                        <li className="hover:text-white cursor-pointer">Publications</li>
                        <li className="hover:text-white cursor-pointer">News</li>
                        <li className="hover:text-white cursor-pointer">About {websiteDetails.doctorName}</li>
                    </ul>
                </div>
                <div className="text-start w-[50%] flex flex-col gap-4">
                    <h2 className="text-md font-semibold text-black">Connect With Me</h2>
                    <div className="flex space-x-4">
                        <a href={`mailto:${websiteDetails.email}`}>
                            <FaEnvelope className="text-white/80 hover:text-white transition duration-300" />
                        </a>
                        <a href={websiteDetails.linkedIn}>
                            <FaLinkedinIn className="text-white/80 hover:text-white transition duration-300" />
                        </a>
                        <a href={websiteDetails.youtube}>
                            <FaYoutube className="text-white/80 hover:text-white transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-1 w-full border-white my-4 xl:w-[1200px] xl:mx-auto"></div>
            <h2 className="text-gray-700 text-sm pb-6 my-4 xl:w-[1200px] xl:mx-auto">
                Copyright © 2024 Raymond C. Rumpf. All rights reserved. Return to top
            </h2>
        </div>
    );
}
