import courseOffering from "@assets/images/courseOffering.jpg";
import Link from "next/link";

const CourseCard = ({ title, description, buttonLabel, buttonLink }) => {
    return (
        <div className="bg-white flex flex-col items-center md:p-12 p-8 border-3 border-black">
            <h2 className="text-center text-[32px] md:text-[36px] font-semibold mb-4">{title}</h2>
            <p className="text-gray-600 text-[16px] md:text-[18px] mb-6">{description}</p>
            <button
                className="mx-auto text-[20px] leading-[20px] font-normal bg-green-600 text-white px-4 py-2 rounded-full hover:text-green-700 hover:bg-white hover:border-1 hover:border-green-600 transition  "
            >
                {buttonLabel}
            </button>
        </div>
    );
};

const App = () => {
    return (
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={courseOffering.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">

                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">Course Offerings</h1>
                </div>
            </div>
            <div className="relative md:top-[-45px] z-30 max-w-[1152px] w-[88%] mx-auto ">
                <main className="relative bg-white  mx-auto md:p-14 py-14">
                    <div className="p-12 md:flex  bg-[#abb7c2]  ">
                        <CourseCard
                            title="Academic Materials"
                            description={
                                <>
                                    To help my students learn even after they left my classroom, I have made most of my graduate and undergraduate course materials available online. Here you can find materials such as lecture videos, lecture notes, and one-page summaries. These materials are freely available on{" "}
                                    <Link
                                        href="https://www.empossible.net/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-b-2 border-green-500 hover:text-green-600 transition"
                                    >
                                        EMPossible
                                    </Link>
                                    .
                                </>
                            }
                            buttonLabel="View Academic Materials"
                            buttonLink="https://www.empossible.net/"
                        />
                        <CourseCard
                            title="Online Courses"
                            description={
                                <>
                                    When I was a student, I struggled to find resources to develop my skills in electromagnetics and computation. For this reason, I created{" "}
                                    <Link
                                        href="https://www.empossible.net/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-b-2 border-green-500 hover:text-green-600 transition"
                                    >
                                        EMPossible
                                    </Link> &nbsp;
                                    to be the resource that I wish I had when I was a student. I explain topics using simple language and with stunning graphics and visualizations.
                                </>
                            }
                            buttonLabel="Visit EMPossible"
                            buttonLink="https://www.empossible.net/"
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
