import { useState, useCallback, useEffect } from "react";
import shuffle from "lodash/shuffle";
import sampleSize from "lodash/sampleSize";

import { EmojiData } from "./EmojiData";
import emojis from "./emojis.json";

const useGitmojiQuizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<EmojiData | null>(
    null
  );
  const [choices, setChoices] = useState<EmojiData[] | null>(null);

  const setNewQuestion = useCallback(() => {
    const [question, ...possibleAnswers] = sampleSize(emojis.gitmojis, 4);
    setCurrentQuestion(question);
    setChoices(shuffle([question, ...possibleAnswers]));
  }, []);

  useEffect(() => {
    setNewQuestion();
  }, [setNewQuestion]);

  return { currentQuestion, choices, setNewQuestion };
};

export default useGitmojiQuizz;
