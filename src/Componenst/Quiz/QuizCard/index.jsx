import React from "react";
import { Wrapper } from "./style";

const QuizCard = () => {
  return (
    <Wrapper>
      <Wrapper.Number>1</Wrapper.Number>
      <Wrapper.Question>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.{" "}
      </Wrapper.Question>
      <Wrapper.Variants>
        <Wrapper.Variant>1</Wrapper.Variant>
        <Wrapper.Variant className="selected">12</Wrapper.Variant>
        <Wrapper.Variant>123</Wrapper.Variant>
        <Wrapper.Variant>1234</Wrapper.Variant>
      </Wrapper.Variants>
    </Wrapper>
  );
};

export default QuizCard;
