import researchBanner from "@assets/images/researchBanner.jpg";


import ResearchCarousel from "../components/researchCarousel";

const App = () => {

    return (
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={researchBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">

                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">Course Offerings</h1>
                </div>
            </div>

            <div className="relative md:top-[-45px] z-30 max-w-[1152px] w-[88%] mx-auto ">
                <main className=" bg-white  mx-auto md:p-14 py-14">
                    <div className="flex  md:gap-6  ">
                        <ResearchCarousel />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;