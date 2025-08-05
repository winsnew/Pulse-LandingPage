"use client";

import React from "react";

const Wave: React.FC = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                overflow: "hidden",
                opacity: 0.85,
                pointerEvents: "none",
            }}
        >
            <video
                src="/assets/mp4/Cw9D8nOGuMDx0eVn02OhggPWXg.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    display: "block",
                    borderRadius: 0,
                    backgroundColor: "#000",
                    filter: "brightness(100%) saturate(0%) invert(0)", // agar warna berubah jadi putih
                }}
            />
        </div>
    );
};

export default Wave;
