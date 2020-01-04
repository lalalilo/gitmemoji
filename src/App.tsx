import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import "csshake";

import EmojiCard from "./EmojiCard";
import emojis from "./emojis.json";
import sampleSize from "lodash/sampleSize";
import shuffle from "lodash/shuffle";
import { EmojiData } from "./EmojiData";

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<EmojiData | null>(
    null
  );
  const [choices, setChoices] = useState<EmojiData[] | null>(null);
  const [shake, setShake] = useState<string | null>(null);

  const setNewQuestion = useCallback(() => {
    const [question, ...possibleAnswers] = sampleSize(emojis.gitmojis, 4);
    setCurrentQuestion(question);
    setChoices(shuffle([question, ...possibleAnswers]));
  }, []);

  useEffect(() => {
    setNewQuestion();
  }, [setNewQuestion]);

  if (!currentQuestion || !choices) {
    return null;
  }

  return (
    <Layout>
      <Question>{currentQuestion.description}</Question>
      <Choices>
        {choices.map(emoji => (
          <EmojiCard
            emojiData={emoji}
            key={emoji.name}
            className={shake === emoji.name ? "shake-hard" : ""}
            onClick={async () => {
              if (emoji.name === currentQuestion.name) {
                return setNewQuestion();
              }
              setShake(emoji.name);
              await new Promise(resolve => setTimeout(resolve, 1000));
              setShake(null);
            }}
          />
        ))}
      </Choices>
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

const Choices = styled.div`
  flex-grow: 1;
  margin: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 15px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default App;
