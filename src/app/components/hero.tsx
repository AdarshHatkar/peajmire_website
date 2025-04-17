"use client";

import hero1 from "@assets/images/hero1.jpg";
import hero2 from "@assets/images/hero2.jpg";
import hero3 from "@assets/images/hero3.jpg";
import hero4 from "@assets/images/hero4.png";
import Image from "next/image";
import Link from "next/link";
import { websiteDetails } from "../constants";

function Hero1() {
    return (
        <div className="w-full h-[600px] relative">
            <Image src={hero1} alt="Dr. Prafulla E Ajmire" className="h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-start items-start gap-6 z-10 pt-[100px] px-5 md:px-20">
                <h2 className="text-4xl text-start text-white font-semibold">{websiteDetails.doctorName}</h2>
                <p className="text-white text-start font-normal text-lg max-w-[500px]">
                    {websiteDetails.position} at {websiteDetails.institution}, Researcher, and Expert in Pattern
                    Recognition and Computer Vision
                </p>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <Link href="/contact">
                        <button className="rounded-full bg-primary text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-primary hover:border-primary border-2 border-transparent">
                            Contact
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="rounded-full bg-transparent border-2 border-white text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-dark-bg">
                            About Dr. Ajmire
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Hero2() {
    return (
        <div className="w-full h-[600px] relative">
            <Image src={hero2} alt="Learn Computer Science" className="h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-start items-start gap-6 z-10 pt-[100px] px-5 md:px-20">
                <h2 className="text-4xl text-start text-white font-semibold">Learn Computer Science</h2>
                <p className="text-white text-start font-normal text-lg max-w-[500px]">
                    Gain knowledge and skills in AI, Pattern Recognition, and Computer Vision from experienced educators
                    with practical research experience.
                </p>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <Link href="/course-offerings">
                        <button className="rounded-full bg-primary text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-primary hover:border-primary border-2 border-transparent">
                            View Course Catalog
                        </button>
                    </Link>
                    <Link href="/research-publications">
                        <button className="rounded-full bg-transparent border-2 border-white text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-dark-bg">
                            Research Publications
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Hero3() {
    return (
        <div className="w-full h-[600px] relative">
            <Image src={hero3} alt="Computer Science Department" className="h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-start items-start gap-6 z-10 pt-[100px] px-5 md:px-20">
                <h2 className="text-4xl text-start text-white font-semibold">Computer Science Department</h2>
                <p className="text-white text-start font-normal text-lg max-w-[500px]">
                    G S Science, Arts and Commerce College in Khamgaon, Maharashtra - fostering innovation in computer
                    science education and research for over 25 years
                </p>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <Link href="/contact">
                        <button className="rounded-full bg-primary text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-primary hover:border-primary border-2 border-transparent">
                            Contact
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="rounded-full bg-transparent border-2 border-white text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-dark-bg">
                            About Dr. Ajmire
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Hero4() {
    return (
        <div className="w-full h-[600px] relative">
            <Image src={hero4} alt="Research Publications" className="h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-start items-start gap-6 z-10 pt-[100px] px-5 md:px-20">
                <h2 className="text-4xl text-start text-white font-semibold">Research Publications</h2>
                <p className="text-white text-start font-normal text-lg max-w-[500px]">
                    Explore groundbreaking research in Character Recognition, IoT Security, and Quantum Computing in
                    Cybersecurity. Over {websiteDetails.citations} citations and {websiteDetails.publications}{" "}
                    publications in renowned journals.
                </p>
                <Link href="/research-publications">
                    <button className="rounded-full bg-primary text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-primary hover:border-primary border-2 border-transparent">
                        View Publications
                    </button>
                </Link>
            </div>
        </div>
    );
}

export { Hero1, Hero2, Hero3, Hero4 };
