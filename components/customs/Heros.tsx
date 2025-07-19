import React, { useEffect, useState, RefObject } from "react";
import { MouseParallax } from "react-just-parallax";

export const Gradient: React.FC = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] 
        bg-[size:22px_28px]"
                    aria-hidden="true"
                />

                {/* Radial Light */}
                <div
                    className="absolute left-1/2 top-[-20%] w-[700px] h-[700px] 
        md:w-[1000px] md:h-[1000px] 
        -translate-x-1/2 rounded-full 
        bg-[radial-gradient(circle_400px_at_center,#ffffff22,#000000)] 
        shadow-[0_0_120px_40px_rgba(255,255,255,0.06)]"
                    aria-hidden="true"
                />
            </div>
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
