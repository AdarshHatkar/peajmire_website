import hybrid3dPrintingBanner from "@assets/images/hybrid3dPrintingBanner.jpg";
import computational1 from "@assets/images/computational1.jpg";
import computational2 from "@assets/images/computational2.png";
import computational3 from "@assets/images/computational3.jpg";
import computational4 from "@assets/images/computational4.png";
import Link from "next/link";
import Figure from "../components/figure";
import WorkWithUs from "../components/workWithUs";

const Printing3DPage = () => {
    return (
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={hybrid3dPrintingBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">
                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">Computational Electromagnetics</h1>
                </div>
            </div>

            <div className="relative md:top-[-45px] z-30 max-w-[768px] w-[88%] mx-auto ">
                <main className=" bg-white  mx-auto md:p-14 py-14">

                    <p className="text-gray-600 p-[10px]  text-[16px] md:text-[18px] mb-6">
                        The EMLab is one of the strongest research groups in the world for computational analysis of electromagnetic devices.  Capabilities continue to grow in the areas of optimization, GPU and scalable computing, unstructured grids, and hybridization of different methods such as ray tracing and finite-difference time-domain.  Much of what Dr. Rumpf has accomplished has been made available through the courses on
                        <Link className="border-b-2 border-b-green-600" href='https://empossible.net/'>EMPossible</Link>
                        and a
                        <Link className="border-b-2 border-b-green-600" href='https://empossible.net/fdfdbook/'>book</Link>
                        written specifically for the complete beginner to get started in computational electromagnetics.
                    </p>

                    <Link className="border-b-2 border-b-green-600 mb-6" href='http://raymondrumpf.com/wp-content/uploads/2022/02/EMLab-Hotsheet-Electromagnetic-and-Photonic-Simulation.pdf'>Electromagnetic & Photonic Simulation Flyer</Link>

                    <Figure
                        title="Finite-Difference Time-Domain"
                        medias={[computational1]}
                        description={<>
                            The finite-difference time-domain (FDTD) method is like Thor’s hammer for computational electromagnetics.  When nothing else can simulate a device due to size or some other extreme challenge, FDTD delivers.  Research in the EM Lab in FDTD entails GPU and parallel implementations of the method, sophisticated materials models, hybridization with other methods, and unstructured/non-orthogonal grids.
                        </>}

                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for FDTD</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='https://empossible.thinkific.com/courses/2d-fdtd-in-matlab'>Electromagnetic Analysis Using Finite-Difference Time-Domain</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='https://empossible.thinkific.com/courses/1D-FDTD'>One-Dimensional FDTD with MATLAB</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='https://empossible.net/academics/emp5304/'>Two-Dimensional FDTD with MATLAB</Link>
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    <Figure
                        title="Finite-Difference Frequency-Domain"
                        medias={[computational2]}
                        description={<>
                            The finite-difference frequency-domain (FDFD) method is the frequency-domain brother of the hugely popular FDTD method.  It offers advantages when simulating highly dispersive materials, highly resonant devices, or small devices where FDTD runs slow compared to FDFD.  Research in FDFD includes GPU and parallel implementations, hybridization with other methods, and unstructured/non-orthogonal methods.
                        </>}

                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for FDFD</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='https://empossible.net/fdfdbook/'>Electromagnetic and Photonic Simulation for the Beginner: Finite-Difference Frequency-Domain in MATLAB</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='https://empossible.net/academics/emp5337/'>Topic 4 – Computational Electromagnetics</Link>
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />


                    <Figure
                        title="Transfer Matrix Method"
                        medias={[computational3]}
                        description={<>
                            The transfer matrix method (TMM) is a semi-analytical technique for simulating scattering from multi-layer structures like thin-film optical filters and dielectric slabs.  It is extremely fast and efficient and is often the starting point for more sophisticated simulations and optimizations.
                        </>}

                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for TMM</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='https://empossible.net/academics/emp5337/'>Topic 2 – Computational Electromagnetics</Link>
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    <Figure
                        title="Plane Wave Expansion Method"
                        medias={["https://raymondrumpf.com/wp-content/uploads/2021/12/PWEM-800.mp4"]}
                        description={<>
                            The plane wave expansion method (PWEM) may be the fastest and most efficient technique for calculating modes in periodic dielectric structures.  It is often the preferred tool for calculating photonic band diagrams to identify band gaps and for calculating isofrequency contours to analyze the dispersion of periodic structures.  The codes developed by the EMLab can efficiently handle 1D, 2D, and 3D periodic structures of any symmetry.  Research in the EMLab includes incorporating the reduced Bloch mode expansion technique as well as GPU and parallel implementations.
                        </>}

                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for PWEM</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='https://empossible.net/academics/emp5337/'>Topic 6 – Computational Electromagnetics</Link>
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    <Figure
                        title="Rigorous Coupled-Wave Analysis"
                        medias={[computational4]}
                        description={<>
                            Rigorous coupled-wave analysis (RCWA) is perhaps the fastest and most efficient method for simulating scattering from periodic dielectric structures.  It is essentially a combination of the TMM and the PWEM.  RCWA codes developed by the EMLab can handle any lattice symmetry and visualize the internal fields.  Research in RCWA includes GPU and parallel implementations as well as mitigating Gibb’s phenomenon.
                        </>}

                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for RCWA</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='https://empossible.net/academics/emp5337/'>Topic 7 – Computational Electromagnetics</Link>
                        </li>
                    </ul>

                    <WorkWithUs />

                </main>
            </div>
        </div>
    );
};

export default Printing3DPage;