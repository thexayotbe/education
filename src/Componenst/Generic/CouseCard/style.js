import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  height: 80px;
  align-self: stretch;
  border: 0.5px solid #e0e0e0;
  background: #fff;
  margin: 30px 0;
  border-radius: 20px;
  align-items: center;
`;
Wrapper.Img = styled.img`
  height: 80px;
`;
Wrapper.Info = styled.div``;
Wrapper.Title = styled.h3`
  color: var(--Gray-2, #4f4f4f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
Wrapper.Progress = styled.div`
  width: auto;
`;

Wrapper.Icons = styled.div`
  margin-left: auto;
  margin-right: 20px;
`;
