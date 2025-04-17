"use client";

import Link from "next/link";

export default function ResearchAreas() {
    return (
        <div className="bg-[#F6F8FA] min-h-screen py-10">
            <div className="max-w-[1200px] mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Research Areas</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <ResearchArea
                        title="Computer Vision and Pattern Recognition"
                        description="Dr. Ajmire's work in computer vision focuses on developing algorithms for recognizing and interpreting visual data, with particular emphasis on pattern recognition techniques for handwritten character recognition in Devanagari script. His research has contributed significantly to OCR technology for Indian languages."
                    />

                    <ResearchArea
                        title="Handwritten Character Recognition"
                        description="Pioneering research in recognizing handwritten Marathi characters and numerals using novel feature extraction techniques and classification algorithms. This work has applications in automated document processing and digitization of handwritten documents."
                    />

                    <ResearchArea
                        title="IoT Security"
                        description="Current research explores security challenges in Internet of Things (IoT) implementations, particularly focusing on detection and prevention of Distributed Denial of Service (DDoS) attacks. This work involves developing and evaluating machine learning algorithms for enhancing security at the network layer."
                    />

                    <ResearchArea
                        title="Quantum Computing in Cybersecurity"
                        description="Exploring the implications of quantum computing technology for future security systems and protocols. This research examines both the challenges posed by quantum computing to traditional cryptographic methods and the potential for quantum approaches to enhance security."
                    />

                    <ResearchArea
                        title="Artificial Intelligence & Machine Learning"
                        description="Applications of AI and machine learning techniques across various domains, with particular focus on classification problems, security systems, and pattern recognition challenges."
                    />

                    <ResearchArea
                        title="Blockchain Technology"
                        description="Research on blockchain applications for secure data management, particularly in healthcare record management, personal safety applications, and other areas requiring secure, distributed ledgers."
                    />
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href="/research-publications"
                        className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
                    >
                        View Research Publications
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ResearchArea({ title, description }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-3">{title}</h2>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}
