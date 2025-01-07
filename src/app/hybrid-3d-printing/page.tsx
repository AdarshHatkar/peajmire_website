import hybrid3dPrintingBanner from "@assets/images/hybrid3dPrintingBanner.jpg";
import threeDPrinting1 from "@assets/images/threeDPrinting1.jpg";
import threeDPrinting2 from "@assets/images/threeDPrinting2.jpg";
import Link from "next/link";
import Figure from "../common/figure";
import WorkWithUs from "../common/workWithUs";

const Printing3DPage = () => {
    return (
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={hybrid3dPrintingBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">

                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">Hybrid 3D Printing</h1>
                </div>
            </div>

            <div className="relative md:top-[-45px] z-30 max-w-[768px] w-[88%] mx-auto ">
                <main className=" bg-white  mx-auto md:p-14 py-14">

                    <p className="text-gray-600 p-[10px]  text-[16px] md:text-[18px] mb-6">
                        Hybrid 3D printing is necessary for manufacturing parts composed of very different materials and components.  This is only possible using multiple 3D printing processes and multiple materials at the same time.  Hybrid 3D printing hardware is already capable of producing such parts, but there is a profound lack of software, algorithms, processes, standards, and best practices to make this happen.  The EMLab has been a pioneer and leader in hybrid 3D printing, developing and demonstrating many of the first software tools and demonstrations of automated hybrid 3D printing.
                    </p>
                    <p className="text-gray-600 p-[10px] text-[17px] md:text-[19px] mb-6 w-fit">
                        <Link href='http://raymondrumpf.com/wp-content/uploads/2022/02/EMLab-Hotsheet-Hybrid-Direct-Write-Additive-Manufacturing.pdf' className="border-b-green-600 border-b-2">
                            Hybrid 3D Printing Flyer
                        </Link>
                    </p>

                    <Figure
                        title="Direct-Write Hybrid 3D Printing"
                        medias={["https://raymondrumpf.com/wp-content/uploads/2021/12/HJ-600.mp4"]}
                        description={<>
                            The EMLab has automated direct-write hybrid 3D printing to create the only known capability in the world to manufacture three-dimensional parts with an arbitrary distribution of metals and dielectrics.  This research includes software, materials, and 3D printing processes.  The capability is being used to manufacture 3D circuits, conformal circuits, 3D antennas, metamaterials, metasurfaces, frequency selective surfaces, and more.
                        </>}
                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning resources for Hybrid 3D Printing</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='https://ieeexplore.ieee.org/document/8689070'>Automated Hybrid 3D Printing of 3D Meandering Interconnects</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://www.jpier.org/PIERM/pier.php?paper=18102603'>High-Frequency Filters Manufactured Using Hybrid 3D Printing Method</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://ieeexplore.ieee.org/document/8263403/'>3D Printed Structures by Micro Dispensing Materials Loaded with Dielectric and Magnetic Powders</Link>
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    <Figure
                        title="Advanced Slicer for Modern Digital Manufacturing"
                        medias={[threeDPrinting1, threeDPrinting2]}
                        description={<>
                            Dr. Rumpf is a founder of
                            <Link href='https://ieeexplore.ieee.org/document/8689070' className="border-b-green-600 border-b-2"> Kraetonics LLC </Link>
                            , which has written a modern slicer from the ground up.  The slicer is capable of off-axis printing, conformal printing, hybrid 3D printing, 3D printing of functionally graded materials, and other advanced processes in digital manufacturing. Additionally, the slicer is highly customizable to address new and novel applications.
                            <Link href='http://www.kraetonics.com/' className="border-b-green-600 border-b-2"> Kraetonics LLC</Link>
                            is available for consulting, developing customized slicer functions, and contract research and development in the areas of 3D printing, electromagnetics, and photonics.
                        </>}
                    />

                    <WorkWithUs />

                </main>
            </div>
        </div>
    );
};

export default Printing3DPage;