import hybrid3dPrintingBanner from "@assets/images/hybrid3dPrintingBanner.jpg";
import variantLatices1 from "@assets/images/variantLatices1.png";
import variantLatices2 from "@assets/images/variantLatices2.jpg";
import Link from "next/link";
import Figure from "../components/figure";
import WorkWithUs from "../components/workWithUs";

const SpatiallyVariantLaticesPage = () => {
    return (
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[140px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={hybrid3dPrintingBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">
                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">Spatially Variant Lattices</h1>
                </div>
            </div>

            <div className="relative md:top-[-45px] z-30 max-w-[768px] w-[88%] mx-auto ">
                <main className=" bg-white  mx-auto md:p-14 py-14">

                    <p className="text-gray-600 p-[10px]  text-[16px] md:text-[18px] mb-6">
                        A spatially-variant lattice (SVL) is a periodic structure that is bent, twisted, conformed, functionally graded, or otherwise adjusted as a function of position.  Macroscopically, periodic structures are analogous to homogenous materials and are very limited in what they can do.  Profound control of waves, stress and thermal energy is made possible through inhomogeneities such as interfaces, curves, and gradients.  Making periodic structures macroscopically inhomogeneous has been extremely limited because it was not known how to bend, twist, conform or introduce randomness without deforming the geometry of the unit cells that would erase the properties of the structure.  A breakthrough by the EMLab to calculate SVLs has created the opportunity to generate new geometries and discover new physical mechanisms that were not possible previously.
                    </p>

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for Spatially-Variant Lattices</h2>
                    <ul className="list-disc ml-8 mb-6">
                        <li className="text-green-600 underline ">
                            <Link href='/'>Generating Spatially Variant Lattices</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='/'>Implementation of Numerical Transformation Optics in MATLAB</Link>
                        </li>
                    </ul>

                    <Figure
                        title="Spatially Variant Lattice Algorithm"
                        description={
                            <>
                                Conventional approaches for bending and spatially varying periodic structures involve mapping and coordinate transforms.  These are all limited in that they deform the lattices which erase their properties.  An algorithm was developed that does not map or transform.  Instead, it directly builds the periodic structure with the desired spatially varied parameters.  The algorithm can adjust virtually any geometric attribute of a lattice as a function of position.  In fact, all of these attributes can be spatially varied at the same time in their own unique patterns.  Attributes include lattice spacing, unit cell orientation, fill factor, pattern within the unit cell, lattice symmetry, and material composition.  The final lattice is smooth, continuous, and free of any unintentional defects.
                            </>
                        }
                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for Spatially Variant Algorithms</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='/'>Generating Spatially Variant Lattices</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='/'>Synthesis of Spatially Variant Lattices</Link>
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    {/* <figure>
                        <h2 className="text-center text-[30px]  font-semibold mb-4">
                            Conformal Arrays
                        </h2>

                        <div className="flex gap-2">
                            <img src={variantLatices1.src} className="grow w-[49%]" alt="Image" />
                            <img src={variantLatices2.src} className="grow w-[49%]" alt="Image" />
                        </div>
                        <p className="text-gray-600 p-[10px] text-[16px] md:text-[18px] mb-6">
                            The SVL algorithm was adapted to generate periodic structures over doubly-curved surfaces.  This generates arrays over any curve while maintaining the size, shape, and spacing of the elements distributed over the surface in order to preserve the electromagnetic properties.  This is being applied to frequency selective surfaces, metasurfaces, guided-mode resonance filters, array antennas, diffraction gratings, and more.
                        </p>
                    </figure> */}

                    <Figure
                        title="Conformal Arrays"
                        medias={[variantLatices1, variantLatices2]}
                        description={<>
                            The SVL algorithm was adapted to generate periodic structures over doubly-curved surfaces.  This generates arrays over any curve while maintaining the size, shape, and spacing of the elements distributed over the surface in order to preserve the electromagnetic properties.  This is being applied to frequency selective surfaces, metasurfaces, guided-mode resonance filters, array antennas, diffraction gratings, and more.
                        </>}
                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for Conformal Arrays</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='/'>Spatially-Variant Periodic Structures in Electromagnetics</Link>
                        </li>
                        <li className="text-green-600 underline">
                            Conformal Frequency Selective Surfaces for Arbitrary Curvature (pending review)
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    {/* <figure>
                        <h2 className="text-center text-[30px]  font-semibold mb-4">
                        Spatially Variant Lattices for Transformation Optic Devices
                        </h2>

                        <video className="mx-auto" src='https://raymondrumpf.com/wp-content/uploads/2021/12/MM-600.mp4' autoPlay muted controls loop></video>

                        <p className="text-gray-600 p-[10px] text-[16px] md:text-[18px] mb-6">
                        Transformation optics (TO) is a mathematical technique to calculate the permittivity and permeability that flows waves according to a spatial transform.  Most often this leads to anisotropic and extreme values for both permittivity and permeability that can only be realized using metamaterials.  To design a functional device, it is necessary to vary the size, shape, and orientation of the metamaterial elements through the volume of the device.  The EMLab adapted the SVL algorithm to generate these metamaterial lattices that fill space most efficiently and avoid overlapping elements.
                        </p>
                        </figure> */}

                    <Figure
                        title="Spatially Variant Lattices for Transformation Optic Devices"
                        medias={["https://raymondrumpf.com/wp-content/uploads/2021/12/MM-600.mp4"]}
                        description={<>
                            Transformation optics (TO) is a mathematical technique to calculate the permittivity and permeability that flows waves according to a spatial transform.  Most often this leads to anisotropic and extreme values for both permittivity and permeability that can only be realized using metamaterials.  To design a functional device, it is necessary to vary the size, shape, and orientation of the metamaterial elements through the volume of the device.  The EMLab adapted the SVL algorithm to generate these metamaterial lattices that fill space most efficiently and avoid overlapping elements.
                        </>}

                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for Transformation Optics</h2>
                    <ul className="list-disc ml-8 mb-6">
                        <li className="text-green-600 underline ">
                            <Link href='/'>Generating Spatially-Variant Metamaterial Lattices Design from Spatial Transforms</Link>
                        </li>
                        <li className="text-green-600 underline ">
                            <Link href='/'>Design and Simulation of Arbitrarily-Shaped Transformation Optics Devices Using a Simple Finite-Difference Method</Link>
                        </li>
                        <li className="text-green-600 underline ">
                            <Link href='/'>Implementation of Numerical Transformation Optics in MATLAB</Link>
                        </li>
                    </ul>

                    <WorkWithUs />

                </main>
            </div>
        </div>
    );
};

export default SpatiallyVariantLaticesPage;