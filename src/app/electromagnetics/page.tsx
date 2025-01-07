import hybrid3dPrintingBanner from "@assets/images/hybrid3dPrintingBanner.jpg";
import electromagnetics1 from "@assets/images/electromagnetics1.png";
import electromagnetics2 from "@assets/images/electromagnetics2.png";
import electromagnetics3 from "@assets/images/electromagnetics3.jpg";
import electromagnetics4 from "@assets/images/electromagnetics4.jpg";
import electromagnetics5 from "@assets/images/electromagnetics5.jpg";
import Link from "next/link";
import Figure from "../common/figure";
import WorkWithUs from "../common/workWithUs";

const Printing3DPage = () => {
    return (
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={hybrid3dPrintingBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">
                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">Electromagnetics</h1>
                </div>
            </div>

            <div className="relative md:top-[-45px] z-30 max-w-[768px] w-[88%] mx-auto ">
                <main className=" bg-white  mx-auto md:p-14 py-14">

                    <p className="text-gray-600 p-[10px]  text-[16px] md:text-[18px] mb-6">
                        At its core, the EMLab is an electromagnetics research group that focuses on revolutionary electromagnetic technologies that are enabled by 3D printing.  Our research explores innovative ways to fully exploit all of the new degrees of freedom offered by 3D printing and the third dimension. New freedoms include geometrically complex structures, three-dimensional structures, anisotropy, spatially-variant lattices, and more. Research also includes simulation, design, and manufacturing technologies that allow all of these freedoms to be fully exploited. The EMLab has delivered an impressive array of breakthroughs, world records, and first-ever achievements in electromagnetics.
                    </p>


                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for Electromagnetics:</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='https://empossible.net/emp3302/'>
                                Electromagnetic Field Theory
                            </Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='https://empossible.net/emp4301_5302/'>
                                Microwave Engineering
                            </Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='https://empossible.net/emp4305_5303/'>
                                Antenna Engineering
                            </Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='https://empossible.net/academics/emp6303/'>
                                21st Century Electromagnetics
                            </Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://dx.doi.org/10.1016/bs.ssp.2015.02.002'>
                                Engineering the Dispersion and Anisotropy of Periodic Electromagnetic Structures
                            </Link>
                        </li>
                    </ul>

                    <Figure
                        title="Three-Dimensional Antennas"
                        medias={[electromagnetics1]}
                        description={<>
                            The new degrees of freedom offered by 3D printing are being explored to develop new types of antennas that operate closer to the fundamental limits than anything previous.  Antenna research includes three-dimensional structures, antennas designed via optimizations and/or machine learning, antennas that make more efficient use of space, curved and conformal array antennas, electrically small antennas, all-dielectric antennas, and more.
                        </>}

                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for Three-Dimensional Antennas</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='http://www.jpier.org/PIERC/pier.php?paper=16020602'>
                                Ultra-Thin 3D Printed All-Dielectric Antenna
                            </Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://www.jpier.org/PIERC/pier.php?paper=16020602'>
                                Effects of Extreme Surface Roughness on 3D Printed Horn Antenna
                            </Link>
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />


                    <Figure
                        title="Conformal Electromagnetic Arrays"
                        medias={[electromagnetics2, electromagnetics3]}
                        description={<>
                            Researchers in the EMLab have adapted their spatially-variant lattice algorithm to generate periodic structures over doubly-curved surfaces that preserve the size, shape, and spacing of the elements.  This maintains the electromagnetic properties allowing planar periodic structures to be formed into any type of curved surface. Structures may include array antennas, frequency selective surfaces, metamaterials, metasurfaces, guided-mode resonance filters, and diffraction gratings.
                        </>}

                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Resources for Conformal Electromagnetic Arrays</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='http://rsta.royalsocietypublishing.org/cgi/content/abstract/rsta.2014.0359?ijkey=zXn5l8KyjW7q52j&keytype=ref'>
                                Spatially-Variant Periodic Structures in Electromagnetics
                            </Link>
                        </li>
                        <li className="text-gray-600">
                            Conformal Frequency Selective Surfaces for Arbitrary Curvature (pending review)
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    <Figure
                        title="High Power Microwave Frequency Selective Surfaces"
                        medias={[electromagnetics4, electromagnetics5]}
                        description={<>
                            The EMLab demonstrated the world’s highest power microwave frequency selective surface, operating at over 2.0 gigawatts!  The technology was based on guided-mode resonance in order to provide a strong filter response without using metals. A primary challenge the EMLab solved was to develop designs that only required a few periods instead of hundreds. At the same time, the EMLab developed all-dielectric frequency selective surfaces with record-breaking bandwidth. The all-dielectric design is adaptable to many other high-power applications including stealth, beam shaping, and antenna isolation.
                        </>}

                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for High-Power Microwave FSS</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='http://www.jpier.org/pierb/pier.php?paper=12042404'>
                                All-Dielectric Frequency Selective Surfaces with Few Periods
                            </Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://www.jpier.org/pierc/pier.php?paper=13041209'>
                                Guided-Mode Resonance Filter Compensated to Opedrate on a Curved Surface
                            </Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://dx.doi.org/10.1109/TAP.2014.2320525'>
                                All-Dielectric Frequency Selective Surface for High Power Microwaves
                            </Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://dx.doi.org/10.1109/TAP.2015.2388541'>
                                3D Printed All-Dielectric Frequency Selective Surface with Large Bandwidth and Field-of-View
                            </Link>
                        </li>
                    </ul>

                    <WorkWithUs />

                </main>
            </div>
        </div>
    );
};

export default Printing3DPage;