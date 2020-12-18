import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GitHubButton from "./GithubButton";

const Home: React.FC = () => {
  return (
    <Layout>
      <Group>
        <Title>
          Git<b>me</b>moji
        </Title>
        <Description>
          Learn{" "}
          <ExternalLink href="https://gitmoji.carloscuesta.me/">
            gitmoji!
          </ExternalLink>
        </Description>
      </Group>
      <GitHubButton />
      <Group>
        <GoToQuiz to="/easy">Quiz for newbies</GoToQuiz>
        <GoToQuiz to="/hard">Quiz for gurus</GoToQuiz>
      </Group>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #80deea;
  min-height: 100vh;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 80px;
  font-weight: normal;
  margin: 10px;
`;

const Description = styled.div`
  font-size: 30px;
`;

const ExternalLink = styled.a`
  color: #ef584a;
  text-decoration: none;
`;

const GoToQuiz = styled(Link)`
  color: #ef584a;
  text-decoration: none;
  font-weight: bold;
  font-size: 40px;
  margin-top: 20px;
`;

export default Home;
