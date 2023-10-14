import styled from "styled-components";

export const Wrapper = styled.div`
  .close {
    transform: translateX(-210px);
  }
  .item:hover {
    background-color: #2d9cdb;
  }
`;
Wrapper.Sidebar = styled.div`
  width: 300px;
  height: 100vh;
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.main_color};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 30px;
  transition: all ease-in 0.5s;
  z-index: 1;
`;
Wrapper.MenuItem = styled.div`
  display: flex;
  width: 222px;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-between;
  height: 50.917px;
  flex-shrink: 0;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  cursor: pointer;
  transition: all ease-in 0.2s;
  color: #fff;
`;
Wrapper.MenuTitle = styled.div``;
