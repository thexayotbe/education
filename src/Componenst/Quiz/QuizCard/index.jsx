import React, { useState } from "react";
import { Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAnswer } from "../../../redux/transferSlice";
const QuizCard = ({ quiz, total }) => {
  const { selectedAnswer } = useSelector(({ transfer }) => transfer);
  console.log(total);
  const dispatch = useDispatch();
  const handler = (num) => {
    dispatch(setSelectedAnswer(num));
  };

  return (
    <Wrapper>
      <Wrapper.Number>{total}</Wrapper.Number>
      <Wrapper.Question>{quiz?.title}</Wrapper.Question>
      <Wrapper.Variants>
        <Wrapper.Variant
          className={selectedAnswer === quiz?.optionA && "selected"}
          onClick={() => handler(quiz?.optionA)}>
          {quiz?.optionA}
        </Wrapper.Variant>
        <Wrapper.Variant
          className={selectedAnswer === quiz?.optionB && "selected"}
          onClick={() => handler(quiz?.optionB)}>
          {quiz?.optionB}
        </Wrapper.Variant>
        <Wrapper.Variant
          className={selectedAnswer === quiz?.optionC && "selected"}
          onClick={() => handler(quiz?.optionC)}>
          {quiz?.optionC}
        </Wrapper.Variant>
        <Wrapper.Variant
          className={selectedAnswer === quiz?.optionD && "selected"}
          onClick={() => handler(quiz?.optionD)}>
          {quiz?.optionD}
        </Wrapper.Variant>
      </Wrapper.Variants>
    </Wrapper>
  );
};

export default QuizCard;
