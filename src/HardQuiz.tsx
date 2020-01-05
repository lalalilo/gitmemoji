import React, { useState } from "react";
import styled from "styled-components";
import "csshake";

import useGitmojiQuiz from "./useGitmojiQuiz";
import MinimalEmojiCard from "./MinimalEmojiCard";
import emojis from "./emojis.json";

const HardQuiz: React.FC = () => {
  const { currentQuestion, setNewQuestion } = useGitmojiQuiz();
  const [shake, setShake] = useState<string | null>(null);

  if (!currentQuestion) {
    return null;
  }

  return (
    <Layout>
      <Question
        onClick={async () => {
          setShake(currentQuestion.name);
          await new Promise(resolve => setTimeout(resolve, 1000));
          setShake(null);
        }}
      >
        {currentQuestion.description}
      </Question>
      <HardGrid>
        {emojis.gitmojis.map(emoji => (
          <>
            <MinimalEmojiCard
              emojiData={emoji}
              key={emoji.code}
              className={shake === emoji.name ? "shake shake-constant" : ""}
              onClick={async () => {
                if (emoji.name === currentQuestion.name) {
                  return setNewQuestion();
                }
                setShake(emoji.name);
                await new Promise(resolve => setTimeout(resolve, 1000));
                setShake(null);
              }}
            />
          </>
        ))}
      </HardGrid>
    </Layout>
  );
};

const Layout = styled.div`
  min-height: 100vh;
  background-color: #eee;
`;

const Question = styled.div`
  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
  padding: 1em 0.5em;
  font-size: 30px;
  text-align: center;
  color: #555;
  font-weight: bold;
  background-color: #fff;
  position: sticky;
  top: 0;
`;

const Grid = styled.div`
  flex-grow: 1;
  padding: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const HardGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1000px) and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 900px) and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 800px) and (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 700px) and (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default HardQuiz;
