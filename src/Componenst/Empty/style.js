import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 30px;
  .btn:hover {
    background-color: #fff;
    color: black;
  }
`;
Wrapper.Title = styled.h3`
  color: #084236;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
Wrapper.Descr = styled.p``;
Wrapper.Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.main_color};
  border: 1px solid ${({ theme }) => theme.main_color};
  color: #fff;
  font-size: 20px;
  transition: ease-in-out 0.4s;
`;
