import React from "react";
import { Wrapper } from "./style";
import { BsFillPersonFill } from "react-icons/bs";
const VideoCover = ({ title, img }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={img} />
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Time>12-ta dars - 7-ta test</Wrapper.Time>
    </Wrapper>
  );
};

export default VideoCover;
