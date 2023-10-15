import React, { useState } from "react";
import { Wrapper } from "./style";
import bg from "../../assets/images/login.jpg";
import { grade } from "../../utils";
import { message, notification } from "antd";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    // class: "",
    parents: "",
    phoneNumber: "",
  });
  const [cnfPw, setCnfPw] = useState();
  const msg = (type, message) => {
    messageApi.open({
      type,
      content: message,
    });
  };
  const getData = (e) => {
    e.target.name === cnfPw
      ? setCnfPw(e.target.value)
      : setUserData({
          ...userData,
          [e.target.name]: e.target.value,
        });
  };

  const checker = () => {
    let fillData = Object.values(userData).every((value) => value);
    if (!fillData) msg("error", "Barcha joylarni to`ldiring");
    else if (
      userData.password !== cnfPw ||
      userData.password.length < 1 ||
      cnfPw.length < 1
    )
      msg("error", "Parol bir xil bo`lishi va 8tadan kop bo`lishi kerak");
    // navigate("/");
  };
  const logIn = () => {
    checker();
  };
  return (
    <Wrapper>
      <Wrapper.Content>
        <Wrapper.Title>Xush kelibsiz</Wrapper.Title>
        <Wrapper.Descr>Bizga qoshilish uchun, royxatan o`ting</Wrapper.Descr>
        <Wrapper.Label>F.I.O</Wrapper.Label>
        <Wrapper.Input
          placeholder="Mamajonov Xayotbek"
          name="name"
          onChange={getData}
        />
        <Wrapper.Label>F.I.O - OTA/ONa</Wrapper.Label>
        <Wrapper.Input
          placeholder="Mamajonov Xayotbek"
          name="parents"
          onChange={getData}
        />
        <Wrapper.Label>Email</Wrapper.Label>
        <Wrapper.Input
          placeholder="ism@gmail.com"
          name="email"
          onChange={getData}
        />{" "}
        <Wrapper.Label>Telefon Raqam</Wrapper.Label>
        <Wrapper.Input
          name="phoneNumber"
          placeholder="+998951234567"
          onChange={getData}
        />{" "}
        <Wrapper.Label>Parol</Wrapper.Label>
        <Wrapper.Input
          placeholder="********"
          name="password"
          onChange={getData}
        />
        <Wrapper.Label>Parolni qaytaring</Wrapper.Label>
        <Wrapper.Input name="cnfPw" placeholder="********" />
        <Wrapper.Label>Sinfingizni kiriting</Wrapper.Label>
        <Wrapper.Select
          name="grade"
          onChange={getData}
          defaultValue={1}
          options={grade}
        />
        {contextHolder}
        <Wrapper.Button onClick={() => logIn()}>
          Ro`yxatan o`tish
        </Wrapper.Button>
      </Wrapper.Content>
      <Wrapper.Img src={bg} />
    </Wrapper>
  );
};

export default Login;
