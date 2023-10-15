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
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(1);
  const [answerWrong, setAnswerWrong] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startTest = () => {
    let filtered = data.filter((value) => value.levels === level);
    setQuiz(filtered[Math.floor(Math.random() * filtered.length)]);
    setStart(true);
    if (total === 10) {
      setModalOpen(true);
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
      <Modal open={modalOpen} footer={false}>
        <Wrapper.Text>
          <Wrapper.Point>
            Siz berilagan 10 ta savoldan {amount}-ta tog`ri topdiz
          </Wrapper.Point>
          <Wrapper.Group>
            Ba siz bu natija bilan bizning{" "}
            {amount > 8 ? "Hard" : amount > 5 ? "Medium" : "Easy"} kursimizga
            tog`ri kelasiz
          </Wrapper.Group>
          <Wrapper.Button onClick={() => navigate("/courses")}>
            {" "}
            {amount > 8 ? "Hard" : amount > 5 ? "Medium" : "Easy"} kursiga
            o`tish`
          </Wrapper.Button>
        </Wrapper.Text>
      </Modal>
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
