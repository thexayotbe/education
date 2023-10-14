import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  gap: 20px;
`;
Wrapper.Course = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  align-items: center;
  gap: 15px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
Wrapper.Title = styled.h3`
  color: #2b2b2b;
  font-family: Gordita;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  padding-bottom: 20px;
`;
Wrapper.TextCont = styled.div``;
Wrapper.Text = styled.p`
  color: rgba(43, 43, 43, 0.5);
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;
Wrapper.Img = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
`;
Wrapper.Button = styled.button`
  display: flex;
  width: 140px;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #2b2b2b;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
  color: #fff;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  margin-top: 30px;
  cursor: pointer;
`;
