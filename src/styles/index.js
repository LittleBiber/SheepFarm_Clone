import styled from "styled-components";

export const Pin = styled.span`
  padding: 3px 38px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fff8e2;
  background: #a85c09;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 20px;
  margin-bottom: 25px;
  font-family: "Poppins";

  @media (max-width: 580px) {
    padding: 3px 28px !important;
    font-size: 14px !important;
  }
`;

export const Title = styled.div`
  color: ${({ color }) => color};

  font-family: Arvo;
  font-style: normal;
  font-weight: bold;
  font-size: 47px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 20px;

  text-shadow: 6px 6px 5px rgb(189 181 155 / 50%);

  @media (max-width: 1000px) {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.05em;
    margin-top: 50px;
  }
`;
