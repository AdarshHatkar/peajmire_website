"use client";
import contactBanner from "@assets/images/contactBanner.jpg";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaExclamation } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
type TContact = {
    name: string;
    email: string;
    message: string;
}
const ContactPage = () => {
    const { register, formState: { errors, touchedFields }, } = useForm<TContact>({ mode: "onBlur" });
    useEffect(() => {
        console.log("err", errors);
        console.log("tou", touchedFields);


    }, [errors]);


    return <>
        <div className="bg-[#dee1e3] min-h-screen">
            <div className="relative bg-blue-900 text-white md:py-24 py-8 md:h-[247px] h-[126px] before:z-10 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#1f28388c] ">
                <img src={contactBanner.src} alt="Image" className="absolute top-0 w-full h-full object-cover" />
                <div className="relative pb-24 z-20">

                    <h1 className="text-center md:text-[54px] text-[36px] font-semibold m-auto text-white">Contact</h1>
                </div>
            </div>

            <div className="relative md:top-[-45px] z-30 max-w-[1152px] w-[88%] mx-auto ">
                <main className=" bg-white  mx-auto md:p-14 py-14">
                    <h1 className=" md:text-[29px] text-[24px] font-semibold m-auto mb-4">
                        Thanks for stopping by. If you’d like to reach out, please send me a message below and I will be in touch soon.
                    </h1>
                    <p className="my-4">Fields marked with an <span className="text-[#00a14b]"> *</span> are required</p>
                    <form>
                        <div className="flex md:flex-row flex-col gap-4">
                            <label className="grow " htmlFor="name">
                                <p>NAME <span className="text-[#00a14b] text-[13px]">*</span></p>
                                <div className="w-full flex border-b-1 border-b-green-600 items-center">

                                    <input
                                        {...register("name", {
                                            required: { value: true, message: "Name is Required" },
                                        })}
                                        id="name"
                                        className="outline-none grow p-[10px] w-full " />
                                    {errors.name &&
                                        <FaExclamation className="text-white bg-red-600 text-[37px] p-[9px]" />
                                    }
                                    {touchedFields.name && !errors.name &&
                                        <TiTick className="self-center text-white bg-green-600 rounded-full text-[20px]" />
                                    }
                                </div>
                                {errors.name && (
                                    <p className="text-red-600 text-sm p-1">
                                        {errors.name.message}
                                    </p>
                                )}
                            </label>
                            <label className="grow " htmlFor="email">
                                <p>Email<span className="text-[#00a14b] text-[13px]">*</span></p>
                                <div className="w-full flex border-b-1 border-b-green-600 items-end">

                                    <input
                                        className="outline-none grow p-[10px] w-full "
                                        id="email"
                                        type="email"
                                        {...register("email", {
                                            required: { value: true, message: "Email is required" },
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                            }
                                        })}

                                    />
                                    {errors.email?.message &&
                                        <FaExclamation className="text-white bg-red-600 text-[37px] p-[9px]" />
                                    }
                                    {touchedFields.email && !errors.email &&
                                        <TiTick className="self-center text-white bg-green-600 rounded-full text-[20px]" />
                                    }
                                </div>
                                {errors.email && (
                                    <p className="text-red-600 text-sm p-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </label>

                        </div>

                        <label className="block mt-8 " htmlFor="message">
                            <p>Message<span className="text-[#00a14b] text-[13px]">*</span></p>
                            <div className="w-full flex border-b-1 border-b-green-600 items-end">

                                <input
                                    id="message"
                                    className="outline-none grow p-[10px] w-full "
                                    {...register("message", {
                                        required: { value: true, message: "Message is Required" },
                                    })}

                                />
                                {errors.message?.message &&
                                    <FaExclamation className="text-white bg-red-600 text-[37px] p-[9px]" />
                                }
                                {touchedFields.message && !errors.message &&
                                    <TiTick className="self-center text-white bg-green-600 rounded-full text-[20px]" />
                                }

                            </div>
                            {errors.message && (
                                <p className="text-red-600 text-sm p-1">
                                    {errors.message.message}
                                </p>
                            )}
                        </label>

                        <button className="mt-5 text-white outline-none px-4 py-1 border-b-1 border-b-green-600 hover:text-green-600 transition">
                            Submit
                        </button>

                    </form>
                </main>
            </div>
        </div>
    </>;
};
export default ContactPage;