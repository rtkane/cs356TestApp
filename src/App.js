import React, { useState } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import PaginationDots from "./components/PaginationDots";
import "./App.css";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [bookmarked, setBookmarked] = useState([]);
  const [completed, setCompleted] = useState([]);

  const questions = [
    {
      text: "This is an example of a multiple-choice question:",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    },
    {
      text: "This is another question:",
      options: ["Option A", "Option B", "Option C", "Option D"],
    },
    {
      text: "Here's a different question:",
      options: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    },
    {
      text: "This is an example of a multiple-choice question:",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    },
    {
      text: "This is another question:",
      options: ["Option A", "Option B", "Option C", "Option D"],
    },
    {
      text: "Here's a different question:",
      options: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    },
    {
      text: "This is an example of a multiple-choice question:",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    },
    {
      text: "This is another question:",
      options: ["Option A", "Option B", "Option C", "Option D"],
    },
    {
      text: "Here's a different question:",
      options: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    },
    {
      text: "This is an example of a multiple-choice question:",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    },
    {
      text: "This is another question:",
      options: ["Option A", "Option B", "Option C", "Option D"],
    },
    {
      text: "Here's a different question:",
      options: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      // Mark the current question as completed when moving to the next question
      setCompleted((prev) => [...new Set([...prev, currentQuestion])]);
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const toggleBookmark = () => {
    if (bookmarked.includes(currentQuestion)) {
      setBookmarked(bookmarked.filter((q) => q !== currentQuestion));
    } else {
      setBookmarked([...bookmarked, currentQuestion]);
    }
  };

  return (
    <div className="app-container">
      <Header title="Section Title" questionNumber={currentQuestion + 1} />
      <QuestionCard
        question={questions[currentQuestion]}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isBookmarked={bookmarked.includes(currentQuestion)}
        onBookmark={toggleBookmark}
      />

      <PaginationDots
        totalQuestions={questions.length}
        currentQuestion={currentQuestion}
        bookmarked={bookmarked}
        completed={completed}
      />
    </div>
  );
};

export default App;
