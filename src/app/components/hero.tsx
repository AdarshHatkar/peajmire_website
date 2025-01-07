import hero1 from "@assets/images/hero1.jpg";
import hero2 from "@assets/images/hero2.jpg";
import hero3 from "@assets/images/hero3.jpg";
import hero4 from "@assets/images/hero4.png";
import Image from "next/image";
function Hero1() {
    return (
        <div className="w-full h-[600px] relative">
            <Image src={hero1} alt="heroImage" className="h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-start gap-6 z-10 pt-[100px] px-5 md:px-20">
                <h2 className="text-4xl text-start text-white font-semibold">Dr. Raymonf C. Rumpf</h2>
                <p className="text-white text-start font-normal text-lg max-w-[450px]">
                    Professor, Mentor, Inventor, Doctor and director of EMLab
                </p>
                <div className="flex flex-col gap-4 items-start">
                    <button className="rounded-full bg-green-600 text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-green-500 hover:border-green-500 border-2 border-transparent">
                        Contact
                    </button>
                    <button className="rounded-full bg-transparent border-2 border-white text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-black ">
                        About Dr. Rumpf
                    </button>
                </div>
            </div>
        </div>
    );
}

function Hero2() {
    return (
        <div className="w-full h-[600px] relative">
            <Image src={hero2} alt="heroImage" className="h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-start gap-6 z-10 pt-[100px] px-5 md:px-20">
                <h2 className="text-4xl text-start text-white font-semibold">Learn From The Best</h2>
                <p className="text-white text-start font-normal text-lg max-w-[450px]">
                    Gain knowledge and skills from industry leaders and educators dedicated to your success.
                </p>
                <div className="flex flex-col gap-4 items-start">
                    <button className="rounded-full bg-green-600 text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-green-500 hover:border-green-500 border-2 border-transparent">
                        View Course Catalog
                    </button>
                    <button className="rounded-full bg-transparent border-2 border-white text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-black ">
                        Visit EMPossible
                    </button>
                </div>
            </div>
        </div>
    );
}

function Hero3() {
    return (
        <div className="w-full h-[600px] relative">
            <Image src={hero3} alt="heroImage" className="h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-start gap-6 z-10 pt-[100px] px-5 md:px-20">
                <h2 className="text-4xl text-start text-white font-semibold">EMLab</h2>
                <p className="text-white text-start font-normal text-lg max-w-[450px]">
                    Research center focused on developing the new tech and innovations every time they get chance
                </p>
                <div className="flex flex-col gap-4 items-start">
                    <button className="rounded-full bg-green-600 text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-green-500 hover:border-green-500 border-2 border-transparent">
                        Contact
                    </button>
                    <button className="rounded-full bg-transparent border-2 border-white text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-black ">
                        About Dr. Rumpf
                    </button>
                </div>
            </div>
        </div>
    );
}

function Hero4() {
    return (
        <div className="w-full h-[600px] relative">
            <Image src={hero4} alt="heroImage" className="h-full w-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-start gap-6 z-10 pt-[100px] px-5 md:px-20">
                <h2 className="text-4xl text-start text-white font-semibold">New Book by EMProfessor</h2>
                <p className="text-white text-start font-normal text-lg max-w-[450px]">
                    Discover groundbreaking insights and cutting-edge knowledge from EMProfessor's latest publication.
                </p>
                <button className="rounded-full bg-green-600 text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-green-500 hover:border-green-500 border-2 border-transparent">
                    Book Website
                </button>
            </div>
        </div>
    );
}

export { Hero1, Hero2, Hero3, Hero4 };
