import { StaticImageData } from "next/image";
import React from "react";

type TFigure = {
    title: string;
    medias?: string[] | StaticImageData[];
    description: JSX.Element;
}

export default function Figure({ description, medias, title }: TFigure) {
    return <>
        <figure>
            <h2 className="text-center text-[30px]  font-semibold mb-4">
                {title}
            </h2>

            {medias && (typeof medias[0] === "object" && "src" in medias[0]) &&
                <>

                    <div className="flex gap-2">
                        {medias.map((media, i) =>
                            <img key={i} src={media.src} className={`${medias.length > 0 ? "mx-auto" : "grow w-[49%] mx-auto"}`} alt="Image" />
                        )}
                    </div>
                </>
            }

            {medias && typeof medias[0] === "string" &&
                <video className="mx-auto" src={medias[0]} autoPlay muted controls loop></video>
            }

            <p className="text-gray-600 p-[10px] text-[16px] md:text-[18px] mb-6">
                {description}
            </p>

        </figure>
    </>;
}

