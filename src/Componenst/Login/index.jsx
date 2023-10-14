import React from "react";
import { Wrapper } from "./style";
import bg from "../../assets/images/login.jpg";
import { grade } from "../../utils";
const Login = () => {
  return (
    <Wrapper>
      <Wrapper.Content>
        <Wrapper.Title>Xush kelibsiz</Wrapper.Title>
        <Wrapper.Descr>Bizga qoshilish uchun, royxatan o`ting</Wrapper.Descr>
        <Wrapper.Label>F.I.O</Wrapper.Label>
        <Wrapper.Input placeholder="Mamajonov Xayotbek" />
        <Wrapper.Label>Email</Wrapper.Label>
        <Wrapper.Input placeholder="ism@gmail.com" />{" "}
        <Wrapper.Label>Parol</Wrapper.Label>
        <Wrapper.Input placeholder="********" />
        <Wrapper.Label>Parolni qaytaring</Wrapper.Label>
        <Wrapper.Input placeholder="********" />
        <Wrapper.Label>Sinfingizni kiriting</Wrapper.Label>
        <Wrapper.Select defaultValue={1} options={grade}></Wrapper.Select>
        <Wrapper.Button>Ro`yxatan o`tish</Wrapper.Button>
      </Wrapper.Content>
      <Wrapper.Img src={bg} />
    </Wrapper>
  );
};

export default Login;
