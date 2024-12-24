"use client";

import Slider from "react-slick";
import Image from "next/image";
import { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emLabHeader from "@assets/images/EMLab-Header.jpg";
import { IoIosArrowBack } from "react-icons/io";

import research1 from "@assets/images/research1.jpg";
import research2 from "@assets/images/research2.jpg";
import research3 from "@assets/images/research3.jpg";
import research4 from "@assets/images/research4.jpg";
import research5 from "@assets/images/research5.jpg";
import research6 from "@assets/images/research6.jpg";
import research7 from "@assets/images/research7.jpg";
import emLogo from "@assets/images/emLabLogo.png";

import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import { items, teamMembers } from "./data";

export default function ResearchPage() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const researchImages = [research1, research2, research3, research4, research5, research6, research7];
    return (
        <>
            <div className="bg-[#E0E3E5]">
                <div className="w-full h-[400px] relative">
                    <Image src={emLabHeader} alt="emLab Header" className="h-full w-full object-cover brightness-85" />
                    <div className="absolute inset-0 bg-gray-600 bg-opacity-40 flex flex-col justify-center items-center gap-6 z-10 pt-[100px] px-5 md:px-20">
                        <h2 className="text-4xl lg:text-6xl text-center text-white font-semibold">EMLab</h2>
                        <p className="text-white text-center font-normal text-md">
                            Designs, manufactures and demonstrates revolutionary new concepts in electromagnetics,
                            photonics, and hybrid 3D printing
                        </p>
                    </div>
                </div>
                <div className="bg-white xl:w-[1200px] xl:mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 py-[80px] px-4 border-b-1 border-green-700">
                        <div className="px-3">
                            <Slider {...settings}>
                                {researchImages.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt={"research"}
                                        className="w-full h-[450px] md:h-[600px] object-cover"
                                    />
                                ))}
                            </Slider>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-2 justify-start items-center">
                                <Image src={emLogo} alt={"emLab Logo"} className="w-[120px] h-auto object-contain" />
                                <h2 className="text-4xl font-bold">Mission Statement</h2>
                            </div>

                            <p className="text-start font-normal text-lg">
                                The EMLab was founded to develop revolutionary technologies in electronics,
                                electromagnetics, photonics, and digital manufacturing. We are actively developing some
                                of the most ambitious and disruptive technologies happening today. We were the first to
                                automate hybrid direct-write 3D printing, giving us the unique capability to make
                                complicated multi-material parts composed of metals, plastics, and other materials. We
                                are using this to explore 3D and conformal circuits, new antennas, metamaterials,
                                metasurfaces, frequency selective surfaces, photonic crystals and more. We have
                                designed, manufactured, and tested devices from radio frequencies up to optical
                                frequencies. Our research interests also include numerical algorithms, spatially variant
                                lattices, device simulations, optimizations, and more.
                            </p>
                        </div>
                    </div>
                    <h2 className="text-3xl text-center text-cyan-950 font-semibold my-10">Our Research Areas</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 px-6 py-10 border-b-2 border-green-600">
                        {items.map((item, index) => (
                            <div key={index} className="w-full h-[200px] relative group cursor-pointer">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    className="h-full w-full object-cover brightness-85"
                                />
                                <div className="absolute inset-0 bg-black p-4 opacity-0 scale-y-[1.3] group-hover:opacity-100 bg-opacity-60 flex justify-center items-center z-10 ">
                                    <h2 className="text-2xl text-center text-white font-semibold">{item.name}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="py-10 border-b-2 border-green-600 mx-6">
                        <h2 className="text-xl md:text-3xl text-center text-green-700 underline decoration-green-600 font-semibold my-10">
                            EMLab Capabilities
                        </h2>
                        <div className="flex flex-col gap-6 my-5">
                            {emlabParas.map((para, index) => (
                                <p key={index} className="text-start font-normal text-base md:text-lg">
                                    {para}
                                </p>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <button className="text-sm md:text-lg text-center rounded-full bg-green-600 text-white px-4 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-green-500 hover:border-green-500 border-2 border-transparent">
                                View Full List of EMLab equipment and capabilities
                            </button>
                        </div>
                    </div>
                    <div className="py-10 border-b-2 border-green-600 mx-6">
                        <h2 className="text-3xl text-center text-cyan-950 font-semibold my-10">The EMLab Team</h2>
                        <div className="lg:px-6 py-10">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
                                {teamMembers.map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative w-full overflow-visible shadow-zinc-500 border-t-4 border-t-green-600 border-1 border-gray-300"
                                    >
                                        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                                            <Image
                                                src={item.imageUrl}
                                                alt="Roundish Image"
                                                className="h-24 w-24 sm:w-32 sm:h-32 object-cover rounded-3xl border-4 border-white shadow-lg"
                                            />
                                        </div>
                                        <div className="mt-14 sm:mt-24 mb-8 w-full flex flex-col gap-3 items-center px-2">
                                            <h2 className="text-base">{item.name}</h2>
                                            <h2 className="text-base text-gray-700">{item.post}</h2>
                                            <p key={index} className="text-start font-normal text-base md:text-lg">
                                                {item.description}
                                            </p>
                                            <div className="flex justify-center items-center gap-2">
                                                {item.socials.map((handle, index) => (
                                                    <div
                                                        key={index}
                                                        className="p-1 bg-gray-100 hover:bg-gray-200 border rounded-lg flex flex-col items-center justify-center text-center shadow-sm"
                                                    >
                                                        {handle.type === "Email" && (
                                                            <a
                                                                href={`mailto:${handle.URL}`}
                                                                className="text-2xl text-gray-600 hover:text-gray-800"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FaEnvelope className="text-sm" />
                                                            </a>
                                                        )}
                                                        {handle.type === "LinkedIn" && (
                                                            <a
                                                                href={handle.URL}
                                                                className="text-2xl text-blue-600 hover:text-blue-800"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FaLinkedin className="text-sm" />
                                                            </a>
                                                        )}
                                                        {handle.type === "Twitter" && (
                                                            <a
                                                                href={handle.URL}
                                                                className="text-2xl text-blue-400 hover:text-blue-600"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FaTwitter className="text-sm" />
                                                            </a>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[300px] my-4 bg-[#0D3556] flex flex-col gap-3 justify-center items-center">
                        <h2 className="text-xl md:text-4xl text-center text-white font-semibold">
                            Ready to Work with Us?
                        </h2>
                        <p className="text-white text-center font-normal text-md">
                            Get in touch and let’s see how we can work together.
                        </p>
                        <button className="text-sm md:text-lg text-center rounded-full bg-green-600 text-white px-4 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-green-500 hover:border-green-500 border-2 border-transparent">
                            Contact US
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

function NextArrow({ onClick }: CustomArrowProps) {
    return (
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50 cursor-pointer" onClick={onClick}>
            <IoIosArrowBack className="text-white text-lg font-bold transform rotate-180" />
        </div>
    );
}

function PrevArrow({ onClick }: CustomArrowProps) {
    return (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-50 text-white cursor-pointer"
            onClick={onClick}
        >
            <IoIosArrowBack className="text-white text-lg font-bold" />
        </div>
    );
}

const emlabParas = [
    "The EMLab is fully equipped to design, manufacture, and test paradigm-changing electrical and electromagnetic devices.  Our capabilities begin with a world-class suite of design, optimization, and simulation tools that are being used to make new discoveries and breakthroughs across the frequency spectrum.  Our specialized tools include simulation methods specifically tailored for dielectric devices, a custom 3D circuit layout, and routing tool, and a custom slicer software capable of processing CAD files for hybrid printing, conformal printing, off-axis printing, and printing of functionally-graded materials. ",
    "The EMLab manufacturing capabilities include numerous 3D printers and assembly stations. Two of these printers are advanced hybrid systems that can build parts containing metals, plastics, and many other types of materials. Additional tools and processes are also available including high-power lasers, pick-and-place, milling, and others. The EMLab is the only lab in the world with the combined software and printing hardware to build three-dimensional parts with an arbitrary distribution of metals, plastics, and other materials.  This capability is being used to explore many kinds of 3D circuits and electromagnetic devices. ",
    "The EMLab also maintains a powerful suite of characterization and testing facilities including an anechoic chamber for free space antenna and frequency selective surface measurements, and multiple fixtures for measuring electromagnetic properties of materials including loss tangent, permittivity, permeability, and anisotropy.",
    "To view a complete list of specific EMLab capabilities, including manufacturing and test equipment parameters, please visit the EMLAB Capabilities page.",
    <>
        To view a complete list of specific EMLab capabilities, including manufacturing and test equipment parameters,
        please visit the
        <a href="#" className="text-green-600 underline decoration-green-600">
            EMLAB Capabilities
        </a>
        page.
    </>,
];
