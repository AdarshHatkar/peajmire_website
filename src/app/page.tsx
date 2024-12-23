"use client";

import Slider from "react-slick";
import Image from "next/image";
import { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowBack } from "react-icons/io";
import { Hero1, Hero2, Hero3, Hero4 } from "./components/hero";
import emPosssible from "@assets/images/emPossible.png";
import man from "@assets/images/manWithDice.jpg";
import news1 from "@assets/images/nai.png";
import news2 from "@assets/images/lithuiana.jpg";
import news3 from "@assets/images/wisdom-image.jpg";

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="w-full bg-[#F6F8FA]">
                <Slider {...settings}>
                    <Hero1 />
                    <Hero2 />

                    <Hero3 />
                    <Hero4 />
                </Slider>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-[80px] px-4 xl:w-[1200px] xl:mx-auto ">
                    <div className="md:w-[50%] flex flex-col gap-5">
                        <h2 className="text-3xl text-start font-semibold">Dr. Raymond C. Rumpf</h2>
                        <p className="text-start font-normal text-lg">
                            Dr. Rumpf is a pioneer and leader in electromagnetics, photonics, and 3D printing. In 2010,
                            he founded the EMLab with a mission to develop revolutionary technologies and challenge
                            conventional thinking. Since that time, the EMLab has delivered an array of significant
                            discoveries, breakthroughs, and first-ever achievements. He and his team discovered new ways
                            to manipulate fields and waves and developed algorithms to create seemingly impossible
                            geometries that are unlocking new physical mechanisms in electromagnetics and dynamic
                            response of materials. Achievements include the world’s first 3D volumetric circuit
                            manufactured via automated hybrid 3D printing, world’s tightest bend of an unguided optical
                            beam using spatially-variant photonic crystals, world’s highest power frequency selective
                            surface, world’s most broadband all-dielectric filter, and the world’s thinnest
                            all-dielectric antenna. Many other exciting and disruptive technologies are currently under
                            development in the areas of hybrid 3D printing, electromagnetics, photonics, and circuits.
                        </p>
                        <button className="rounded-full bg-white text-green-600 font-semibold px-6 py-2 transition-all duration-300 hover:bg-green-600 hover:text-white border-green-500 border-2">
                            Learn More About Dr. Rumpf
                        </button>
                    </div>
                    <div className="md:w-[50%]">
                        <Image src={man} alt={"man with dice"} className="w-full h-auto object-contain" />
                    </div>
                </div>

                <section className="bg-gradient-to-r from-green-500 via-green-600 to-[#0B4354] text-white">
                    <div className="xl:w-[1200px] xl:mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-16">
                        <div className="md:w-[70%] flex flex-col gap-4">
                            <Image src={emPosssible} alt={"emPosssible"} className="w-[350px] h-auto object-cover" />

                            <p className="text-2xl font-bold mb-6 w-full md:w-[80%]">
                                Looking to expand your knowledge and skills in computation and electromagnetics?
                            </p>
                            <a href="#" className="text-lg font-semibold underline hover:no-underline">
                                See what we have to offer
                            </a>
                        </div>
                        <div className="flex-1 my-4">
                            <button className="px-6 py-3 border border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-12 xl:w-[1200px] xl:mx-auto">
                    <div className="container mx-auto px-1 lg:px-6">
                        <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {newsData.map((news) => (
                                <div key={news.id} className="bg-white shadow-md rounded-md flex flex-col pb-4">
                                    <Image
                                        src={news.image}
                                        alt={news.title}
                                        className="h-48 w-full object-cover mb-4 rounded-md hover:cursor-pointer"
                                    />
                                    <h3 className="font-bold text-sm md:text-lg mb-2 px-6 hover:text-green-600 cursor-pointer">
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm md:text-md flex-grow px-6">
                                        {news.description}{" "}
                                        <span>
                                            <a
                                                href={news.link}
                                                className="underline font-semibold mt-4 decoration-green-500"
                                            >
                                                Read More...
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

function NextArrow({ onClick }: CustomArrowProps) {
    return (
        <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50 w-10 h-10 flex justify-center cursor-pointer items-center bg-black bg-opacity-50 p-2 border-2 border-transparent transition-all duration-300 hover:border-green-500 hover:rounded-full"
            onClick={onClick}
        >
            <IoIosArrowBack className="text-white text-lg font-bold transform rotate-180" />
        </div>
    );
}

function PrevArrow({ onClick }: CustomArrowProps) {
    return (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-50 w-10 h-10 flex justify-center items-center bg-black bg-opacity-50 text-white p-2 cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-green-500 hover:rounded-full"
            onClick={onClick}
        >
            <IoIosArrowBack className="text-white text-lg font-bold" />
        </div>
    );
}

const newsData = [
    {
        id: 1,
        image: news1,
        title: "Dr. Rumpf Named Senior Member of the National Academy of Inventors",
        description:
            "Dr. Raymond C. Rumpf, Ph.D., has been named senior member of the National Academy of Inventors (NAI). He is part of the 124 of the foremost emerging ...",
        link: "#",
    },
    {
        id: 2,
        image: news2,
        title: 'Dr. Rumpf speaks at 24th International Conference-School "Advanced Materials and Technologies"',
        description:
            "Dr. Raymond Rumpf travelled to Kaunas University of Technology in Lithuania to attend the 24th International Conference School, themed “Advanced ...",
        link: "#",
    },
    {
        id: 3,
        image: news3,
        title: "Getting started in Numerical Methods",
        description:
            "I am often asked 'What advice do you have for those interested in numerical methods?' The key to computation is visualization. Every step of ...",
        link: "#",
    },
];