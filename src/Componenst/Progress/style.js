import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 920px;
`;
Wrapper.Img = styled.img`
  border-radius: 10px;
`;
Wrapper.Charac = styled.img`
  position: absolute;
  left: 0%;
  bottom: 50px;
`;
Wrapper.ProgressLine = styled.div`
  width: 740px;
  border-radius: 50px;
  background: #d1adff;
  height: 5px;
  position: absolute;
  bottom: 37px;
  left: 32px;
`;
Wrapper.Progress = styled.div`
  position: absolute;
  bottom: 37px;
  left: 32px;
  height: 5px;
  border-radius: 50px;
  width: 00%;
  background-color: #9747ff;
`;
Wrapper.Level = styled.h3`
  font-size: 30px;
  color: #fff;
  position: absolute;
  right: 8%;
  bottom: 69px;
`;
