"use client";

import { FaEnvelope, FaLinkedinIn, FaGraduationCap, FaResearchgate } from "react-icons/fa";
import { websiteDetails } from "../constants";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-dark-bg px-4 py-8 text-light-bg">
            <div className="flex flex-col lg:flex-row justify-between gap-8 py-6 xl:w-[1200px] xl:mx-auto">
                <div className="lg:w-1/4">
                    <h2 className="text-lg font-semibold mb-4">Sitemap</h2>
                    <ul className="flex flex-col gap-3 text-gray-300 text-sm">
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link href="/course-offerings">
                                <span>Courses Offering</span>
                            </Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link href="/research">
                                <span>Research Areas</span>
                            </Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link href="/research-publications">
                                <span>Publications</span>
                            </Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link href="/about">
                                <span>About {websiteDetails.doctorName}</span>
                            </Link>
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">
                            <Link href="/contact">
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="lg:w-3/4">
                    <h2 className="text-lg font-semibold mb-4">Connect With Me</h2>
                    <div className="flex space-x-5">
                        <a href={`mailto:${websiteDetails.email}`} aria-label="Email">
                            <FaEnvelope className="text-gray-300 hover:text-white transition-colors text-xl" />
                        </a>
                        <a
                            href={websiteDetails.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="text-gray-300 hover:text-white transition-colors text-xl" />
                        </a>
                        <a
                            href={websiteDetails.scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Google Scholar"
                        >
                            <FaGraduationCap className="text-gray-300 hover:text-white transition-colors text-xl" />
                        </a>
                        <a
                            href={websiteDetails.researchID}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="ResearchGate"
                        >
                            <FaResearchgate className="text-gray-300 hover:text-white transition-colors text-xl" />
                        </a>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-300 text-sm">
                            G S Science, Arts and Commerce College
                            <br />
                            Khamgaon, Buldhana, Maharashtra, India
                        </p>
                        <p className="text-gray-300 text-sm mt-2">
                            <a href={`mailto:${websiteDetails.email}`} className="hover:text-white transition-colors">
                                {websiteDetails.email}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-600 w-full my-4 xl:w-[1200px] xl:mx-auto"></div>
            <h2 className="text-gray-300 text-sm pb-6 my-4 xl:w-[1200px] xl:mx-auto">
                Copyright © {new Date().getFullYear()} Dr. Prafulla E Ajmire. All rights reserved.
            </h2>
        </div>
    );
}
