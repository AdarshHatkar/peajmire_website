"use client";
import Link from "next/link";

export default function WorkWithUs({ hideSchedule = false }) {
    return (
        <div className="w-full h-[300px] my-4 bg-[#0D3556] flex flex-col gap-3 justify-center items-center">
            <h2 className="text-xl md:text-4xl text-center text-white font-semibold">
                Interested in Research Collaboration?
            </h2>
            <p className="text-white text-center font-normal text-md">
                Contact Dr. Ajmire to discuss potential research collaborations and student opportunities.
            </p>
            <Link href="/contact">
                <button className="text-sm md:text-lg text-center rounded-full bg-green-600 text-white px-4 py-2 font-medium transition-all duration-300 hover:bg-white hover:text-green-500 hover:border-green-500 border-2 border-transparent">
                    Contact Us
                </button>
            </Link>
        </div>
    );
}
