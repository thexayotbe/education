import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: ${({ menuOpen }) => (menuOpen ? "90px" : "300px")};
  display: flex;
  gap: 50px;
`;
Wrapper.Back = styled.div`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
`;
Wrapper.Title = styled.h3`
  margin-top: 30px;
  color: var(--Gray-3, #828282);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
Wrapper.Menu = styled.div`
  height: 100vh;
  width: 290px;
  background: #f9f9f9;
  padding: 30px;
`;

Wrapper.MenuItem = styled.div`
  margin: 10px 0;
  display: flex;
  width: 229px;
  height: 50px;
  padding: 12px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
Wrapper.Content = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
