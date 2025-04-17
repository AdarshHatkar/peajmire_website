"use client";
import aboutBanner from "@assets/images/aboutBanner.jpg";
import about1 from "@assets/images/about1.jpg";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
    return (
        <>
            {" "}
            <div className="bg-[#dee1e3] min-h-screen">
                <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                    <img src={aboutBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                    <div className="relative pb-24 z-20">
                        <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">
                            About Dr. Ajmire
                        </h1>
                    </div>
                </div>

                <div className="relative md:top-[-45px] z-30 max-w-[768px] w-[88%] mx-auto ">
                    <main className=" bg-white  mx-auto md:p-14 py-14">
                        <h1 className="mb-4 text-[30px] font-semibold m-auto ">Research</h1>

                        <p className="text-gray-600 p-[10px] text-sm mb-6">
                            Dr. Prafulla E Ajmire is dedicated to advancing the field of Computer Science with a focus
                            on Computer Vision, Pattern Recognition, Artificial Intelligence, and Signal Processing. His
                            research has led to significant contributions in handwritten character recognition,
                            particularly for Devanagari script. With over 160 citations and an h-index of 6, his work
                            has received recognition in both academic and practical applications. His recent research
                            explores emerging technologies such as IoT security, quantum computing in cybersecurity, and
                            blockchain applications.
                        </p>
                        <ul className="list-disc ml-8 grid md:grid-cols-2">
                            <li className="text-gray-600  text-sm">Computer Vision and Pattern Recognition</li>
                            <li className="text-gray-600  text-sm">Handwritten Character Recognition</li>
                            <li className="text-gray-600  text-sm">Artificial Intelligence & Machine Learning</li>
                            <li className="text-gray-600  text-sm">Quantum Computing in Cybersecurity</li>
                            <li className="text-gray-600  text-sm">IoT Security</li>
                            <li className="text-gray-600  text-sm">Blockchain Technology</li>
                            <li className="text-gray-600  text-sm">Image Processing</li>
                            <li className="text-gray-600  text-sm">Signal Processing</li>
                        </ul>
                        <hr className="h-[3px] my-4 bg-green-600 w-[82%] mx-auto" />

                        <h1 className="mb-4 text-[30px] font-semibold m-auto ">Teaching</h1>

                        <p className="text-gray-600 p-[10px] text-sm mb-6">
                            Dr. Ajmire is committed to providing quality education and mentorship to students at G S
                            Science, Arts and Commerce College. Having joined the college on December 1, 1988, he has
                            over three decades of teaching experience, helping shape the careers of numerous students in
                            the field of Computer Science.
                        </p>
                        <ul className="list-disc ml-8 ">
                            <li className="text-gray-600  text-sm">
                                <span className="font-semibold">Student Engagement</span>– Dr. Ajmire believes in
                                creating an interactive learning environment that encourages critical thinking and
                                practical application of concepts. He regularly organizes student activities and tours
                                to enhance their learning experience beyond the classroom.
                            </li>
                            <li className="text-gray-600  text-sm">
                                <span className="font-semibold">Research Guidance</span>– In addition to teaching, Dr.
                                Ajmire actively guides research scholars in their academic pursuits, contributing to the
                                advancement of knowledge in various domains of Computer Science and related fields.
                            </li>
                            <li className="text-gray-600  text-sm">
                                <span className="font-semibold">Problem-Solving Approach</span>– Known for his
                                problem-solving skills, Dr. Ajmire emphasizes practical application and real-world
                                relevance in his teaching methodology, preparing students to tackle challenges in their
                                professional careers.
                            </li>
                        </ul>
                        <hr className="h-[3px] my-4 bg-green-600 w-[82%] mx-auto" />

                        <h1 className="mb-4 text-[30px] font-semibold m-auto ">Biography</h1>

                        <div className="flex sm:flex-row flex-col-reverse">
                            <p className="text-gray-600 p-[10px] text-sm mb-6">
                                Dr. Prafulla E Ajmire is a Professor of Computer Science at
                                <Link href="https://gsck.ac.in/" className="border-b-green-600 border-b-2">
                                    &nbsp;G S Science, Arts and Commerce College, Khamgaon&nbsp;
                                </Link>
                                in Buldhana district, Maharashtra, India. He completed his early education in various
                                villages as his father was a state government officer. After completing his graduation
                                from Amravati and postgraduate studies from Nagpur, he joined G S College on December 1,
                                1988, where he has been serving for over three decades. Dr. Ajmire has established
                                himself as a leading researcher in Computer Vision and Pattern Recognition, with
                                particular emphasis on Handwritten Character Recognition for Devanagari script. His
                                pioneering work in this area has been cited widely in academic literature, contributing
                                significantly to the field.
                            </p>
                            <img src={about1.src} alt="Dr. Prafulla E Ajmire" className="h-[402px] w-[326px] mx-auto" />
                        </div>

                        <p className="text-gray-600 p-[10px] text-sm mb-6">
                            Dr. Ajmire holds a Ph.D. in Computer Science and Engineering, an M.Phil., and an M.S. in
                            Software Systems from
                            <Link href="https://www.bits-pilani.ac.in/" className="border-b-green-600 border-b-2">
                                &nbsp;BITS, Pilani&nbsp;
                            </Link>
                            , along with a PGDCSc and M.Sc. His academic credentials and extensive research experience
                            have established him as an authority in his field. In recent years, Dr. Ajmire has expanded
                            his research interests to include emerging technologies such as IoT Security, Blockchain
                            Technology, and Quantum Computing in Cybersecurity. His publication "Future of quantum
                            computing in cyber security" has received significant attention with over 30 citations,
                            demonstrating the relevance and impact of his work. Dr. Ajmire is actively involved in
                            teaching, research guidance, and academic administration. He is known for his
                            problem-solving approach and his interest in organizing educational tours for students.
                            Outside his academic pursuits, he enjoys traveling with family and friends, exploring
                            various parts of India. With over 160 citations and an h-index of 6, Dr. Ajmire continues to
                            contribute to the advancement of knowledge in Computer Science and related disciplines
                            through his research, teaching, and mentorship of the next generation of computer
                            scientists.
                        </p>
                        <hr className="h-[3px] my-4 bg-green-600 w-[82%] mx-auto" />

                        <h1 className="mb-4 text-[30px] font-semibold m-auto ">Achievements</h1>
                        <ul className="list-disc ml-8 grid md:grid-cols-2">
                            <li className="text-gray-600  text-sm">
                                <Link
                                    href="https://scholar.google.co.in/citations?user=FsJjR5sAAAAJ&hl=en"
                                    className="text-green-600 underline"
                                >
                                    Over 160 Citations in Google Scholar
                                </Link>
                            </li>
                            <li className="text-gray-600  text-sm">
                                <Link
                                    href="https://scholar.google.co.in/citations?user=FsJjR5sAAAAJ&hl=en"
                                    className="text-green-600 underline"
                                >
                                    h-index of 6 and i10-index of 4
                                </Link>
                            </li>
                            <li className="text-gray-600  text-sm">
                                30+ Citations for "Future of quantum computing in cyber security"
                            </li>
                            <li className="text-gray-600  text-sm">
                                <Link href="https://researchid.co/peajmire" className="text-green-600 underline">
                                    Recognized Researcher on ResearchID
                                </Link>
                            </li>
                            <li className="text-gray-600  text-sm">Extensive Publications in International Journals</li>
                            <li className="text-gray-600  text-sm">
                                <Link href="https://gsck.ac.in/" className="text-green-600 underline">
                                    Professor at G S Science, Arts and Commerce College
                                </Link>
                            </li>
                            <li className="text-gray-600  text-sm">
                                Pioneering Work in Handwritten Devanagari Character Recognition
                            </li>
                            <li className="text-gray-600  text-sm">
                                <Link
                                    href="https://scholar.google.co.in/citations?user=FsJjR5sAAAAJ&hl=en"
                                    className="text-green-600 underline"
                                >
                                    Significant Contributions to Pattern Recognition
                                </Link>
                            </li>
                            <li className="text-gray-600  text-sm">
                                <Link href="https://gsck.ac.in/" className="text-green-600 underline">
                                    Over 30 Years of Teaching Experience
                                </Link>
                            </li>
                        </ul>

                        <div className="my-4 flex md:justify-around justify-center items-center md:flex-row flex-col gap-4">
                            <Link
                                href="#"
                                className="w-fit text-[20px] leading-[20px] font-normal bg-green-600 text-white px-4 py-2 rounded-full hover:text-green-700 hover:bg-white hover:border-1 hover:border-green-600 transition"
                            >
                                Download CV
                            </Link>
                            <Link
                                href="/course-offerings"
                                className="w-fit text-[20px] leading-[20px] font-normal bg-green-600 text-white px-4 py-2 rounded-full hover:text-green-700 hover:bg-white hover:border-1 hover:border-green-600 transition"
                            >
                                View Course Offerings
                            </Link>
                            <Link
                                href="/research-publications"
                                className="w-fit text-[20px] leading-[20px] font-normal bg-green-600 text-white px-4 py-2 rounded-full hover:text-green-700 hover:bg-white hover:border-1 hover:border-green-600 transition"
                            >
                                Publications
                            </Link>
                        </div>

                        <div className="flex mb-4 justify-center gap-4">
                            <Link
                                href="https://www.facebook.com/"
                                className="bg-green-100 hover:bg-green-600 hover:text-white text-green-600 p-2 rounded-full"
                            >
                                <FaFacebook size={22} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/prafulla-ajmire"
                                className="bg-green-100 hover:bg-green-600 hover:text-white text-green-600 p-2 rounded-full"
                            >
                                <FaLinkedin size={22} />
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
