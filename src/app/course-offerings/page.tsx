"use client";

import React from "react";
import Link from "next/link";

export default function CourseOfferings() {
    return (
        <div className="bg-[#F6F8FA] min-h-screen py-10">
            <div className="max-w-[1200px] mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Course Offerings</h1>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Computer Science Courses</h2>

                    <div className="space-y-6">
                        <CourseItem
                            code="CS301"
                            title="Introduction to Computer Vision"
                            description="This course introduces fundamental concepts in computer vision, including image formation, feature detection, and object recognition. Students will implement basic computer vision algorithms and develop applications that process and analyze visual data."
                            level="Undergraduate"
                        />

                        <CourseItem
                            code="CS405"
                            title="Pattern Recognition and Machine Learning"
                            description="An advanced course covering theoretical foundations and practical implementations of pattern recognition systems. Topics include feature extraction, classification algorithms, clustering methods, and neural networks with applications in handwritten character recognition."
                            level="Graduate"
                        />

                        <CourseItem
                            code="CS480"
                            title="Digital Image Processing"
                            description="Covers techniques for digital manipulation of images, including enhancement, restoration, and compression. Students will develop algorithms for image processing and implement them using modern programming languages and libraries."
                            level="Undergraduate/Graduate"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Advanced Topics</h2>

                    <div className="space-y-6">
                        <CourseItem
                            code="CS610"
                            title="Quantum Computing and Cybersecurity"
                            description="Explores the implications of quantum computing for modern cryptographic systems and discusses approaches for developing quantum-resistant security protocols."
                            level="Graduate"
                        />

                        <CourseItem
                            code="CS625"
                            title="IoT Security and Applications"
                            description="Covers security challenges in Internet of Things (IoT) implementations, network-layer protection, and detection of distributed denial of service attacks in IoT networks."
                            level="Graduate"
                        />

                        <CourseItem
                            code="CS590"
                            title="Blockchain Technology and Applications"
                            description="Introduces blockchain architecture, distributed ledger technologies, and smart contracts. Explores applications in secure data management across various domains including healthcare and personal safety."
                            level="Graduate"
                        />
                    </div>
                </div>

                <div className="mt-8 bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold mb-4">Student Research Opportunities</h2>
                    <p className="text-gray-700 mb-4">
                        Dr. Ajmire regularly mentors undergraduate and graduate students on research projects related to
                        computer vision, pattern recognition, and emerging security technologies. Current research areas
                        include:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Handwritten character recognition for Indic scripts</li>
                        <li>Machine learning algorithms for detecting network intrusions</li>
                        <li>Blockchain applications for secure data management</li>
                        <li>Quantum computing implications for cryptographic systems</li>
                    </ul>

                    <div className="mt-6">
                        <Link href="/contact" className="text-green-600 font-medium hover:text-green-800">
                            Contact Dr. Ajmire to discuss research opportunities →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CourseItem({ code, title, description, level }) {
    return (
        <div className="border-b pb-4">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg text-green-700">{title}</h3>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">{code}</span>
            </div>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-sm text-gray-500">
                <span className="font-semibold">Level:</span> {level}
            </p>
        </div>
    );
}
