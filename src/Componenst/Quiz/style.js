import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.add_color};
`;
