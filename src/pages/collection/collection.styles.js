import styled from "styled-components";

export const CollectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px 10px;
`;
