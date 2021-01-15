import * as React from "react";
import styled from "styled-components";
import colors from "./emoji-colors";
import { EmojiData } from "./EmojiData";

interface EmojiCardProps {
  emojiData: EmojiData;
  onClick: () => void;
  className?: string;
}

const MinimalEmojiCard: React.FC<EmojiCardProps> = ({
  emojiData,
  onClick,
  className,
}) => {
  return (
    <Emoji
      style={{
        backgroundColor: colors[emojiData.name],
      }}
      onClick={onClick}
      className={className}
    >
      {emojiData.emoji}
    </Emoji>
  );
};

const Emoji = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 80px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export default MinimalEmojiCard;
