import React from "react";
import "./PaginationDots.css"; // Add CSS for styling

const PaginationDots = ({
  totalQuestions,
  currentQuestion,
  bookmarked,
  completed,
}) => {
  return (
    <div className="pagination-dots">
      {Array.from({ length: totalQuestions }).map((_, index) => {
        const isBookmarked = bookmarked.includes(index);
        const isCompleted = completed.includes(index);

        return (
          <span
            key={index}
            className={`dot ${
              isCompleted
                ? "completed"
                : isBookmarked
                ? "bookmarked"
                : currentQuestion === index
                ? "active"
                : ""
            }`}
          ></span>
        );
      })}
    </div>
  );
};

export default PaginationDots;
