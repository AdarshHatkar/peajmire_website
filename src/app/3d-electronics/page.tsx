import hybrid3dPrintingBanner from "@assets/images/hybrid3dPrintingBanner.jpg";
import electronics3D1 from "@assets/images/electronics3D1.png";
import electronics3D2 from "@assets/images/electronics3D2.jpg";
import electronics3D3 from "@assets/images/electronics3D3.png";
import electronics3D4 from "@assets/images/electronics3D4.png";
import Link from "next/link";

const Electronics3DPage = () => {
    return (
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={hybrid3dPrintingBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">

                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">3D Printed Electronics</h1>
                </div>
            </div>

            <div className="relative md:top-[-45px] z-30 max-w-[768px] w-[88%] mx-auto ">
                <main className=" bg-white  mx-auto md:p-14 py-14">
                    <p className="text-gray-600 p-[10px]  text-[16px] md:text-[18px] mb-6">
                        Building on the EMLab’s extraordinary capabilities in hybrid 3D printing, the EMLab is a leader and pioneer in 3D printed electronics. Most modern products on the market incorporate electrical functionality.  In order to manufacture these parts via 3D printing, it becomes necessary to learn how to 3D print electronics.  The lab has developed an extensive suite of tools and capabilities for designing and manufacturing parts with electro-mechanical functionality including circuits, sensors and actuators. 3D printing provides a very rapid turn-around time and the ability to manufacture nonplanar, flexible, and 3D volumetric circuits.
                    </p>

                    <figure>
                        <h2 className="text-center text-[30px]  font-semibold mb-4">3D Circuit Layout and Routing Tool</h2>
                        <img src={electronics3D1.src} alt="Image" className="w-full" />
                        <p className="text-gray-600 p-[10px] text-[16px] md:text-[18px] mb-6">

                            A custom tool was developed to design 3D, conformal, and other nontraditional circuits.  The tool imports a netlist and component geometries and allows the user to layout components and route interconnects with complete geometric freedom.  The tool was developed as an add-on to the open-source software
                            <Link href='/'>Blender</Link>
                            and is the only known tool of its kind, giving the EMLab many unique capabilities.
                        </p>
                    </figure>

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for 3D Printed Circuits</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='/'>Design and Hybrid Additive Manufacturing of 3D/Volumetric Electrical Circuits</Link>
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    <figure>
                        <h2 className="text-center text-[30px]  font-semibold mb-4">3D Volumetric Circuits</h2>
                        <img src={electronics3D2.src} alt="Image" className="w-full" />
                        <p className="text-gray-600 p-[10px] text-[16px] md:text-[18px] mb-6">
                            In a 3D volumetric circuit (3DVC), components can be placed at any position xyz and at any angle theta-phi with complete geometric freedom.  Electrical traces can meander throughout all three dimensions following smooth splines.  3D layouts have more geometric freedom to place components more densely to make circuits smaller and lighter.  Shorter trace lengths provide increased bandwidth and higher efficiency.  A 3DVC can exploit physics like dielectric anisotropy more effectively than traditional planar circuits.  Last, a 3DVC can be made into any form factor that integrates more easily into higher-level systems.
                        </p>
                    </figure>

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for 3D Volumetric Circuits</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='/'>Design and Hybrid Additive Manufacturing of 3D/Volumetric Electrical Circuits</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='/'>Automated Hybrid 3D Printing of 3D Meandering Interconnects</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='/'>Broadband Microwave Frequency Characterization of 3-D Printed Materials</Link>
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    <figure>
                        <h2 className="text-center text-[30px]  font-semibold mb-4">
                            Conformal and Flexible Circuits
                        </h2>

                        <div className="flex gap-2">
                            <img src={electronics3D3.src} className="grow w-[49%]" alt="Image" />
                            <img src={electronics3D4.src} className="grow w-[49%]" alt="Image" />
                        </div>
                        <p className="text-gray-600 p-[10px] text-[16px] md:text-[18px] mb-6">
                            Many times, traditional planar circuits must be manufactured onto flexible substrates or printed onto curved surfaces.  The EM Lab has developed software tools and 3D printing processes to manufacture flexible and conformal circuits. These include advanced mapping algorithms to map planar patterns to curved surfaces, process development of flexible 3D printable materials, and slicing and process development for manufacturing conformal circuits and structures.
                        </p>

                    </figure>

                    <div className="bg-[#0d3657] text-white flex flex-col items-center justify-center gap-4 p-6">
                        <h2 className="text-center  text-[30px]  font-semibold ">
                            Want to work with the EMLab?
                        </h2>
                        <p className=" text-[14px] md:text-[18px] text-center">
                            Get in touch and let’s see what we can do together.
                        </p>
                        <button
                            className="mx-auto text-[20px] leading-[20px] font-normal bg-green-600 text-white px-4 py-2 rounded-full hover:text-green-700 hover:bg-white hover:border-1 hover:border-green-600 transition  ">
                            Contact Us
                        </button>

                    </div>

                </main>
            </div>
        </div>
    );
};

export default Electronics3DPage;