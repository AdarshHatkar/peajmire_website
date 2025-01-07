"use client";

import Image from "next/image";
import newsBanner from "@assets/images/news-banner.jpg";
import { newsData } from "./components/data";
import { IoFolderOpenOutline } from "react-icons/io5";

import { useState } from "react";
import Pagination from "./components/pagination";
import { useRouter } from "next/navigation";

export default function NewsPage() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <>
            <div className="w-full bg-[#F6F8FA]">
                <div className="relative">
                    <Image src={newsBanner} alt="news banner" className="w-full h-44 md:h-60 object-cover"></Image>
                    <div className="absolute inset-0 z-10 flex justify-center items-center">
                        <h2 className="text-4xl font-semibold text-white">News</h2>{" "}
                    </div>
                </div>
                <section className="py-12 xl:w-[1200px] xl:mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsData.map((news) => (
                            <div
                                key={news.id}
                                className="bg-white shadow-md rounded-md flex flex-col pb-4"
                                onClick={() => router.push("/world-news")}
                            >
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    className="h-48 w-full object-cover mb-4 rounded-md cursor-pointer"
                                />
                                <h3 className="my-3 text-md ml-8">2023-3-20</h3>
                                <h3 className="font-bold text-sm md:text-xl mb-2 px-6 hover:text-green-600 cursor-pointer">
                                    {news.title}
                                </h3>
                                <p className="text-gray-700 text-sm md:text-lg flex-grow px-6 mt-3">
                                    {news.description}
                                </p>
                                <div className="flex justify-start items-center px-6 my-4 gap-4">
                                    <IoFolderOpenOutline className="text-green-600 text-lg" />
                                    <div className="flex justify-start items-center gap-2 flex-wrap">
                                        {news.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-green-100 text-green-600 cursor-pointer hover:text-blue-600 px-3 py-1 text-sm rounded-full font-medium mt-2"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
}
