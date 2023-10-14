import React from "react";
import progress from "../../assets/icons/progress.svg";
import charac from "../../assets/icons/charac.svg";
import { Wrapper } from "./style";
const Progress = () => {
  return (
    <Wrapper>
      <Wrapper.Img src={progress} />
      <Wrapper.Charac src={charac} />
      <Wrapper.ProgressLine />
      <Wrapper.Progress />
      <Wrapper.Level>1</Wrapper.Level>
    </Wrapper>
  );
};

export default Progress;
