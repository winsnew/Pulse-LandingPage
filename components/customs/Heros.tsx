import React, { useEffect, useState, RefObject } from "react";
import { MouseParallax } from "react-just-parallax";

export const Gradient: React.FC = () => {
    return (
        <>
            <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
            <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
        </>
    );
};

export const BottomLine: React.FC = () => {
    return (
        <>
            <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
        </>
    );
};

const Rings: React.FC = () => {
    return (
        <>
            <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </>
    );
};

interface BackgroundCirclesProps {
    parallaxRef: RefObject<HTMLDivElement>;
}

export const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
            <Rings />
            <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                {[
                    { className: "w-2 h-2 -ml-1 -mt-36", rotate: "rotate-[46deg]" },
                    { className: "w-4 h-4 -ml-1 -mt-32", rotate: "-rotate-[56deg]" },
                    { className: "hidden w-4 h-4 -ml-1 mt-[12.9rem] xl:block", rotate: "rotate-[54deg]" },
                    { className: "w-3 h-3 -ml-1.5 mt-52", rotate: "-rotate-[65deg]" },
                    { className: "w-6 h-6 -ml-3 -mt-3", rotate: "-rotate-[85deg]" },
                    { className: "w-6 h-6 -ml-3 -mt-3", rotate: "rotate-[70deg]" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom ${item.rotate}`}
                    >
                        <div
                            className={`${item.className} bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        />
                    </div>
                ))}
            </MouseParallax>
        </div>
    );
};
