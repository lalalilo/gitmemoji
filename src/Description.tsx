import React from "react";
import styled from "styled-components";

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <DescriptionWrapper>{children}</DescriptionWrapper>;
};

const DescriptionWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
  padding: 2em;
  font-size: 30px;
  text-align: center;
  color: #555;
  font-weight: bold;
  background-color: #fff;
`;

export default Description;
