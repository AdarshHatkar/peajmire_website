import Link from "next/link";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";

export default function Publication({ publicationData }) {
    const [openedMenu, setOpenedMenu] = useState<string | null>(null);
    return <>
        <div className="my-2">
            <p className="text-gray-600 text-sm mb-2">

                {publicationData.authors.map((author, i) =>
                    <>
                        <span key={i}>
                            {author}
                        </span>
                        {publicationData.authors.length !== i + 1 && ","}
                    </>
                )}
            </p>
            <p className="mb-2">
                <Link
                    className=" font-semibold text-gray-500 border-b-1 border-b-green-600 hover:text-green-600"
                    href={"/"}>
                    {publicationData.title}
                </Link>
                {publicationData.publicationTypes.map((type, i) =>
                    <span key={i}
                        className="m-[3px] font-bold text-[6px] bg-green-600 text-white py-[2px] px-[5px] rounded-sm"
                    >
                        {type}
                    </span>
                )}
            </p>
            <p className="text-gray-500 text-[9px] mb-1">
                {publicationData.publishedYear}
                {publicationData.description}
            </p>

            <p className="text-gray-600 text-[10px]">
                {publicationData?.abstract &&
                    <>
                        <span onClick={() => setOpenedMenu("abstract")} className={`cursor-pointer ${openedMenu === "abstract" && "font-semibold"} border-b-1 border-b-green-600 hover:text-green-600`}>
                            Abstract
                        </span>&nbsp;|&nbsp;
                    </>
                }
                {publicationData?.links &&
                    <>
                        <span onClick={() => setOpenedMenu("links")} className={`cursor-pointer ${openedMenu === "links" && "font-semibold"} border-b-1 border-b-green-600 hover:text-green-600`}>
                            Links
                        </span>&nbsp;|&nbsp;
                    </>
                }
                {publicationData?.bibTex &&
                    <>
                        <span onClick={() => setOpenedMenu("bibTex")} className={`cursor-pointer ${openedMenu === "abstract" && "font-semibold"} border-b-1 border-b-green-600 hover:text-green-600`}>
                            BibTeX
                        </span>&nbsp;|&nbsp;
                    </>
                }
                {publicationData?.tags &&
                    <span className="">
                        Tags:
                        {publicationData.tags.map((tag, i) =>
                            <span key={i} className="border-b-1 border-b-green-600 mx-1">
                                {tag}
                            </span>
                        )}
                    </span>
                }
            </p>
            {openedMenu &&
                <div>

                    {openedMenu && openedMenu === "abstract" &&
                        <p className="text-gray-600 text-[9px]">
                            {publicationData.abstract}
                        </p>}

                    {openedMenu && openedMenu === "links" &&
                        <ul className="p-4 list-none text-xs">

                            {publicationData.links.map((link, i) =>

                                <li key={i} className="flex">
                                    <TbWorld className="mr-4" />
                                    <Link
                                        href={link}
                                        className="text-green-600 underline">

                                        {link}
                                    </Link>
                                </li>
                            )}

                        </ul>}

                    {openedMenu && openedMenu === "bibTex" &&
                        <ul className="p-5 text-start">

                            {publicationData.bibTex.map((bibTex, i) =>
                                <li key={i}>
                                    {bibTex}
                                </li>
                            )}
                        </ul>
                    }
                    <span onClick={() => setOpenedMenu(null)} className={` text-[8px] cursor-pointer border-b-1 border-b-green-600 hover:text-green-600`}>
                        Close
                    </span>
                </div>
            }

        </div>
    </>;
}