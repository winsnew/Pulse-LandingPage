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
                opacity: 0.8,
                pointerEvents: "none",
            }}
        >
            <video
                src="/assets/mp4/Cw9D8nOGuMDx0eVn02OhggPWXg.mp4"
                poster="/assets/mp4/static.png"
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
                    display: "block fixed",
                    borderRadius: 0,
                    backgroundColor: "#000",
                    filter: "brightness(100%) saturate(0%) invert(0)", // agar warna berubah jadi putih
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(15,15,26,0.2) 30%, #000 100%)",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
};

export default Wave;
