import React from "react";
import styled from "styled-components";

const ModeSwitcher: React.FC<{ isHardMode: boolean; onClick: () => void }> = ({
  isHardMode,
  onClick
}) => {
  return <Switcher onClick={onClick}>{isHardMode ? "Hard" : "Easy"}</Switcher>;
};

const Switcher = styled.div`
  padding: 5px 10px;
  background-color: #000;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
`;

export default ModeSwitcher;
