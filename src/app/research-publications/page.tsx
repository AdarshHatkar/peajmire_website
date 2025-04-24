"use client";

import Link from "next/link";

export default function ResearchPublications() {
    return (
        <div className="bg-[#F6F8FA] min-h-screen py-10">
            <div className="max-w-[1200px] mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Research Publications</h1>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Most Cited Publications</h2>

                    <div className="space-y-6">
                        <PublicationItem
                            title="Future of quantum computing in cyber security"
                            authors="G.N. Brijwani, P.E. Ajmire, P.V. Thawani"
                            journal="Handbook of research on quantum computing for smart environments"
                            year="2023"
                            pages="267-298"
                            volume=""
                            citations="30"
                            link="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&oe=ASCII&user=FsJjR5sAAAAJ&citation_for_view=FsJjR5sAAAAJ:RGFaLdJalmkC"
                        />

                        <PublicationItem
                            title="Handwritten Marathi character (vowel) recognition"
                            authors="P.E. Ajmire, S.E.W."
                            journal="Advances in Information Mining"
                            year="2010"
                            pages="11-13"
                            volume="2(2)"
                            citations="28"
                            link="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&oe=ASCII&user=FsJjR5sAAAAJ&citation_for_view=FsJjR5sAAAAJ:u5HHmVD_uO8C"
                        />

                        <PublicationItem
                            title="A Survey of Lossless Image Compression Techniques"
                            authors="F.I. Khandwani, P.E. Ajmire"
                            journal="International Journal of Electrical Electronics & Computer Science"
                            year="2018"
                            volume=""
                            pages=""
                            citations="17"
                            link="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&oe=ASCII&user=FsJjR5sAAAAJ&citation_for_view=FsJjR5sAAAAJ:QIV2ME_5wuYC"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Recent Publications</h2>

                    <div className="space-y-6">
                        <PublicationItem
                            title="Revolutionizing Healthcare Record Management: Secure Documentation Storage and Access through Advanced Blockchain Solutions"
                            authors="G.N. Brijwani, P.E. Ajmire, M.A.M. Junaid, S.A. Charasia, D. Bhende"
                            journal="arXiv preprint arXiv:2503.00742"
                            year="2025"
                            volume=""
                            pages=""
                            citations=""
                            link="#"
                        />

                        <PublicationItem
                            title="The Machine Learning Algorithms for DDoS Attack Detection on IoT Network Layer"
                            authors="P.E. Ajmire, M.A.M. Junaid, S. Chaurasia"
                            journal="International Journal of Emerging Global Innovations in Science, Engineering"
                            year="2024"
                            volume=""
                            pages=""
                            citations=""
                            link="#"
                        />

                        <PublicationItem
                            title="Machine Learning - Taxonomy, Challenges, and Future Research Directions for Authentication and Authorization in the Internet of Things"
                            authors="Ms. Varkha K. Jewani, P.E. Ajmire"
                            journal="International Journal of Research Culture Society"
                            year="2024"
                            volume="8(11)"
                            pages="1-7"
                            citations=""
                            link="#"
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <Link
                        href="https://scholar.google.co.in/citations?user=FsJjR5sAAAAJ&hl=en"
                        className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
                    >
                        View All Publications on Google Scholar
                    </Link>
                </div>
            </div>
        </div>
    );
}

interface PublicationItemProps {
    title: string;
    authors: string;
    journal: string;
    year: string;
    volume: string;
    pages: string;
    citations: string;
    link: string;
}

function PublicationItem({ title, authors, journal, year, volume, pages, citations, link }: PublicationItemProps) {
    return (
        <div className="border-b pb-4">
            <h3 className="font-medium text-lg text-primary hover:text-secondary">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h3>
            <p className="text-gray-700">{authors}</p>
            <p className="text-gray-600 text-sm">
                {journal}, {volume && `${volume}, `}
                {pages && `${pages}, `}
                {year}
            </p>
            {citations && (
                <p className="text-gray-500 text-sm mt-1">
                    <span className="font-semibold">Citations: {citations}</span>
                </p>
            )}
        </div>
    );
}
