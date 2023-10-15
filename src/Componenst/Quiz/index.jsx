import React, { useState } from "react";
import QuizCard from "./QuizCard";
import { Wrapper } from "./style";
import { tests } from "../../utils/test";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAnswer } from "../../redux/transferSlice";

const Quiz = () => {
  const { selectedAnswer } = useSelector(({ transfer }) => transfer);
  const [start, setStart] = useState(false);
  const [data, setData] = useState(tests);
  const [quiz, setQuiz] = useState();
  const [level, setLevel] = useState("easy");
  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(1);
  const dispatch = useDispatch();
  const startTest = () => {
    let filtered = data.filter((value) => value.difficulty === level);
    setQuiz(filtered[Math.floor(Math.random() * filtered.length)]);
    console.log(quiz, amount);
    setStart(true);
    setTotal(1);
  };
  const check = () => {
    setTotal(total + 1);
    if (total === 20) {
      setStart(false);
      return;
    }
    if (quiz.correctIndex === selectedAnswer) {
      setData(data.filter((value) => value.id !== quiz.id));
      setAmount(amount + 1);
    }
    if (amount > 5) setLevel("medium");
    else if (amount > 14) setLevel("hard");
    else setLevel("easy");
    dispatch(setSelectedAnswer());
    startTest();
  };
  return (
    <Wrapper>
      {!start ? (
        <Wrapper.Button onClick={startTest}>Testni boshlash</Wrapper.Button>
      ) : (
        <>
          <QuizCard quiz={quiz} total={total} />
          <Wrapper.Buttons>
            <Wrapper.Button>Tashlab ketish</Wrapper.Button>
            <Wrapper.Button onClick={check}>Kiyingisi</Wrapper.Button>
          </Wrapper.Buttons>
        </>
      )}
    </Wrapper>
  );
};

export default Quiz;
