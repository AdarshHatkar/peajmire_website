"use client";

export default function RootTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className={`relative flex flex-col justify-between overflow-hidden min-h-screen bg-white`}>
                {children}
            </div>
        </>
    );
}
