import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: ${({ menuOpen }) => (menuOpen ? "90px" : "300px")};
  padding: 20px;
`;
Wrapper.MainCourses = styled.div``;
Wrapper.Lessons = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;
Wrapper.AddCourses = styled.div`
  display: none !important;
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
