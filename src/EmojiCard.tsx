import React from "react";
import styled from "styled-components";
import colors from "./emoji-colors";

interface EmojiData {
  emoji: string;
  entity?: string;
  code: string;
  description: string;
  name: string;
}

interface EmojiCardProps {
  emojiData: EmojiData;
  onClick: () => void;
}

const EmojiCard: React.FC<EmojiCardProps> = ({ emojiData, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Emoji
        style={{
          backgroundColor: (colors as any)[emojiData.name] as any
        }}
      >
        {emojiData.emoji}
      </Emoji>
      <Code>{emojiData.code}</Code>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  height: 285px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
  margin: 1em;

  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const Emoji = styled.div`
  font-size: 80px;
  padding: 0.5em;
  text-align: center;
`;

const Code = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 1em;
  text-align: center;
`;

export default EmojiCard;
