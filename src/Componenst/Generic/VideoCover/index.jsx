import React from "react";
import { Wrapper } from "./style";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const VideoCover = ({ title, img, nav }) => {
  console.log(nav);
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(nav)}>
      <Wrapper.Img src={img} />
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Time>12-ta dars - 7-ta test</Wrapper.Time>
    </Wrapper>
  );
};

export default VideoCover;
