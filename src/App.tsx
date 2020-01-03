import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import "csshake";

import EmojiCard from "./EmojiCard";
import emojis from "./emojis.json";
import sampleSize from "lodash/sampleSize";
import shuffle from "lodash/shuffle";
import { EmojiData } from "./EmojiData";
import Description from "./Description";

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
    <AppWrapper>
      <Description>{currentQuestion.description}</Description>
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
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #eee;
  padding: 1em;
`;

const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default App;
