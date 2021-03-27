import styled from "styled-components";

export const CheckoutContainer = styled.section`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.header`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-size: 18px;
`;

export const HeaderBlock = styled.li`
  text-transform: capitalize;
  width: 23%;
  list-style-type: none;

  &:last-child {
    width: 8%;
  }
`;

export const ItemsContainer = styled.ul`
  width: 100%;
`;

export const Total = styled.footer`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
