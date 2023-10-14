import React from "react";
import { Wrapper } from "./style";
import { BsThreeDots } from "react-icons/bs";
import ec1 from "../../../assets/icons/ec1.svg";
import ec2 from "../../../assets/icons/ec2.svg";
import { Progress } from "antd";
const CourseCard = ({ id, title, progress }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={id % 2 === 0 ? ec1 : ec2} />
      <Wrapper.Info>
        <Wrapper.Title>{title}</Wrapper.Title>
        <Wrapper.Progress>
          <Progress
            percent={progress}
            strokeWidth="6px"
            style={{ width: "150px" }}
          />
        </Wrapper.Progress>
      </Wrapper.Info>
      <Wrapper.Icons>
        <BsThreeDots />
      </Wrapper.Icons>
    </Wrapper>
  );
};

export default CourseCard;
