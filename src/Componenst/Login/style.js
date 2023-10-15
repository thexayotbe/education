import { Input, Select } from "antd";
import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    width: 100%;
    border: none;
  }
`;

Wrapper.Content = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
Wrapper.Title = styled.h3`
  color: #2b2b2b;
  font-family: Gordita;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  padding-bottom: 20px;
`;
Wrapper.Descr = styled.p`
  color: rgba(43, 43, 43, 0.5);
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;
Wrapper.Label = styled.p`
  width: 100%;
  color: #2b2b2b;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 24px */
`;
Wrapper.Input = styled(Input)`
  display: flex;
  height: 50px;
  width: 380px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
`;
Wrapper.Select = styled(Select)`
  /* display: flex; */
  height: 50px;
  width: 380px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
`;

Wrapper.Button = styled.button`
  display: flex;
  width: 380px;
  padding: 12px 24px;
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
Wrapper.Img = styled.img`
  width: 50%;
  height: 90vh;
  border-radius: 20px;
`;
