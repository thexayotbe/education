import React, { useState } from "react";
import { Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAnswer } from "../../../redux/transferSlice";
const QuizCard = ({ quiz, total }) => {
  const { selectedAnswer } = useSelector(({ transfer }) => transfer);

  const dispatch = useDispatch();
  const handler = (num) => {
    dispatch(setSelectedAnswer(num));
  };

  return (
    <Wrapper>
      <Wrapper.Number>{total}</Wrapper.Number>
      <Wrapper.Question>{quiz.question}</Wrapper.Question>
      <Wrapper.Variants>
        {quiz.options.map((value, index) => {
          return (
            <Wrapper.Variant
              key={index}
              className={selectedAnswer === index && "selected"}
              onClick={() => handler(index)}>
              {value}
            </Wrapper.Variant>
          );
        })}
      </Wrapper.Variants>
    </Wrapper>
  );
};

export default QuizCard;
