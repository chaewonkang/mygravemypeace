import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
    <Global
        styles={css`
            html,
            body {
                padding: 0;
                margin: 0;
                font-size: 24px;
            }
        `}
    />
);

export const basicStyles = css`
    background-color: white;
`;
