"use client";

import Image from "next/image";
import Slider from "react-slick";
import { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import primexopLogo from "@assets/images/primexopLogo.png";
import { IoIosArrowBack } from "react-icons/io";
import { Hero1, Hero2, Hero3, Hero4 } from "./components/Hero";

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
            <div className="w-full">
                <Slider {...settings}>
                    <Hero1 />
                    <Hero2 />

                    <Hero3 />
                    <Hero4 />
                </Slider>
                <h1>Home Page</h1>
                <p>Home Page Content</p>
                <div className="flex flex-col items-center justify-center">
                    <Image src={primexopLogo} alt="primexopLogo" width={100} height={100} />
                </div>
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

