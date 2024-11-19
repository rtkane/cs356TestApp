import React from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const QuestionCard = ({
  question,
  questions = [], // Default to an empty array if `questions` is not provided
  onNext,
  onPrevious,
  isBookmarked,
  onBookmark,
}) => {
  return (
    <div className="question-card">
      <div className="question-header">
        <p>{question.text}</p>
        <button
          onClick={onBookmark}
          className={`bookmark-btn ${isBookmarked ? "bookmarked" : ""}`}
        >
          <FontAwesomeIcon icon={faBookmark} />{" "}
        </button>
      </div>
      <div className="options">
        {question.options.map((option, index) => (
          <label key={index}>
            <input type="radio" name="answer" />
            {option}
          </label>
        ))}
      </div>
      <div className="actions">
        <button className="left" onClick={onPrevious}>
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>
        <button className="right" onClick={onNext}>
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
