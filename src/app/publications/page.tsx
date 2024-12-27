"use client";
import publicationsBanner from "@assets/images/publicationsBanner.jpg";
import { Pagination, Select, SelectItem } from "@nextui-org/react";
import { publicationTypes, allTags, allAuthors, publications } from "./constants";
import Publication from "./-components/publication";
import { useRouter, useSearchParams } from "next/navigation";

export default function PublicationsPage() {
    const router = useRouter();
    const params = useSearchParams();
    const page = params.get("page") || 1;
    //update sortedPublications according to page
    const sortedPublications = [...publications].sort((a, b) => b.publishedYear - a.publishedYear);

    const groupedPublications = sortedPublications.reduce((groups, publication) => {
        const year = publication.publishedYear;
        if (!groups[year]) {
            groups[year] = [];
        }
        groups[year].push(publication);
        return groups;
    }, {});

    const years = Object.keys(groupedPublications).map(Number).sort((a, b) => b - a);

    return (
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={publicationsBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">
                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">Publications</h1>
                </div>
            </div>

            <div className="relative md:top-[-45px] z-30 max-w-[768px] w-[88%] mx-auto ">
                <main className=" bg-white mx-auto md:p-14 py-13">
                    <div className="mx-auto flex justify-around mb-5">
                        <button className="mx-auto text-[16px] font-normal bg-green-600 text-white px-4 py-2 rounded-full hover:text-green-700 hover:bg-white hover:border-1 hover:border-green-600 transition">
                            ResearchGate Profile
                        </button>
                        <button className="mx-auto text-[16px] font-normal bg-green-600 text-white px-4 py-2 rounded-full hover:text-green-700 hover:bg-white hover:border-1 hover:border-green-600 transition">
                            Google Scholar Profile
                        </button>
                    </div>
                    <div>
                        <Select
                            aria-label="Types"
                            radius="full"
                            className=" my-3"
                            defaultSelectedKeys={["allTypes"]}
                            classNames={{
                                trigger: ["border-1 border-[#eceef1] bg-[#fafbfc]"],
                            }}
                        >
                            {publicationTypes.map((animal) => (
                                <SelectItem key={animal.key}>{animal.label}</SelectItem>
                            ))}
                        </Select>
                        <Select
                            aria-label="Tags"
                            radius="full"
                            className=" my-3"
                            defaultSelectedKeys={["allTags"]}
                            classNames={{
                                trigger: ["border-1 border-[#eceef1] bg-[#fafbfc]"],
                            }}
                        >
                            {allTags.map((animal) => (
                                <SelectItem key={animal.key}>{animal.label}</SelectItem>
                            ))}
                        </Select>
                        <Select
                            aria-label="Authors"
                            radius="full"
                            className=" my-3"
                            defaultSelectedKeys={["allAuthors"]}
                            classNames={{
                                trigger: ["border-1 border-[#eceef1] bg-[#fafbfc]"],
                            }}
                        >
                            {allAuthors.map((animal) => (
                                <SelectItem key={animal.key}>{animal.label}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <Pagination
                        className="flex justify-end"
                        onChange={(page) => router.push(`/publications?page=${page}`)}
                        total={3} />

                    <div className="my-4">
                        {/* Step 4: Render publications grouped by year */}
                        {years.map((year) => (
                            <div key={year} className="mb-8">
                                <h2 className="text-xl font-bold text-blue-800">{year}</h2>
                                {groupedPublications[year].map((data, i) => (
                                    <Publication key={i} publicationData={data} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <Pagination
                        className="flex justify-end"
                        onChange={(page) => router.push(`/publications?page=${page}`)}
                        total={3} />

                </main>
            </div>
        </div>
    );
}
