import React, { useState } from "react";
import { Wrapper } from "./style";
import Progress from "../Progress";
import course from "../../assets/icons/couse.svg";
import quiz from "../../assets/icons/quiz.svg";
import proto from "../../assets/icons/proto.svg";
import time from "../../assets/icons/time.svg";
import { courses, level } from "../../utils";
import CourseCard from "../Generic/CouseCard";
import { useSelector } from "react-redux";
import { Select } from "antd";
import { Option } from "antd/es/mentions";
const Home = () => {
  const [levelCr, setLevelCr] = useState("easy");
  const { menuOpen } = useSelector(({ menu }) => menu);
  return (
    <Wrapper>
      <Wrapper.Content menuOpen={menuOpen}>
        <Wrapper.MainPart>
          <Wrapper.Title>Jarayon</Wrapper.Title>
          <Progress />
          <Wrapper.Title>Asosiy statistikalar</Wrapper.Title>
          <Wrapper.StatusGrid>
            <Wrapper.StatusItem>
              <Wrapper.Icon src={course} />
              <Wrapper.Text>Kurslar 0/7</Wrapper.Text>
            </Wrapper.StatusItem>
            <Wrapper.StatusItem>
              <Wrapper.Icon src={quiz} />
              <Wrapper.Text>Testlar 0/70</Wrapper.Text>
            </Wrapper.StatusItem>
            <Wrapper.StatusItem>
              <Wrapper.Icon src={proto} />
              <Wrapper.Text>Loyixalar 0</Wrapper.Text>
            </Wrapper.StatusItem>
            <Wrapper.StatusItem>
              <Wrapper.Icon src={time} />
              <Wrapper.Text>O`rganilgan vaqt 0</Wrapper.Text>
            </Wrapper.StatusItem>
          </Wrapper.StatusGrid>
          <Wrapper.Title>
            Oqilyotgan kurslar
            <Wrapper.Select
              options={level}
              defaultValue={"easy"}
              onChange={(e) => setLevelCr(e)}
            />
          </Wrapper.Title>

          <Wrapper.Courses>
            {courses.map((value, index) => {
              return levelCr === value.level || levelCr === "all" ? (
                <CourseCard key={value.id} {...value} />
              ) : (
                ""
              );
            })}
          </Wrapper.Courses>
        </Wrapper.MainPart>
        <Wrapper.Widjets></Wrapper.Widjets>
      </Wrapper.Content>
    </Wrapper>
  );
};

export default Home;
