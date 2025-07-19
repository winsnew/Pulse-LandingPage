import React from "react";

export const Gradient: React.FC = () => {
    return (
        <>
            <div className="fixed inset-0 -z-10 pointer-events-none">
                {/* Grid */}
                <div
                    className="absolute inset-0 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] 
        bg-[size:22px_28px]"
                    aria-hidden="true"
                />

                <div
                    className="absolute left-1/2 top-1/2 w-[1000px] h-[1000px]
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"
                    aria-hidden="true"
                />
            </div >
        </>
    );
};

// export const BottomLine: React.FC = () => {
//     return (
//         <>
//             <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
//         </>
//     );
// };


