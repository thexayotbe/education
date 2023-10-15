import React from "react";
import { Wrapper } from "./style";
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineQuiz } from "react-icons/md";
import { AiOutlineBook, AiOutlineVideoCamera } from "react-icons/ai";
import ReactPlayer from "react-player";
const LessonPage = () => {
  const { menuOpen } = useSelector(({ menu }) => menu);
  return (
    <Wrapper menuOpen={menuOpen}>
      <Wrapper.Menu>
        <Wrapper.Back>
          <BiArrowBack /> orqaga
        </Wrapper.Back>
        <Wrapper.Title>Darslar </Wrapper.Title>
        <Wrapper.MenuItem>
          <AiOutlineVideoCamera /> Video Dars
        </Wrapper.MenuItem>
        <Wrapper.MenuItem>
          <AiOutlineBook /> Yozma ma`lumotlar
        </Wrapper.MenuItem>
        <Wrapper.MenuItem>
          <MdOutlineQuiz /> Test
        </Wrapper.MenuItem>
      </Wrapper.Menu>
      <Wrapper.Content>
        <ReactPlayer
          width={"800px"}
          height={"500px"}
          url={"https://youtu.be/gYrKtfrX-LQ?si=PpSJeUlkuS91zxPp"}
          controls={true}
        />
      </Wrapper.Content>
    </Wrapper>
  );
};

export default LessonPage;
