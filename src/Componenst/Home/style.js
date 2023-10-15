import { Select } from "antd";
import styled from "styled-components";
export const Wrapper = styled.div``;

Wrapper.Content = styled.div`
  margin-left: ${({ menuOpen }) => (menuOpen ? "90px" : "300px")};
  width: auto;
  min-height: 100vh;
  background-color: #fff;
  transition: all ease-in 0.5s;
  padding: 20px;
  display: flex;
  gap: 30px;
`;
Wrapper.MainPart = styled.div`
  width: 980px;
  /* background-color: red; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Wrapper.Title = styled.h3`
  color: var(--Gray-1, #333);
  font-family: Gilroy-Medium;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  width: 94%;
  height: 45px;
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
`;
Wrapper.StatusGrid = styled.div`
  display: flex;
  align-items: center;
  height: 121px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25),
    0px 0px 2px 0px rgba(0, 0, 0, 0.25);
`;
Wrapper.StatusItem = styled.div`
  width: 233px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 70px;
  justify-content: center;
  border-right: 1px solid #d9d9d9;
  gap: 10px;
`;
Wrapper.Icon = styled.img`
  width: 30px;
`;
Wrapper.Text = styled.p`
  color: #1c1b1f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
Wrapper.Courses = styled.div`
  width: 95%;
`;
Wrapper.Select = styled(Select)`
  width: 150px;
  height: 29px;
  border-radius: 15px;
`;
Wrapper.Widjets = styled.div`
  width: 360px;
  /* background-color: blue; */
  height: 100vh;
`;
