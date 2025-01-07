"use client";
import aboutBanner from "@assets/images/aboutBanner.jpg";
import about1 from "@assets/images/about1.jpg";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <> <div className="bg-[#dee1e3] min-h-screen">
      <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
        <img src={aboutBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
        <div className="relative pb-24 z-20">

          <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">About Dr. Rumpf</h1>
        </div>
      </div>

      <div className="relative md:top-[-45px] z-30 max-w-[768px] w-[88%] mx-auto ">
        <main className=" bg-white  mx-auto md:p-14 py-14">
          <h1 className="mb-4 text-[30px] font-semibold m-auto ">Research</h1>

          <p className="text-gray-600 p-[10px] text-sm mb-6">
            The mission of my research is to mentor students through extremely ambitious and high-risk/high-payoff research that is enabled by digital manufacturing (i.e. 3D printing) and to commercialize the technology.  Prior research led to the discovery of several new electromagnetic and optical phenomena, developed new design tools necessary for fully exploiting the third dimension, demonstrated new capabilities in hybrid additive manufacturing, and produced a series of significant breakthroughs, world records, and first-ever achievements.  The research has received many accolades including induction into the Florida Tech Career Hall of Fame, a DARPA Young Faculty Award, the Schellenger Professorship in Electrical Research, the 2019 Dean’s Award for Excellence in Research, Best Photonics Technology in 2015 by Opli Magazine, multiple news articles, invited talks, and more.  To date, my research has included:
          </p>
          <ul className="list-disc ml-8 grid md:grid-cols-2">
            <li className="text-gray-600  text-sm">
              3D/volumetric circuits and systems
            </li>
            <li className="text-gray-600  text-sm">
              Antennas & Frequency Selective Surfaces
            </li>
            <li className="text-gray-600  text-sm">
              EM devices for extreme environments
            </li>
            <li className="text-gray-600  text-sm">
              Computational Electromagnetics
            </li>
            <li className="text-gray-600  text-sm">
              Hybrid 3D printing
            </li>
            <li className="text-gray-600  text-sm">
              Spatially-Variant Lattices
            </li>
            <li className="text-gray-600  text-sm">
              Metamaterials & Photonic Crystals
            </li>
            <li className="text-gray-600  text-sm">
              Device Theory
            </li>

          </ul>
          <hr className="h-[3px] my-4 bg-green-600 w-[82%] mx-auto" />

          <h1 className="mb-4 text-[30px] font-semibold m-auto ">Teaching</h1>

          <p className="text-gray-600 p-[10px] text-sm mb-6">
            My goal in teaching is to motivate, train and create opportunities for students so they can develop successful and satisfying careers. I work hard to provide them with the skills, resources, and guidance to help them do incredible things and build strong careers
          </p>
          <ul className="list-disc ml-8 ">
            <li className="text-gray-600  text-sm">
              <span className="font-semibold">Atmosphere</span>
              – I formulate my courses and assignments to encourage questions and interactions. I make every attempt to be open and available to my students – both in-person and online – as much as possible. I keep a “Stump the Rumpf” candy jar on my desk to encourage students to earn a reward for asking me their most challenging questions.

            </li>
            <li className="text-gray-600  text-sm">
              <span className="font-semibold">Resources</span>
              – Students need and deserve the best resources available to learn efficiently, to practice what is taught, and to apply the information they’ve learned. I’ve developed course websites for nearly all of my in-person university courses, where students can access assignments, lecture notes, videos of recorded lectures and more. I’ve also developed online courses on a variety of topics, accessible to students around the world. I developed a successful YouTube channel with videos explaining and demonstrating a variety of topics in my research fields.

            </li>
            <li className="text-gray-600  text-sm">
              <span className="font-semibold">Mentorship</span>
              – I strive to not only help students master the academic materials presented in my courses but also to motivate and create opportunities for them. I continually help my university students find internships and job opportunities through my professional networks and continue to help and advise them throughout their careers.

            </li>

          </ul>
          <hr className="h-[3px] my-4 bg-green-600 w-[82%] mx-auto" />

          <h1 className="mb-4 text-[30px] font-semibold m-auto ">Biography</h1>

          <div className="flex sm:flex-row flex-col-reverse">
            <p className="text-gray-600 p-[10px] text-sm mb-6">
              Dr.  Raymond C. (Tipper) Rumpf, also known as the EMProfessor, is a pioneer in electromagnetics, photonics and 3D printing. His mission is to develop revolutionary technologies in these areas. He founded the
              <Link href='http://emlab.utep.edu/' className="border-b-green-600 border-b-2">
                &nbsp;EMLab&nbsp;
              </Link>
              at the
              <Link href='http://utep.edu/' className="border-b-green-600 border-b-2">
                &nbsp;
                University of Texas at El Paso
                &nbsp;
              </Link>
              in 2010 and his team has already delivered an array of significant breakthroughs. These include the first-ever design tool for 3D volumetric circuits, first to automate hybrid 3D printing to build 3D parts with any distribution of metals and plastics, world’s highest power frequency selective surface, world’s most broadband all-dielectric filter, world’s tightest bend of an unguided optical beam, and more. Many other exciting technologies are currently under development in the areas of hybrid 3D printing, 3D circuits, antennas, frequency selective surfaces, metamaterials, metasurfaces, photonic crystals, and computational electromagnetics.
            </p>
            <img src={about1.src} alt="Image" className="h-[402px] w-[326px] mx-auto"/>
          </div>

          <p className="text-gray-600 p-[10px] text-sm mb-6">

            Dr. Rumpf is currently a Professor of
            <Link href='https://www.utep.edu/engineering/ece/' className="border-b-green-600 border-b-2">
              &nbsp;
              Electrical and Computer Engineering
              &nbsp;
            </Link>

            at
            <Link href='http://utep.edu/' className="border-b-green-600 border-b-2">
              &nbsp;
              University of Texas at El Paso (UTEP)
              &nbsp;
            </Link>
            , and has a joint appointment in the
            <Link href='https://www.utep.edu/science/computational-science/' className="border-b-green-600 border-b-2">
              &nbsp;
              Computational Science
              &nbsp;
            </Link>

            program.  Prior to joining UTEP, Raymond was the Chief Technology Officer for
            <Link href='https://primephotonics.com/' className="border-b-green-600 border-b-2">
              &nbsp;
              Prime Photonics
              &nbsp;
            </Link>

            where he helped transform the company’s technology portfolio from exclusively fiber optic sensors to an array of technologies for extreme applications.  Before Prime Photonics, Raymond was a senior electrical engineer for Harris Corporation (now
            <Link href='https://www.l3harris.com/' className="border-b-green-600 border-b-2">
              &nbsp;
              L3Harris
              &nbsp;
            </Link>

            ) where he researched and developed a wide range of technologies to radically miniaturize communications systems. Technologies included antennas, power generation, thermal management, circuit design, and advanced packaging. Raymond earned his BS and MS in Electrical Engineering from the
            <Link href='https://www.fit.edu/' className="border-b-green-600 border-b-2">
              &nbsp;
              Florida Institute of Technology
              &nbsp;
            </Link>
            in 1995 and 1997 respectively.  He earned his Ph.D. in Optics in 2006 from
            <Link href='https://creol.ucf.edu/' className="border-b-green-600 border-b-2">
              &nbsp;
              CREOL
              &nbsp;
            </Link>
            at the
            <Link href='https://creol.ucf.edu/' className="border-b-green-600 border-b-2">
              &nbsp;
              University of Central Florida.
              &nbsp;
            </Link>

            In 2015, Raymond was awarded the highly prestigious University of Texas Regents’ Outstanding Teaching Award.  In 2020, he was inducted into the Florida Tech Career Hall of Fame. Raymond has been awarded over a dozen United States patents and has authored dozens of peer-reviewed journal articles.  He is a Fellow of
            <Link href='https://spie.org/' className="border-b-green-600 border-b-2">
              &nbsp;
              SPIE,
              &nbsp;
            </Link>

            an Associate Editor for SPIE
            <Link href='https://www.spiedigitallibrary.org/journals/optical-engineering?SSO=1' className="border-b-green-600 border-b-2">
              &nbsp;
              Optical Engineering,
              &nbsp;
            </Link>

            a Senior Member of
            <Link href='https://www.ieee.org/' className="border-b-green-600 border-b-2">
              &nbsp;
              IEEE,
              &nbsp;
            </Link>

            and a member of the
            <Link href='https://www.optica.org/en-us/home/' className="border-b-green-600 border-b-2">
              &nbsp;
              Optical Society (Optica).
              &nbsp;
            </Link>

            He is a member of ARRL and an Extra Class amateur radio operator (call sign is AG4YV). He holds five world records in skydiving for
            <Link href='http://www.crwphoto.com/2003_RECORD/2003CF_WORLD_RECORD.html/' className="border-b-green-600 border-b-2">
              &nbsp;
              largest parachute formation.
              &nbsp;
            </Link>

            Raymond is active in outreach including coaching of students in third-world countries. He currently lives with his wife, children and dog in El Paso, TX.
          </p>
          <hr className="h-[3px] my-4 bg-green-600 w-[82%] mx-auto" />

          <h1 className="mb-4 text-[30px] font-semibold m-auto ">Biography</h1>
          <ul className="list-disc ml-8 grid md:grid-cols-2">
            <li className="text-gray-600  text-sm">
              <Link href='https://www.fit.edu/career-hall-of-fame/' className="text-green-600 underline">
                Florida Tech Career Hall of Fame 2020
              </Link>
            </li>
            <li className="text-gray-600  text-sm">
              <Link href='https://spie.org/membership/explore-membership/fellows/complete-list-of-spie-fellows' className="text-green-600 underline">
                Fellow, SPIE, 2019
              </Link>
            </li>
            <li className="text-gray-600  text-sm">
              Senior Member IEEE, 2019
            </li>
            <li className="text-gray-600  text-sm">
              <Link href='https://www.utsystem.edu/sites/regents-outstanding-teaching-awards' className="text-green-600 underline">
                2015 UT Regents’ Outstanding Teaching Award
              </Link>
            </li>
            <li className="text-gray-600  text-sm">
              D.E.T Outstanding Faculty Member, 2017
            </li>
            <li className="text-gray-600  text-sm">
              <Link href='http://engineering.utep.edu/announcement082415b.htm' className="text-green-600 underline">
                Schellenger Prof. in Electrical Research
              </Link>
            </li>
            <li className="text-gray-600  text-sm">
              Dean’s Award for Excellence in Research, UTEP, 2019
            </li>
            <li className="text-gray-600  text-sm">
              <Link href='https://www.darpa.mil/work-with-us/for-universities/young-faculty-award' className="text-green-600 underline">
                DARPA Young Faculty Award, 2011-2013
              </Link>
            </li>
            <li className="text-gray-600  text-sm">
              <Link href='http://www.crwphoto.com/2002Bio01work.html' className="text-green-600 underline">
                Five Official World Records in Skydiving
              </Link>
            </li>
          </ul>

          <div className="my-4 flex md:justify-around justify-center items-center md:flex-row flex-col gap-4">
            <button
              className="w-fit text-[20px] leading-[20px] font-normal bg-green-600 text-white px-4 py-2 rounded-full hover:text-green-700 hover:bg-white hover:border-1 hover:border-green-600 transition  ">
              Download CV
            </button>
            <button
              className="w-fit text-[20px] leading-[20px] font-normal bg-green-600 text-white px-4 py-2 rounded-full hover:text-green-700 hover:bg-white hover:border-1 hover:border-green-600 transition  ">
              View Course Offerings
            </button>
            <button
              className="w-fit text-[20px] leading-[20px] font-normal bg-green-600 text-white px-4 py-2 rounded-full hover:text-green-700 hover:bg-white hover:border-1 hover:border-green-600 transition  ">
              Publications
            </button>
          </div>

          <div className="flex mb-4 justify-center gap-4">
            <FaFacebook className="bg-[#0866ff]  text-[30px] p-[6px]  rounded-full text-white" />
            <FaLinkedin className="bg-[#0866ff]  text-[30px] p-[6px]  rounded-full text-white" />
          </div>

        </main>
      </div>
    </div>
    </>
  );
}
