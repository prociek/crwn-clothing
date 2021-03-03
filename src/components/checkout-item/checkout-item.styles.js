import styled from "styled-components";

export const CheckoutItemContainer = styled.li`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.figure`
  width: 23%;
  padding-right: 15px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemGroup = styled.div`
  width: 23%;
`;

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  width: 23%;
`;

export const ArrowContainer = styled.div`
  cursor: pointer; ;
`;

export const Value = styled.span`
  padding: 10px;
  transform: translateY(3px);
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  font-size: 30px;
  cursor: pointer;
`;
