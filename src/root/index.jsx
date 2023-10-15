import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../Componenst/Sidebar";
import Home from "../Componenst/Home";
import Quiz from "../Componenst/Quiz";
import Login from "../Componenst/Login";
import Courses from "../Componenst/Courses";
import { RequireAuth } from "react-auth-kit";
import LessonPage from "../Componenst/Generic/LessonPage";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseName/:courseId" element={<LessonPage />} />
        <Route path="/quiz/:subject" element={<Quiz />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Root;
