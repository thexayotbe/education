import React from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./style";
import { lessons } from "../../utils";
import VideoCover from "../Generic/VideoCover";

const Courses = () => {
  const { menuOpen } = useSelector(({ menu }) => menu);
  return (
    <Wrapper menuOpen={menuOpen}>
      <Wrapper.MainCourses>
        <Wrapper.Title>Sizga yetishmayotkan bilimlar</Wrapper.Title>
        <Wrapper.Lessons>
          {lessons.map((value) => {
            return <VideoCover key={value.id} {...value} />;
          })}
        </Wrapper.Lessons>
      </Wrapper.MainCourses>
      <Wrapper.AddCourses>
        <Wrapper.Title>
          O`rtacha darajali o`quvchilar uchun bilimlar
        </Wrapper.Title>
        <Wrapper.Lessons>
          {lessons.map((value) => {
            return <VideoCover key={value.id} {...value} />;
          })}
        </Wrapper.Lessons>
      </Wrapper.AddCourses>
    </Wrapper>
  );
};

export default Courses;
