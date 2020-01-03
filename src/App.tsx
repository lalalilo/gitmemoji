import React from "react";
import styled from "styled-components";
import EmojiCard from "./EmojiCard";
import emojis from "./emojis.json";

const App: React.FC = () => {
  return (
    <AppWrapper>
      {emojis.gitmojis.map(emoji => (
        <EmojiCard emojiData={emoji} key={emoji.name} onClick={() => {}} />
      ))}
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  height: 100vh;
`;

export default App;
