import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.figure`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 15px;

  &:hover {
    .image {
      opacity: 0.7;
    }

    button {
      display: block;
      opacity: 0.75;
    }
  }
`;

export const CollectionImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooter = styled.footer`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ItemName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const ItemPrice = styled.span`
  width: 10%;
`;

export const Button = styled(CustomButton)`
  width: 80%;
  position: absolute;
  top: 255px;
  opacity: 0.7;
  display: none;
`;
