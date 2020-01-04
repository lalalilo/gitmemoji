import React from "react";
import GitHubButton from "react-github-btn";

const StylableGitHubButton: React.FC<{ className?: string }> = ({
  className
}) => {
  return (
    <div className={className}>
      <GitHubButton
        href="https://github.com/lalalilo/gitmemoji"
        data-color-scheme="no-preference: dark; light: light; dark: light;"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star lalalilo/gitmemoji on GitHub"
        data-show-count={true}
      >
        Star
      </GitHubButton>
    </div>
  );
};

export default StylableGitHubButton;
