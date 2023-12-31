import React, { useState } from "react";
import { allQuestions, answerTypes } from "../data/questions";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Anchor } from "./Anchor";

export default function PreviousQuestions({ questions, answers }) {
  const [showPrevious, setShowPrevious] = useState(false);

  return (
    <div className="prevForm">
      <h1>Анкета</h1>
      <div className="questions">
        {showPrevious &&
          questions.map((q) => {
            const question = allQuestions.find((aq) => aq.id === q);
            return (
              <div className="questions-item">
                <ReactMarkdown
                  components={{
                    a: Anchor,
                  }}
                >
                  {question.text}
                </ReactMarkdown>
                <span className="questions-answer">
                  {
                    answerTypes[question.answerType][
                      +answers[questions.findIndex((e) => e === q)]
                    ]
                  }
                </span>
              </div>
            );
          })}
      </div>

      {questions.length !== 0 && (
        <div className="prevButtonCont">
          <button
            className="prevButton"
            onClick={() => setShowPrevious((last) => !last)}
          >
            {showPrevious
              ? "Скрыть предыдущие вопросы"
              : "Вывести предыдущие вопросы"}
          </button>
        </div>
      )}
    </div>
  );
}
