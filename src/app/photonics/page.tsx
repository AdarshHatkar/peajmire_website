import hybrid3dPrintingBanner from "@assets/images/hybrid3dPrintingBanner.jpg";
import photonics1 from "@assets/images/photonics1.png";
import photonics2 from "@assets/images/photonics2.png";
import Link from "next/link";
import Figure from "../components/figure";
import WorkWithUs from "../components/workWithUs";

const PhotonicPage = () => {
    return (
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={hybrid3dPrintingBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">

                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">Photonics</h1>
                </div>
            </div>

            <div className="relative md:top-[-45px] z-30 max-w-[768px] w-[88%] mx-auto ">
                <main className=" bg-white  mx-auto md:p-14 py-14">
                    <p className="text-gray-600 p-[10px]  text-[16px] md:text-[18px] mb-6">
                        Photonics is experiencing a revolution of its own due to digital manufacturing techniques such as multi-photon lithography.  Today’s photonic devices are mostly planar, primarily because of manufacturing constraints. Research in the EM Lab is pioneering new photonic technologies that fully exploit the new degrees of freedom offered by digital manufacturing.
                    </p>


                    <Figure
                        title="Spatially-Variant Photonic Crystals"
                        medias={[photonics1]}
                        description={
                            <>
                                Periodic structures like metamaterials and photonic crystals exhibit extraordinary properties.  The EMLab discovered even more profound ways to control light when the lattices are varied as a function of position.  In collaboration with the University of Central Florida, a world record was set for the tightest bend of an unguided optical beam and this was achieved using inexpensive materials with a low refractive index.  The technology is currently being applied to develop photon funnels, embedded lenses, and new types of optical elements operating without refraction.
                            </>
                        }
                    />

                    <h2 className="text- text-[21px] font-semibold mb-4">Learning Resources for Spatially Variant Crystals</h2>
                    <ul className="list-disc ml-8">
                        <li className="text-green-600 underline ">
                            <Link href='/'>Independent Control of Phase and Power in Spatially Variant Self-Collimating Photonic Crystals</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='/'>Tight Control of Light Beams in Photonic Crystals with Spatially Variant Lattice Orientation</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='/'>Optimization of Planar Self-Collimating Photonic Crystals</Link>
                        </li>
                        <li className="text-green-600 underline">
                            <Link href='/'>3D Printed Lattices with Spatially Variant Self-Collimation</Link>
                        </li>
                    </ul>
                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    <Figure
                        title="Metasurfaces"
                        medias={["https://raymondrumpf.com/wp-content/uploads/2021/10/Cool-Metalens-Concept.mp4"]}
                        description={
                            <>
                                Metasurfaces provide a way to make optical elements like lenses thin, light and very compact.  The EMLab is developing tools to simulate and design new types of metasurfaces.  The research includes hybridizing ray tracing with rigorous simulation techniques, exploration of volumetric elements, and more.
                            </>
                        }
                    />

                    <hr className="h-[4px] my-4 bg-green-600 w-[82%] mx-auto" />

                    <Figure
                        title="Scattering at the Interface Between Two Complex Media"
                        medias={[photonics2]}
                        description={
                            <>
                                The EMLab was the first to analyze scattering at the interface between two media that can each have a complex permittivity, complex permeability, loss or gain, positive or negative refractive index, and positive or negative impedance. The derived equations are simpler than those in the literature and obey conservation of power without including additional terms in the equations. The equations can be used to analyze scattering from metamaterials or to benchmark simulations of metamaterial devices. This study produced many surprising conclusions such as complex angles, non-zero transmission during supposed total internal reflection, and Brewster’s angle not producing pure polarization.
                            </>
                        }
                    />

                    <ul className="list-disc ml-8 mb-6">
                        <li className="text-gray-600">
                            Asad Gulib, Edgar Bustamante, and Raymond C. Rumpf, “Scattering at the interface between two mediums with complex permittivity and complex permeability,” submitted to PIER, 14 Feb 2022.
                        </li>
                    </ul>

                    <WorkWithUs />

                </main>
            </div>
        </div>
    );
};

export default PhotonicPage;