import * as React from "react";
import styled from "styled-components";

const GitHubButton: React.FC = () => {
  return (
    <Button href="https://github.com/lalalilo/gitmemoji">
      <span role="img" aria-label="star">
        ⭐️
      </span>{" "}
      Github
    </Button>
  );
};

const Button = styled.a`
  background-color: #a78674;
  color: #fff;
  box-shadow: 0 4px #795548;

  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  padding: 0.75em 1em;
  transition: none;
  margin: 0.25em 0;
  position: relative;

  text-decoration: none;

  &:hover {
    top: 2px;
    box-shadow: 0 2px #795548;
  }
`;

export default GitHubButton;
