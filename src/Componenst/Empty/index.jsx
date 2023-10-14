import React from "react";
import { Wrapper } from "./style";
import { Empty } from "antd";
const EmptyData = ({ modalHandler }) => {
  return (
    <Wrapper>
      <Empty description={false} />
      <Wrapper.Title>Sizda xozir kurslar yoq</Wrapper.Title>
      <Wrapper.Descr>
        Yangi darslarni boshlash uchun va bilimlaringizni oshirish uchun pastagi
        knopkani bosing
      </Wrapper.Descr>
      <Wrapper.Button className="btn" onClick={modalHandler}>
        Start
      </Wrapper.Button>
    </Wrapper>
  );
};

export default EmptyData;
