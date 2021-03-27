import styled, { css } from "styled-components";

const googleStyles = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    border: none;
    color: #fff;
  }
`;

const invertStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
`;

const buttonStyles = ({ isGoogleButton, inverted }) => {
  if (isGoogleButton) {
    return googleStyles;
  } else if (inverted) {
    return invertStyles;
  } else {
    return css`
      background-color: black;
      color: white;
      border: none;

      &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    `;
  }
};

export const CustomButtonContainer = styled.button`
  min-width: 45%;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  border: none;
  ${buttonStyles}
`;
