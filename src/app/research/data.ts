
import electro from "@assets/images/electromagnetics.png";
import computational from "@assets/images/computational.jpg";
import photonics from "@assets/images/photonics.jpg";
import hybrid from "@assets/images/hdprinting.jpg";
import threeprinting from "@assets/images/3dprinting.jpg";
import lattices from "@assets/images/lattices.jpg";
import teamMember1 from "@assets/images/teamMember1.png";
import teamMember2 from "@assets/images/teamMember2.png";
import teamMember3 from "@assets/images/teamMember3.png";
import teamMember4 from "@assets/images/teamMember4.png";
import teamMember5 from "@assets/images/teamMember5.png";
import { StaticImageData } from "next/image";

export const items = [
    {
        image: electro,
        name: "Electromagnetics",
        alt: "Electromagnetics Image",
    },
    {
        image: computational,
        name: "Computational Electromagnetics",
        alt: "Computational Electromagnetics Image",
    },
    {
        image: photonics,
        name: "Photonics",
        alt: "Photonics Image",
    },
    {
        image: hybrid,
        name: "Hybrid 3D Printing",
        alt: "Hybrid 3D Printing Image",
    },
    {
        image: threeprinting,
        name: "3D Printed Electronics",
        alt: "3D Printed Electronics Image",
    },
    {
        image: lattices,
        name: "Spatially Hybrid Lattices",
        alt: "Spatially Hybrid Lattices Image",
    },
];


type TSocial = {
    type: "Email" | "LinkedIn" | "Twitter";
    URL: string;
};

type TTeamMembers = {
    name: string;
    post: string;
    description: string;
    imageUrl: string | StaticImageData;
    socials: TSocial[];
};

export const teamMembers: TTeamMembers[] = [
    {
        name: "Dr. Ubaldo Robles",
        post: "Principal Research Engineer",
        description:
            "Dr. Robles is an expert in 3D printing and was the first to automate direct-write hybrid 3D printing. He leads 3D printing efforts in 3D circuits, electromagnetic devices, 3D printable materials, and more. Dr. Robles is active in mentoring new students, outreach activities, business development, and management of the EMLab.",
        imageUrl: teamMember1,
        socials: [{ type: "Email", URL: "mailto:urobles@utep.edu" }],
    },
    {
        name: "Prof. Raymond C. Rumpf",
        post: "Grand Poobah",
        description:
            "Professor Rumpf directs the EM Lab and has the extraordinary privilege of mentoring and coaching the top students at the University of Texas at El Paso. Every day is an exciting and humbling experience for him.",
        imageUrl: teamMember2,
        socials: [
            { type: "Email", URL: "mailto:rcrumpf@utep.edu" },
            { type: "LinkedIn", URL: "https://www.linkedin.com/in/prof-raymond-rumpf/" },
        ],
    },
    {
        name: "Dr. Gilbert Carranza",
        post: "Post-Doctoral Researcher",
        description:
            "Gilbert is developing CAD tools for 3D circuits and hybrid 3D printing. He developed the first-ever 3D circuit layout tool that allows components to be placed at any position and orientation, and interconnects can be routed through all three dimensions following smooth splines or any user-defined path. Gilbert is also active in developing software for advanced slicing and hybrid 3D printing.",
        imageUrl: teamMember3,
        socials: [],
    },
    {
        name: "Dr. Abhilash Aditya",
        post: "Post-Doctoral Researcher",
        description:
            "Dr. Aditya brings tremendous expertise in materials and 3D printing to the EM Lab. He is developing processes to print new materials and to print metal-dielectric structures via hybrid 3D printing.",
        imageUrl: teamMember4,
        socials: [{ type: "Email", URL: "mailto:aaditya@utep.edu" }],
    },
    {
        name: "Prof. Jesus Gutierrez",
        post: "Faculty Associate",
        description:
            "Dr. Gutierrez combines art and science with an emphasis on education. For his graduate work, he explored new concepts and applications in spatially-variant photonic crystals.",
        imageUrl: teamMember5,
        socials: [
            { type: "Email", URL: "mailto:jjgutierrez4@utep.edu" },
            { type: "LinkedIn", URL: "" },
        ],
    },
    {
        name: "Edgar Bustamante",
        post: "Graduate Research Assistant",
        description:
            "Edgar has an extreme talent for computation and simulation. He is developing specialized simulation, optimization, and visualization tools specifically tailored for 3D electromagnetic devices. He is active in finite element method (FEM), finite-difference time-domain (FDTD), finite-difference frequency-domain (FDFD), ray tracing, and many more.",
        imageUrl: teamMember5,
        socials: [{ type: "Email", URL: "mailto:ebustamante3@miners.utep.edu" }],
    },
    {
        name: "Dr. Ubaldo Robles",
        post: "Principal Research Engineer",
        description:
            "Dr. Robles is an expert in 3D printing and was the first to automate direct-write hybrid 3D printing. He leads 3D printing efforts in 3D circuits, electromagnetic devices, 3D printable materials, and more. Dr. Robles is active in mentoring new students, outreach activities, business development, and management of the EMLab.",
        imageUrl: teamMember1,
        socials: [{ type: "Email", URL: "mailto:urobles@utep.edu" }],
    },
    {
        name: "Prof. Raymond C. Rumpf",
        post: "Grand Poobah",
        description:
            "Professor Rumpf directs the EM Lab and has the extraordinary privilege of mentoring and coaching the top students at the University of Texas at El Paso. Every day is an exciting and humbling experience for him.",
        imageUrl: teamMember2,
        socials: [
            { type: "Email", URL: "mailto:rcrumpf@utep.edu" },
            { type: "LinkedIn", URL: "https://www.linkedin.com/in/prof-raymond-rumpf/" },
        ],
    },
    {
        name: "Dr. Gilbert Carranza",
        post: "Post-Doctoral Researcher",
        description:
            "Gilbert is developing CAD tools for 3D circuits and hybrid 3D printing. He developed the first-ever 3D circuit layout tool that allows components to be placed at any position and orientation, and interconnects can be routed through all three dimensions following smooth splines or any user-defined path. Gilbert is also active in developing software for advanced slicing and hybrid 3D printing.",
        imageUrl: teamMember3,
        socials: [],
    },
    {
        name: "Dr. Abhilash Aditya",
        post: "Post-Doctoral Researcher",
        description:
            "Dr. Aditya brings tremendous expertise in materials and 3D printing to the EM Lab. He is developing processes to print new materials and to print metal-dielectric structures via hybrid 3D printing.",
        imageUrl: teamMember4,
        socials: [{ type: "Email", URL: "mailto:aaditya@utep.edu" }],
    },
];
