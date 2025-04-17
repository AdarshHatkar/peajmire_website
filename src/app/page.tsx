"use client";

import Slider from "react-slick";
import Image from "next/image";
import { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowBack } from "react-icons/io";
import { FaGraduationCap, FaQuoteLeft, FaQuoteRight, FaAward } from "react-icons/fa";
import { GiMicroscope } from "react-icons/gi";
import { BsJournalRichtext } from "react-icons/bs";
import { Hero1, Hero2, Hero3, Hero4 } from "./components/hero";
import { websiteDetails } from "./constants";
import man from "@assets/images/manWithDice.jpg";
import news1 from "@assets/images/nai.png";
import news2 from "@assets/images/lithuiana.jpg";
import news3 from "@assets/images/wisdom-image.jpg";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const router = useRouter();
    return (
        <>
            <div className="w-full bg-light-bg">
                <Slider {...settings}>
                    <Hero1 />
                    <Hero2 />
                    <Hero3 />
                    <Hero4 />
                </Slider>

                {/* Profile Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-20 px-4 xl:w-[1200px] xl:mx-auto">
                    <div className="md:w-[50%] flex flex-col gap-6">
                        <h2 className="text-3xl text-start font-bold text-primary">{websiteDetails.doctorName}</h2>
                        <div className="flex flex-row gap-2 items-center">
                            <div className="bg-primary h-1 w-20 rounded-full"></div>
                            <p className="text-secondary font-medium">{websiteDetails.position}</p>
                        </div>
                        <p className="text-start font-normal text-lg text-gray-700">
                            Dr. Prafulla E Ajmire is a Professor of Computer Science at G S Science, Arts and Commerce
                            College, Khamgaon, Dist. Buldhana, Maharashtra, India. His research focuses on Computer
                            Vision, Pattern Recognition, Artificial Intelligence, and Signal Processing. He has made
                            significant contributions to the field through his pioneering work in Handwritten Character
                            Recognition, particularly for Devanagari script.
                        </p>
                        <p className="text-start font-normal text-lg text-gray-700">
                            With over {websiteDetails.citations} citations and an h-index of {websiteDetails.hIndex},
                            his research includes groundbreaking work in areas such as computer vision, IoT security,
                            and quantum computing in cybersecurity.
                        </p>
                        <button
                            onClick={() => router.push("/about")}
                            className="rounded-full bg-white text-primary font-semibold px-6 py-2 transition-all duration-300 hover:bg-primary hover:text-white border-primary border-2 w-fit"
                        >
                            Learn More About Dr. Ajmire
                        </button>
                    </div>
                    <div className="md:w-[45%]">
                        <div className="relative">
                            <div className="absolute -top-5 -left-5 w-20 h-20 bg-primary z-0 rounded-lg"></div>
                            <div className="relative z-10 shadow-lg rounded-lg overflow-hidden">
                                <Image
                                    src={man}
                                    alt={"Dr. Prafulla E Ajmire"}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-secondary z-0 rounded-lg"></div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <section className="bg-primary py-16 text-white">
                    <div className="xl:w-[1200px] xl:mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <FaGraduationCap className="text-5xl mb-4 text-light-accent" />
                                <h3 className="text-4xl font-bold">{websiteDetails.citations}+</h3>
                                <p className="text-lg mt-2">Citations</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <BsJournalRichtext className="text-5xl mb-4 text-light-accent" />
                                <h3 className="text-4xl font-bold">{websiteDetails.publications}</h3>
                                <p className="text-lg mt-2">Publications</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <GiMicroscope className="text-5xl mb-4 text-light-accent" />
                                <h3 className="text-4xl font-bold">{websiteDetails.researchAreas.length}</h3>
                                <p className="text-lg mt-2">Research Areas</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <FaAward className="text-5xl mb-4 text-light-accent" />
                                <h3 className="text-4xl font-bold">{websiteDetails.awards.length}</h3>
                                <p className="text-lg mt-2">Awards</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research Areas */}
                <section className="py-16 bg-white">
                    <div className="xl:w-[1200px] xl:mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-3">Research Expertise</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {websiteDetails.researchAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className="bg-light-bg p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-l-4 hover:border-primary"
                                >
                                    <h3 className="font-semibold text-xl mb-3 text-primary">{area}</h3>
                                    <p className="text-gray-600">
                                        Specialized research and expertise in {area.toLowerCase()} methodologies and
                                        applications.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="py-16 bg-light-bg">
                    <div className="xl:w-[1200px] xl:mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-3">Recognition & Testimonials</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg relative">
                            <FaQuoteLeft className="text-4xl text-gray-200 absolute top-4 left-4" />
                            <div className="text-center px-6 md:px-12 py-4">
                                <p className="text-lg text-gray-700 mb-6">
                                    Dr. Prafulla E Ajmire's pioneering work in Handwritten Character Recognition for
                                    Devanagari script has significantly advanced the field of pattern recognition in
                                    Indic languages. His research methodology and innovative approaches to feature
                                    extraction have influenced many subsequent studies.
                                </p>
                                <div className="flex items-center justify-center">
                                    <div>
                                        <h4 className="font-bold">Dr. Rajiv Dharaskar</h4>
                                        <p className="text-gray-600">Director, IIIT Kottayam</p>
                                    </div>
                                </div>
                            </div>
                            <FaQuoteRight className="text-4xl text-gray-200 absolute bottom-4 right-4" />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-primary via-secondary to-dark-bg text-white">
                    <div className="xl:w-[1200px] xl:mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-16">
                        <div className="md:w-[70%] flex flex-col gap-4">
                            <h2 className="text-3xl font-bold">Computer Science & Pattern Recognition</h2>

                            <p className="text-2xl font-bold mb-6 w-full md:w-[80%]">
                                Looking to expand your knowledge in Computer Science, AI, and Pattern Recognition?
                            </p>
                            <a href="/course-offerings" className="text-lg font-semibold underline hover:no-underline">
                                See what we have to offer
                            </a>
                        </div>
                        <div className="flex-1 my-4">
                            <button
                                onClick={() => router.push("/course-offerings")}
                                className="px-6 py-3 border border-white rounded-full text-lg font-medium hover:bg-white hover:text-primary transition duration-300"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                {/* Latest Research Section */}
                <section className="py-16 bg-white">
                    <div className="xl:w-[1200px] xl:mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-3">Latest Research</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {newsData.map((news) => (
                                <div
                                    key={news.id}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                                    onClick={() => router.push("/research-publications")}
                                >
                                    <div className="h-48 overflow-hidden">
                                        <Image
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="font-bold text-xl mb-3 text-primary hover:text-secondary cursor-pointer">
                                            {news.title}
                                        </h3>
                                        <p className="text-gray-700 text-md flex-grow">{news.description} </p>
                                        <a
                                            href={news.link}
                                            className="mt-4 inline-block text-primary font-semibold hover:underline"
                                        >
                                            Read More →
                                        </a>
                                    </div>
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
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 w-10 h-10 flex justify-center cursor-pointer items-center bg-black bg-opacity-50 p-2 border-2 border-transparent transition-all duration-300 hover:border-primary hover:rounded-full"
            onClick={onClick}
        >
            <IoIosArrowBack className="text-white text-lg font-bold transform rotate-180" />
        </div>
    );
}

function PrevArrow({ onClick }: CustomArrowProps) {
    return (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 w-10 h-10 flex justify-center items-center bg-black bg-opacity-50 text-white p-2 cursor-pointer border-2 border-transparent transition-all duration-300 hover:border-primary hover:rounded-full"
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
        title: "Future of Quantum Computing in Cyber Security",
        description:
            "Dr. Prafulla E Ajmire's highly cited research on quantum computing in cybersecurity explores the potential implications of quantum technology for future security systems and protocols...",
        link: "/research-publications",
    },
    {
        id: 2,
        image: news2,
        title: "Handwritten Character Recognition for Devanagari Script",
        description:
            "Dr. Ajmire's pioneering work on handwritten Marathi character recognition using innovative approaches for feature extraction and classification has received significant recognition...",
        link: "/research-publications",
    },
    {
        id: 3,
        image: news3,
        title: "Machine Learning for IoT Security",
        description:
            "Recent research by Dr. Ajmire investigates machine learning techniques for enhancing security measures at the network layer of Internet of Things (IoT), addressing critical vulnerabilities...",
        link: "/research-publications",
    },
];
