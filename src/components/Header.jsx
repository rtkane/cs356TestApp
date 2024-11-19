import React from "react";

const Header = ({ title, questionNumber }) => {
  return (
    <header className="header">
      <h2>{`Multiple Choice - Question ${questionNumber}`}</h2>
    </header>
  );
};

export default Header;
