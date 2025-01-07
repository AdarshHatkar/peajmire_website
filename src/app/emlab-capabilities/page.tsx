import hybrid3dPrintingBanner from "@assets/images/hybrid3dPrintingBanner.jpg";
import Link from "next/link";

const EmlabCapabilitiesPage = () => {
    return (
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900  md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={hybrid3dPrintingBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">

                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">EMLab Capabilities</h1>
                </div>
            </div>

            <div className="relative md:top-[-45px] z-30 max-w-[1152px] w-[88%] mx-auto ">
                <main className=" bg-white  mx-auto md:p-14 py-14">

                    <p className="text-gray-600 p-[10px]  text-[16px] md:text-[18px] mb-6">
                        The EMLab hosts a wide variety of test and fabrication capabilities, many of which are listed below. For specific equipment or capability questions, please contact us at
                        &nbsp;
                        <Link href='/' className="border-b-green-600 border-b-2">
                            info@raymondrumpf.com
                        </Link>
                    </p>



                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Commercial and Open-Source Electromagnetic Simulation Software</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='http://www.ansys.com/Products/Simulation+Technology/Electronics/Signal+Integrity/ANSYS+HFSS'>Ansys HFSS</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://ab-initio.mit.edu/wiki/index.php/Meep'>MIT Meep</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://www.nec2.org/'>Numerical Electromagnetics Code</Link>
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Computer-Aided Design (CAD) Tools</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='http://meshlab.sourceforge.net/'>SolidWorks</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='https://www.blender.org/'>Blender</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://www.solidworks.com/'>MeshLab</Link>
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Other Commerical Software</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='https://www.ni.com/en-us/shop/labview.html?cid=Paid_Search-7013q0000020cz6AAA-Consideration-GoogleSearch_LabVIEW_LabVIEW&s_kwcid=AL!6304!3!449107487676!e!!g!!labview&gclid=Cj0KCQjwtrSLBhCLARIsACh6RmhqQPhiO092i4-kN5CTdUQcQWYnWbfqZJmWi8SDz7TfwK2CI2fQaLwaAhA3EALw_wcB'>MATLAB</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='https://www.mathworks.com/products/matlab.html'>LabView</Link>
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Custom Electromagnetic Tools – Our custom tools execute much faster and incorporate more physics (such as bi-anisotropy) than commercial packages.</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='http://emlab.utep.edu/pdfs/Poster_FDTD.pdf'>Finite-Difference Time-Domain (FDTD)</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://emlab.utep.edu/pdfs/Poster_FDFD.pdf'>Finite-Difference Frequency-Domain (FDFD)
                            </Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://emlab.utep.edu/pdfs/Poster_BPM.pdf'>Beam Propagation Method (BPM)</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://emlab.utep.edu/pdfs/Poster_SAM.pdf'>Slice Absorption Method (SAM)</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://emlab.utep.edu/pdfs/Poster_PWEM.pdf'>Plane Wave Expansion Method (PWEM)</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://emlab.utep.edu/pdfs/Poster_TMM.pdf'>Transfer Matrix Method (TMM)</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://emlab.utep.edu/pdfs/Poster_RCWA.pdf'>Rigorous Coupled-Wave Analysis (RCWA)</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://emlab.utep.edu/pdfs/Poster_MOL.pdf'>Method of Lines (MoL)</Link>
                        </li>
                        <li className="text-gray-600 ">
                            Method of Moments (MoM)
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Custom Optimization and Geometry Generation Tools</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li>
                            <Link className="text-green-600 underline" href='http://emlab.utep.edu/pdfs/Poster_SVM.pdf'>Synthesis of Spatially-Variant Lattices</Link>
                            <ul className="md:text-[18px] text-[16px] list-[circle] ml-8">
                                <li className="text-gray-600 ">
                                    Attributes that can be spatially varied: unit cell orientation, lattice spacing, fill fraction, material composition, lattice symmetry, and pattern within the unit cell.
                                </li>
                                <li className="text-gray-600 ">
                                    Output: STL files
                                </li>
                            </ul>
                        </li>
                        <li className="text-green-600 underline">
                            Transformation Optics (TO)
                        </li>
                        <li className="text-green-600 underline">
                            Fast Marching Method (FMM)
                        </li>
                        <li className="text-green-600 underline">
                            Level Set Methods (LSM)
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://emlab.utep.edu/pdfs/Poster_PSO.pdf'>Particle Swarm Optimization (PSO)</Link>
                        </li>
                        <li className="text-green-600 underline">
                            Genetic Algorithms (GA)
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Computer Resources</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-gray-600 ">
                            Dell Precision Workstation T7600, 16 cores, 196 Gb RAM
                        </li>
                        <li className="text-gray-600 ">
                            Dell Precision Workstation T7500, 12 cores, 96 Gb RAM, 6 Gb Tesla GPU
                        </li>
                        <li className="text-gray-600 ">
                            Dell Precision Workstation T7500, 8 cores, 96 Gb RAM, 6 Gb Tesla GPU
                        </li>
                        <li className="text-gray-600 ">
                            Four Dell Precision T5810 Workstations, 6 cores Xeon 3.5 GHz, 32 Gb RAM
                        </li>
                        <li className="text-gray-600 ">
                            Dell Precision Workstation T3610, 12 cores, 16 Gb RAM
                        </li>
                        <li className="text-gray-600 ">
                            More than a dozen dual-monitor workstations for students
                        </li>
                        <li className="text-gray-600 ">
                            Dedicated EM Lab BLADE Cluster
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='http://research.utep.edu/Default.aspx?alias=research.utep.edu/hipcep'>UTEP Clusters</Link>
                        </li>
                    </ul>

                    <h1 className="text-center md:text-[36px] text-[32px] font-semibold m-auto mt-5 text-start ">3D Printing and Manufacturing</h1>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">nScrypt 3Dn-Tabletop Hybrid 3D Printer</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-gray-600 ">
                            nScrypt Fused Deposition (nFD)
                        </li>
                        <li className="text-gray-600 ">
                            nScrypt Micro-Dispensing
                        </li>
                        <li className="text-gray-600 ">
                            200 W pulsed CO2 laser for trimming, cutting and drilling
                        </li>
                        <li className="text-gray-600 ">
                            200 W CW CO2 laser for curing and sintering
                        </li>
                        <li className="text-gray-600 ">
                            All above capabilities available simultaneously
                        </li>
                        <li className="text-gray-600 ">
                            Part resolution: &lt; 50 micrometers
                        </li>
                        <li className="text-gray-600 ">
                            Build volume: 15L x 10W x 10H cm
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Ultimaker 3</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-gray-600 ">
                            Dual nozzle FDM
                        </li>
                        <li className="text-gray-600 ">
                            Heated glass bed (max 100o C)
                        </li>
                        <li className="text-gray-600 ">
                            Resolution: 12.5 microns XY and 2.5 microns Z
                        </li>
                        <li className="text-gray-600 ">
                            Build volume: 21.5 L x 21.5 W x 20 H cm (single nozzle)
                        </li>
                        <li className="text-gray-600 ">
                            Build volume: 19.7 L x 21.5 W x 20 H cm (dual nozzle)
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">MakerBot Replicator 2X</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-gray-600 ">
                            Dual head FDM
                        </li>
                        <li className="text-gray-600 ">
                            Heated metal bed
                        </li>
                        <li className="text-gray-600 ">
                            Build volume: 24.6 L x 15.2 W x 15.5 H cm
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">GMW Model 3473 Electromagnet</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-gray-600 ">
                            Generates & &rarr; 3 Tesla
                        </li>
                        <li className="text-gray-600 ">
                            Magnetic studies
                        </li>
                        <li className="text-gray-600 ">
                            Particle alignment during curing
                        </li>
                    </ul>


                    <h1 className="text-center md:text-[36px] text-[32px] font-semibold m-auto mt-5 text-start ">Testing & Measurement</h1>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Materials Characterization</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-gray-600 ">
                            Measurement Capabilities: permittivity, permeability, loss tangent, and dielectric breakdown
                        </li>
                        <li className="text-gray-600 ">
                            Waveguide Materials Measurement
                            <ul className="md:text-[18px] text-[16px] list-[circle] ml-8">
                                <li className="text-gray-600 ">
                                    1.72 – 2.60 GHz, WR 430, 109.22 L x 54.61 H x 35.56 W mm
                                </li>
                                <li className="text-gray-600 ">
                                    8.2 – 12.4 GHz, WR 90 X Band, 22.86 L x 10.16 H x 7.62 W mm

                                </li>
                            </ul>
                        </li>
                        <li className="text-green-600">
                            <Link href='http://www.damaskosinc.com/' className="underline text-green-600">
                                MuEpsln Materials Measurement System (previously Damaskos)
                            </Link>
                            <ul className="md:text-[18px] text-[16px] list-[circle] ml-8">
                                <li className="text-gray-600 ">
                                    Model 015 thin dielectric sheet tester: 7 data points, 0.4 to 6.0 GHz
                                </li>
                                <li className="text-gray-600 ">
                                    Model 125HC thin dielectric sheet tester: 5 data points, 6.0 to 12.0 GHz
                                </li>
                                <li className="text-gray-600 ">
                                    “Cavity” software
                                </li>
                                <li className="text-gray-600 ">
                                    Sample size: &lt; 1 mm thick, &rarr; 6×6 cm wide
                                </li>
                                <li className="text-gray-600 ">
                                    Accuracy better than 1.5% when sample thickness is less than 1 mm and dielectric constant is less than 10
                                </li>
                            </ul>
                        </li>
                        <li className="text-gray-600 ">
                            ViTREK V63 AC/DC/IR Safety Analyzer: 5 kVAC, 6 kVDC
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Device Inspection and Repair</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-gray-600 ">
                            <Link href='http://www.dynamism.com/3d-scanners/matter-and-form.shtml' className="underline text-green-600">
                                Matter and Form 3D Scanner
                            </Link>
                            <ul className="md:text-[18px] text-[16px] list-[circle] ml-8">
                                <li className="text-gray-600 ">
                                    Color scans
                                </li>
                                <li className="text-gray-600 ">
                                    Max Size: 18 cm diameter, 25 cm height
                                </li>
                                <li className="text-gray-600 ">
                                    Max Weight: 3 kg
                                </li>
                                <li className="text-gray-600 ">
                                    Scan Time: 5 minutes (high-speed), &larr; 10 minutes (high-quality)
                                </li>
                                <li className="text-gray-600 ">
                                    Accuracy: 430 microns (high-speed), 250 microns (high-quality)
                                </li>
                            </ul>

                        </li>
                        <li className="text-gray-600 ">
                            Digital microscope with measurement capability
                        </li>
                        <li className="text-gray-600 ">
                            Micromanipulator probe station
                        </li>
                        <li className="text-gray-600 ">
                            Numerous Microscopes
                        </li>
                        <li className="text-gray-600 ">
                            Weller EC2002M professional soldering station
                        </li>
                    </ul>


                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Electromagnetic Testing</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-gray-600 ">
                            Anechoic Chamber
                            <ul className="md:text-[18px] text-[16px] list-[circle] ml-8">
                                <li className="text-gray-600 ">
                                    Full 360° coverage
                                </li>
                                <li className="text-gray-600 ">
                                    Room Size: 27 L x 12 W x 10 H feet
                                </li>
                            </ul>

                        </li>
                        <li className="text-gray-600 ">
                            EMI shielded room for low noise testing
                        </li>
                        <li className="text-gray-600 ">
                            Agilent N5245A PNA-X Vector Network Analyzer
                            <ul className="md:text-[18px] text-[16px] list-[circle] ml-8">
                                <li className="text-gray-600 ">
                                    10 MHz to 50 GHz
                                </li>
                                <li className="text-gray-600 ">
                                    Four ports
                                </li>
                                <li className="text-gray-600 ">
                                    Time-domain
                                </li>
                                <li className="text-gray-600 ">
                                    Materials measurement
                                </li>
                            </ul>
                        </li>
                        <li className="text-gray-600 ">
                            Keysight Vector Signal Analyzer/Generator
                            <ul className="md:text-[18px] text-[16px] list-[circle] ml-8">
                                <li className="text-gray-600 ">
                                    M9018A 18-slot PXI chassis
                                </li>
                                <li className="text-gray-600 ">
                                    M9036A PXI embedded controller
                                </li>
                                <li className="text-gray-600 ">
                                    M9381A PXIe vector signal generator
                                </li>
                                <li className="text-gray-600 ">
                                    M9391A vector signal analyzer
                                </li>
                                <li className="text-gray-600 ">
                                    M9099 waveform creator
                                </li>
                                <li className="text-gray-600 ">
                                    89601B vector signal analyzer sofware
                                </li>
                                <li className="text-gray-600 ">
                                    M909XA X-series measurement applications
                                </li>
                                <li className="text-gray-600 ">
                                    Signal studio software
                                </li>
                                <li className="text-gray-600 ">
                                    N7618B WLAN signal studio app
                                </li>
                                <li className="text-gray-600 ">
                                    N7624B LTE-FDD signal studio app
                                </li>
                            </ul>
                        </li>
                        <li className="text-gray-600 ">
                            Two HP E4411B Spectrum Analyzers
                            <ul className="md:text-[18px] text-[16px] list-[circle] ml-8">
                                <li className="text-gray-600 ">
                                    9 kHz to 1.5 GHz
                                </li>

                            </ul>
                        </li>
                        <li className="text-gray-600 ">
                            Frequency Synthesizers
                        </li>
                        <li className="text-gray-600 ">
                            Agilent B3006A Microwave System Amplifier
                            <ul className="md:text-[18px] text-[16px] list-[circle] ml-8">
                                <li className="text-gray-600 ">
                                    0.01 GHz to 26.5 GHz
                                </li>

                            </ul>
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Electrical and Electronics Testing</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-gray-600 ">
                            Oscilloscopes
                        </li>
                        <li className="text-gray-600 ">
                            Power Supplies
                        </li>
                        <li className="text-gray-600 ">
                            Power Supplies
                        </li>
                        <li className="text-gray-600 ">
                            Digital Multimeters
                        </li>
                        <li className="text-gray-600 ">
                            Function Generators
                        </li>
                    </ul>

                    <h2 className=" mt-5 text-[20px] font-medium  mb-3">Facilities</h2>
                    <ul className="md:text-[18px] text-[16px] list-disc ml-8">
                        <li className="text-gray-600 ">
                            Anechoic Chamber
                        </li>
                        <li className="text-gray-600 ">
                            Access to open desert areas
                        </li>
                    </ul>

                </main>
            </div>
        </div>
    );
};

export default EmlabCapabilitiesPage;