"use client";

import Image from "next/image";
import enLabNews from "@assets/images/emLab-news.jpg";
import { IoFolderOpenOutline } from "react-icons/io5";

export default function WorldNews() {
    return (
        <>
            <div className="w-full bg-[#F6F8FA]">
                <div className="relative">
                    <Image src={enLabNews} alt="news banner" className="w-full h-60 object-cover" />
                    <div className="absolute inset-0 z-10 flex justify-center items-center bg-gray-400 bg-opacity-50 px-3">
                        <h2 className="text-2xl lg:text-4xl font-semibold text-white z-20">
                            World News Lists EMLab as Key Player in Global 3D Printed Electronics Market
                        </h2>
                    </div>
                </div>
                <div className="px-4 xl:w-[1000px] xl:mx-auto">
                    <div className="bg-white shadow-lg rounded-md p-14 space-y-6">
                        <p className="text-sm text-gray-500">
                            2021-08-15 by{" "}
                            <a href="#" className="text-green-600 font-semibold hover:underline">
                                Raymond Rumpf
                            </a>
                        </p>

                        <p className="text-gray-700 text-base leading-relaxed">
                            A new market study titled “Discover Global 3D Printed Electronics Market Upcoming Trends,
                            Growth Drivers and Challenges” lists the EM Lab as a key player in the global 3D printed
                            electronics market. The EM Lab has been making very significant contributions to this field
                            and is one of the most ambitious and visionary groups.
                        </p>

                        <div className="text-center">
                            <button className="bg-green-600 rounded-full text-white font-semibold px-6 py-2 hover:bg-green-700">
                                View Press Release
                            </button>
                        </div>

                        <div className="border-t pt-4">
                            <a href="#" className="flex items-center text-green-600 font-semibold hover:underline">
                                <span className="text-gray-500 mr-2">
                                    <IoFolderOpenOutline className="text-green-600 text-lg" />
                                </span>
                                EMLab
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
