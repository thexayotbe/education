import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import { Wrapper } from "./style";
import { tests } from "../../utils/test";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAnswer } from "../../redux/transferSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "antd";

const Quiz = () => {
  const { selectedAnswer } = useSelector(({ transfer }) => transfer);
  const [start, setStart] = useState(false);
  const [data, setData] = useState(tests);
  const [quiz, setQuiz] = useState();
  const [level, setLevel] = useState("easy");
  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(1);
  const [answerWrong, setAnswerWrong] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startTest = () => {
    let filtered = data.filter((value) => value.levels === level);
    setQuiz(filtered[Math.floor(Math.random() * filtered.length)]);
    console.log(quiz, amount);
    setStart(true);
    if (total === 10) {
      navigate("/courses/math/122");
      console.log(22);
      setTotal(0);
      setStart(false);
      return;
    }
  };
  const check = () => {
    console.log(quiz);
    setTotal(total + 1);
    if (quiz.answeroptions === selectedAnswer) {
      setAmount(amount + 1);
    } else setAnswerWrong([...answerWrong, quiz]);
    if (amount > 3) setLevel("medium");
    else if (amount > 8) setLevel("hard");
    else setLevel("easy");
    dispatch(setSelectedAnswer());
    startTest();
  };
  const getPostsData = () => {
    axios
      .get("https://idrokapi-production.up.railway.app/api/v1/")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error, 22));
  };
  useEffect(() => getPostsData(), []);

  useEffect(
    () => setData(data.filter((value) => value.id !== quiz?.id)),
    [quiz]
  );
  return (
    <>
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
    </>
  );
};

export default Quiz;
