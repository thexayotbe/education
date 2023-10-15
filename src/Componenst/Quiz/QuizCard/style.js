import styled from "styled-components";

export const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  background-color: #fff;
  border-radius: 30px;
  padding: 60px;
  border: 2px solid ${({ theme }) => theme.main_color};

  .selected {
    background-color: ${({ theme }) => theme.add_color};
    border: 2px solid ${({ theme }) => theme.main_color};
  }
`;
Wrapper.Number = styled.h4`
  font-size: 28px;
  color: ${({ theme }) => theme.main_color};
`;

Wrapper.Question = styled.h3`
  color: #2b2b2b;
  font-family: Gordita;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  padding: 30px 0;
`;
Wrapper.Variants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
Wrapper.Variant = styled.h3`
  padding: 10px;
  width: 680px;
  height: 45px;
  border: 1px solid rgba(43, 43, 43, 0.5);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;
`;
