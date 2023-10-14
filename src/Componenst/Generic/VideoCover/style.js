import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  height: 285px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer;
`;
Wrapper.Img = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
`;
Wrapper.Title = styled.h3`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 10px 15px;
`;
Wrapper.Time = styled.p`
  color: var(--Gray-2, #4f4f4f);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
