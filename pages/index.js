import PageLayout from "../components/PageLayout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

const graveContainer = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    img {
        width: 90vw;
        max-height: 70vh;
        object-fit: contain;
        margin-bottom: 10vh;
        filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5));
    }

    @media screen and (min-width: 782px) {
        img {
            width: 90vw;
            max-height: 70vh;
            object-fit: contain;
            margin-bottom: 2.5vh;
            filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.5));
        }
    }
`;

const floorContainer = css`
    width: 100vw;
    height: 30vh;
    background: #b5b5b6;
    -webkit-clip-path: polygon(0% 32%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 32%, 100% 0%, 100% 100%, 0% 100%);
    z-index: -1;
    position: absolute;
    bottom: 0;

    @media screen and (min-width: 782px) {
        height: 35vh;
    }
`;

const mainContainer = css`
    width: 100vw;
    height: 100vh;
    background: #898989;
    z-index: -2;
    position: absolute;
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

const Index = () => {
    const router = useRouter();
    console.log(router);

    return (
        <ThemeProvider theme={theme}>
            <div css={mainContainer}>
                <div css={logoContainer}>
                    <img src="../static/images/logo_jiff.png" />
                </div>
                <div css={floorContainer}></div>
                <div css={graveContainer}>
                    <img src="../static/images/grave.png" />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Index;
