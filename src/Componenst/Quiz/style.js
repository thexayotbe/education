import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.add_color};
`;
Wrapper.QuizSection = styled.div``;
Wrapper.Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
Wrapper.Button = styled.button`
  width: 150px;
  height: 50px;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.main_color};
`;
Wrapper.Text = styled.div`
  height: 200px;
  padding-top: 40px;
  text-align: center;
`;
Wrapper.Point = styled.h3``;
Wrapper.Group = styled.p``;
