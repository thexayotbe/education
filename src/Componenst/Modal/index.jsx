import { Modal } from "antd";
import React from "react";
import { Wrapper } from "./style";
import { courseCards } from "../../utils";

const ModalCourse = ({ modalOpen, modalHandler }) => {
  return (
    <Modal
      onCancel={modalHandler}
      open={modalOpen}
      footer={false}
      width={"1000px"}>
      <Wrapper>
        {courseCards.map((value, index) => {
          return (
            <Wrapper.Course>
              <Wrapper.Img src={value.img} />
              <Wrapper.TextCont>
                <Wrapper.Title>{value.title}</Wrapper.Title>
                <Wrapper.Text>{value.text}</Wrapper.Text>
                <Wrapper.Button>Boshlash</Wrapper.Button>
              </Wrapper.TextCont>
            </Wrapper.Course>
          );
        })}
      </Wrapper>
    </Modal>
  );
};

export default ModalCourse;
