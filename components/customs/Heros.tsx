import React from "react";
import Wave from "./WaveParticle";

export const Gradient: React.FC = () => {
    return (
        <>
            <div className="fixed inset-0 -z-10 pointer-events-none">
                {/* Grid */}
                {/* <div
                    className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
                    aria-hidden="true"
                /> */}
                
                {/* <div
                    className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"
                    aria-hidden="true"
                /> */}
                <Wave/>
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


