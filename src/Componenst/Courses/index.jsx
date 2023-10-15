import React from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./style";
import { lessons } from "../../utils";
import VideoCover from "../Generic/VideoCover";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const { menuOpen } = useSelector(({ menu }) => menu);
  return (
    <Wrapper menuOpen={menuOpen}>
      <Wrapper.MainCourses>
        <Wrapper.Title>Mavjud bo`lgan kurslar:</Wrapper.Title>
        <Wrapper.Lessons>
          {lessons.map((value) => {
            return value.currently && <VideoCover key={value.id} {...value} />;
          })}
        </Wrapper.Lessons>
      </Wrapper.MainCourses>
      <Wrapper.AddCourses>
        <Wrapper.Title>Tez kunda boshlanadigon kurslar:</Wrapper.Title>
        <Wrapper.Lessons>
          {lessons.map((value) => {
            return !value.currently && <VideoCover key={value.id} {...value} />;
          })}
        </Wrapper.Lessons>
      </Wrapper.AddCourses>
    </Wrapper>
  );
};

export default Courses;
