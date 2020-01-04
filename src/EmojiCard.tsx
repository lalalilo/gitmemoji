import React from "react";
import styled from "styled-components";
import colors from "./emoji-colors";
import { EmojiData } from "./EmojiData";

interface EmojiCardProps {
  emojiData: EmojiData;
  onClick: () => void;
  className?: string;
}

const EmojiCard: React.FC<EmojiCardProps> = ({
  emojiData,
  onClick,
  className
}) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      <EmojiWrapper
        style={{
          backgroundColor: colors[emojiData.name]
        }}
      >
        <Emoji>{emojiData.emoji}</Emoji>
      </EmojiWrapper>
      <CodeWrapper>
        <Code>{emojiData.code}</Code>
      </CodeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);

  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media screen and (max-width: 500px) {
    flex-direction: row;
  }
`;

const CardElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmojiWrapper = CardElement;
const CodeWrapper = styled(CardElement)`
  flex-grow: 1;
`;

const Emoji = styled.div`
  font-size: 80px;
  padding: 0.5em;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    padding: 0.1em;
  }
`;

const Code = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 1em;

  @media screen and (max-width: 600px) and (min-width: 500px) {
    font-size: 13px;
  }
  @media screen and (max-width: 700px) and (min-width: 600px) {
    font-size: 16px;
  }
  @media screen and (max-width: 800px) and (min-width: 700px) {
    font-size: 22px;
  }
  @media screen and (max-width: 850px) and (min-width: 800px) {
    font-size: 26px;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
    padding: 0.3em;
  }
`;

export default EmojiCard;
