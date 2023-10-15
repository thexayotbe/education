import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import {
  IoStatsChartOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { MdOutlinePlayLesson } from "react-icons/md";
import math from "../assets/images/math.jpg";
import edu from "../assets/images/edu.jpg";
export const sideBar = (handler) => {
  return [
    {
      id: 0,
      title: "edu-assist",
      icon: <AiOutlineMenu onClick={handler} />,
      path: "/",
    },
    {
      id: 1,
      title: "Bosh Saxifa",
      icon: <AiOutlineHome />,
      path: "/",
    },
    {
      id: 2,
      title: "Kurslar",
      icon: <MdOutlinePlayLesson />,
      path: "/courses",
    },
    {
      id: 2,
      title: "Statistika",
      icon: <IoStatsChartOutline />,
      path: "/",
    },
    {
      id: 3,
      title: "Chat",
      icon: <IoChatbubbleEllipsesOutline />,
      path: "/",
    },
  ];
};

export const courseCards = [
  {
    id: 0,
    title: "Matematika",
    text: "Har-xil qiyinlikdagi misolarni ishlashni organamiz",
    img: "https://img.freepik.com/free-vector/scientific-formulas-chalkboard_23-2148494010.jpg?w=1060&t=st=1697219977~exp=1697220577~hmac=14342fe815698a4aaefd8ae5b8325f9e40d0fb531535270ad581c8d567cde324",
  },
  {
    id: 1,
    title: "Ingliz-tili",
    text: "Eng ommaviy bolgan chet tili bilimlarizi oshiring",
    img: "https://img.freepik.com/free-vector/flat-design-english-book-illustration_23-2149495892.jpg?w=740&t=st=1697220028~exp=1697220628~hmac=0260460e93f5756e4eb55d623a270b69503f4e53638b2c003843d996699f41cd",
  },
  {
    id: 2,
    title: "Tarix",
    text: "Tarixsiz kelajak bo`lmaydi",
    img: "https://img.freepik.com/free-vector/candle-book-hand-drawing-illustration_98292-4165.jpg?w=740&t=st=1697220132~exp=1697220732~hmac=da5e3d9f282f10cac140a445b627385f79a7f31ee9ed2b84100b34714fd7dddc",
  },
  {
    id: 3,
    title: "Fizika",
    text: "Fizika - ta`biatni tushunish fanidur",
    img: "https://img.freepik.com/free-vector/different-science-equipments-white-background_1308-98941.jpg?w=740&t=st=1697220189~exp=1697220789~hmac=1cfef9e561efe726a514d7792c97a0c404c32a13594c9a9d5fd64b159b0b1c73",
  },
];

export const grade = [
  {
    value: 1,
    label: "1-sinf",
  },
  {
    value: 2,
    label: "2-sinf",
  },
  {
    value: 3,
    label: "4-sinf",
  },
  {
    value: 4,
    label: "4-sinf",
  },
  {
    value: 5,
    label: "5-sinf",
  },
  {
    value: 6,
    label: "6-sinf",
  },
  {
    value: 7,
    label: "7-sinf",
  },
  {
    value: 8,
    label: "8-sinf",
  },
  {
    value: 9,
    label: "9-sinf",
  },
  {
    value: 10,
    label: "10-sinf",
  },
  {
    value: 11,
    label: "11-sinf",
  },
];

export const courses = [
  {
    id: 0,
    title: "Matematika",
    progress: "70",
    level: "easy",
  },
  {
    id: 1,
    title: "Ingliz tili",
    progress: "30",
    level: "middle",
  },
  {
    id: 3,
    title: "Tarix",
    progress: "100",
    level: "hard",
  },
  {
    id: 4,
    title: "Ona-tili",
    progress: "10",
    level: "easy",
  },
  {
    id: 5,
    title: "Matematika",
    progress: "26",
    level: "middle",
  },
  {
    id: 6,
    title: "Rus tili",
    progress: "30",
    level: "hard",
  },
  {
    id: 7,
    title: "Ximiya",
    progress: "39",
    level: "easy",
  },
  {
    id: 8,
    title: "Ona-tili",
    progress: "10",
    level: "easy",
  },
  {
    id: 9,
    title: "Biologiya",
    progress: "70",
    level: "hard",
  },
  {
    id: 10,
    title: "Geometriya",
    progress: "30",
    level: "middle",
  },
  {
    id: 11,
    title: "Informatika",
    progress: "87",
    level: "middle",
  },
  {
    id: 12,
    title: "Jahon Tarixi",
    progress: "30",
    level: "easy",
  },
];

export const level = [
  {
    value: "easy",
    label: "Oson",
  },
  {
    value: "middle",
    label: "O`rtacha",
  },
  {
    value: "hard",
    label: "Qiyin",
  },
  {
    value: "all",
    label: "Barchasi",
  },
];

export const lessons = [
  {
    id: 10,
    title: "Matematika - Easy",
    shouldLearn: true,
    img: math,
    nav: "/quiz/math",
    currently: true,
  },
  {
    id: 0,
    title: "Matematika - Middle",
    shouldLearn: true,
    img: math,
    nav: "/courses/math/122",
    currently: true,
  },
  {
    id: 0,
    title: "Matematika - Hard",
    shouldLearn: true,
    img: math,
    nav: "/courses/math/122",
    currently: true,
  },
  {
    id: 1,
    title: "Ingliz tili",
    shouldLearn: true,
    img: edu,
    currently: false,
  },
  {
    id: 2,
    title: "Tarix",
    shouldLearn: true,
    img: edu,
    currently: false,
  },
  {
    id: 3,
    title: "Ona-tili",
    shouldLearn: true,
    img: edu,
    currently: false,
  },
  {
    id: 4,
    title: "Adabiyot",
    shouldLearn: true,
    img: edu,
    currently: false,
  },
];
