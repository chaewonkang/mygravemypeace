import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Link from "next/link";

const mainGrave = css`
    width: 50%;
    height: 70%;
    display: flex;
    position: absolute;
    left: 15%;

    bottom: 2.5%;
    margin-bottom: 0;
    align-items: flex-end;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5));
    }

    @media screen and (max-width: 782px) {
        width: 90%;
        height: 50%;
        display: flex;
        position: absolute;
        left: 2%;

        bottom: 2.5%;
        margin-bottom: 0;
        align-items: flex-end;
        justify-content: center;
    }
`;

const leftTopGrave = css`
    width: 50%;
    height: 70%;
    display: flex;
    position: absolute;
    z-index: -1;
    left: -20%;

    bottom: 2.5%;
    margin-bottom: 0;
    align-items: flex-end;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;

        filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5));
    }

    @media screen and (max-width: 782px) {
        display: none;
    }
`;

const leftRightGrave = css`
    width: 50%;
    height: 70%;
    display: flex;
    position: absolute;
    right: 0;

    bottom: 2.5%;
    margin-bottom: 0;
    align-items: flex-end;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;

        filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5));
    }

    @media screen and (max-width: 782px) {
        display: none;
    }
`;

const bearGrave = css`
    width: 15%;
    height: 20%;
    display: flex;
    z-index: 100;
    position: absolute;
    right: 0;
    bottom: 10%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5));
    }

    @media screen and (max-width: 782px) {
        width: 20%;
        height: 15%;
        display: flex;
        z-index: 1;
        position: fixed;
        right: 2.5%;
        bottom: 10%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        z-index: 100;
    }
`;

const crossGrave = css`
    width: 20%;
    max-height: 40%;
    height: 30%;
    display: flex;
    position: absolute;
    left: 20%;
    bottom: 2.5%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5));
    }

    @media screen and (max-width: 782px) {
        display: none;
    }
`;

const woodGrave = css`
    width: 20%;
    max-height: 40%;
    height: 30%;
    display: flex;
    position: absolute;
    left: 57.5%;
    bottom: 2.5%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5));
    }

    @media screen and (max-width: 782px) {
        display: none;
    }
`;

const floorContainer = css`
    width: 100%;
    height: 30%;
    background: #b5b5b6;
    -webkit-clip-path: polygon(0% 32%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 32%, 100% 0%, 100% 100%, 0% 100%);
    z-index: -1;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 782px) {
        height: 23.5%;
    }
`;

const glitches = css`
    position: fixed;
    width: auto;
    height: auto;
    top: 20%;
    margin-left: 10px;
`;

const glitches2 = css`
    position: fixed;
    width: auto;
    height: auto;
    top: calc(20% + 20px);
    margin-left: 10px;
    font-size: 16px;
`;

const main = css`
    color: #fff;
    animation: fade 10s infinite;
    font-family: "Source code", monospace; ;
`;

const letters = css`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    color: #fff;
    filter: blur(2px);
    font-family: "Source code", monospace;
`;

const letter = css`
    animation: up 10s infinite linear;
    margin: 0;
    width: 100%;

    &:nth-child(1) {
        animation-delay: 0.3s;
    }
    &:nth-child(2) {
        animation-delay: 0.4s;
    }
    &:nth-child(3) {
        animation-delay: 0.2s;
    }
    &:nth-child(4) {
        animation-delay: 0.1s;
    }
    &:nth-child(5) {
        animation-delay: 0.2s;
    }
`;

const mainContainer = css`
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-iamge: url("../static/images/texture.jpeg");
    background: rgba(50, 50, 50, 0.8);
    z-index: -2;
    position: absolute;
    // background: linear-gradient(
    //     180deg,
    //     rgba(2, 0, 36, 100),
    //     rgba(98, 98, 98, 100),
    //     rgba(77, 108, 115, 88),
    //     rgba(98, 98, 98, 100),
    //     rgba(255, 240, 258, 59),
    //     rgba(2, 0, 36, 100)
    // );
    background-size: 400% 400%;
    animation: gradient 20s ease infinite;
`;

const logoContainer = css`
    width: 60px;
    height: auto;
    position: fixed;
    right: 20px;
    bottom: 20px;

    img {
        width: 100%;
    }

    @media screen and (min-width: 782px) {
        width: 100px;
    }
`;

const shadowContainer = css`
    width: 30%;
    height: 50%;
    position: absolute;
    bottom: 20%;
    z-index: 1;
    -webkit-animation: moveFromRight 25s infinite;
    animation: moveFromRight 25s infinite;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media screen and (max-width: 782px) {
        width: 30%;
        height: 50%;
        position: absolute;
        bottom: 15%;
        -webkit-animation: moveFromRight 45s infinite;
        animation: moveFromRight 45s infinite;
    }
`;

const shadowArr = [
    "../static/images/shadow_1.png",
    "../static/images/shadow_2.png",
    "../static/images/shadow_3.png",
    "../static/images/shadow_4.png",
    "../static/images/shadow_5.png",
    "../static/images/shadow_6.png",
    "../static/images/shadow_7.png",
    "../static/images/shadow_8.png",
    "../static/images/shadow_9.png",
    "../static/images/shadow_10.png",
    "../static/images/shadow_11.png",
    "../static/images/shadow_12.png",
    "../static/images/shadow_13.png",
];

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== "undefined") {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

const Index = () => {
    const router = useRouter();
    const size = useWindowSize();
    const [shadowId, setShadowId] = useState(0);

    useEffect(() => {
        setShadowId(Math.floor(Math.random() * shadowArr.length));
        window.$ = window.jQuery = require("jquery");

        var makeItRain = function () {
            //clear out everything
            $(".rain").empty();

            var increment = 0;
            var drops = "";
            var backDrops = "";

            while (increment < 100) {
                //couple random numbers to use for various randomizations
                //random number between 98 and 1
                var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
                //random number between 5 and 2
                var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
                //increment
                increment += randoFiver;
                //add in a new raindrop with various randomizations to certain CSS properties
                drops +=
                    '<div class="drop" style="left: ' +
                    increment +
                    "%; bottom: " +
                    (randoFiver + randoFiver - 1 + 85) +
                    "%; animation-delay: 0." +
                    randoHundo +
                    "s; animation-duration: 0.5" +
                    randoHundo +
                    's;"><div class="stem" style="animation-delay: 0.' +
                    randoHundo +
                    "s; animation-duration: 0.5" +
                    randoHundo +
                    's;"></div><div class="splat" style="animation-delay: 0.' +
                    randoHundo +
                    "s; animation-duration: 0.5" +
                    randoHundo +
                    's;"></div></div>';
                backDrops +=
                    '<div class="drop" style="right: ' +
                    increment +
                    "%; bottom: " +
                    (randoFiver + randoFiver - 1 + 400) +
                    "%; animation-delay: 0." +
                    randoHundo +
                    "s; animation-duration: 1.5" +
                    randoHundo +
                    's;"><div class="stem" style="animation-delay: 0.' +
                    randoHundo +
                    "s; animation-duration: 2.5" +
                    randoHundo +
                    's;"></div><div class="splat" style="animation-delay: 0.' +
                    randoHundo +
                    "s; animation-duration: 3.5" +
                    randoHundo +
                    's;"></div></div>';
            }

            $(".rain.front-row").append(drops);
            $(".rain.back-row").append(backDrops);
        };

        makeItRain();
    }, []);

    const scriptArr = ["King", "Lear,", "Fear", "and", "Loathing"];
    const scriptArr2 = ["Jean–", "Luc", "Godard, ", "Suisse, ", "1987"];

    return (
        <div
            style={{
                width: `${size.width}px`,
                height: `${size.height}px`,
            }}
        >
            <div css={mainContainer}>
                <div className="body">
                    <div className="back-row-toggle splat-toggle">
                        <div className="rain front-row"></div>
                        <div className="rain back-row"></div>
                    </div>
                </div>
                <div css={shadowContainer}>
                    <img src={shadowArr[shadowId]} />
                </div>
                <div css={logoContainer}>
                    <img src="../static/images/logo_jiff.png" />
                </div>
                <div css={floorContainer}></div>
                <div css={mainGrave}>
                    <img src="../static/images/grave.png" />
                </div>
                <div css={leftTopGrave}>
                    <img src="../static/images/grave_5.png" />
                </div>
                <div css={leftRightGrave}>
                    <img src="../static/images/grave_7.png" />
                </div>

                <div css={crossGrave}>
                    <img src="../static/images/grave_2.png" />
                </div>
                <div css={woodGrave}>
                    <img src="../static/images/grave_3.png" />
                </div>
                <div css={glitches}>
                    <span css={main}>King Lear, Fear and Loathing</span>
                    <div css={letters}>
                        {scriptArr.map(v => {
                            return <span css={letter}>{v}&nbsp;</span>;
                        })}
                    </div>
                </div>
                <div css={glitches2}>
                    <span css={main}>Jean-Luc Godard, Suisse, 1987</span>
                    <div css={letters}>
                        {scriptArr2.map(v => {
                            return <span css={letter}>{v}&nbsp;</span>;
                        })}
                    </div>
                </div>
            </div>
            <Link href="https://instagram.com/yinyang.fig" target="_blank">
                <div css={bearGrave}>
                    <img src="../static/images/grave_1.png" />
                </div>
            </Link>
        </div>
    );
};

export default Index;
