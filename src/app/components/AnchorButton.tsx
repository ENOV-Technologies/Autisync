import styled, { css } from "styled-components";

// Base anchor styles
const anchorBase = css`
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.5s, background 0.3s;
  z-index: 1;
  border-radius: 3px;
  font-weight: 500;
  text-decoration: none; /* remove underline */

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    height: 150px;
    width: 200px;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  &:hover:before {
    top: -30px;
    left: -30px;
  }

  &:active:before {
    transition: background 0s;
  }
`;

// Size variants
const sizeStyles = {
  sm: css`
    width: 6.5em;
    height: 2.2em;
    font-size: 14px;
    line-height: 2.1em;
  `,
  md: css`
    width: 8em;
    height: 2.6em;
    font-size: 16px;
    line-height: 2.5em;
  `,
  lg: css`
    width: 10em;
    height: 3em;
    font-size: 18px;
    line-height: 2.9em;
  `,
};

// Styled Anchor
export const AnchorButton = styled.a<{
  variant: "primary" | "alt";
  size: "sm" | "md" | "lg";
}>`
  ${anchorBase};
  ${({ size }) => sizeStyles[size]};
  border: 2px solid #B98B2F;

  ${({ variant }) =>
    variant === "primary"
      ? css`
          color: #B98B2F;
          background: transparent;

          &:before {
            background: #B98B2F;
          }

          &:hover {
            color: #fff;
          }

          &:active:before {
            background: #B98B2F;
          }
        `
      : css`
          background: #B98B2F;
          color: #fff;

          &:before {
            background: #fff;
          }

          &:hover {
            color: #B98B2F;
          }

          &:active:before {
            background: #f0f0f0;
          }
        `}
`;