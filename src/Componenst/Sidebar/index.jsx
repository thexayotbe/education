import React, { useState } from "react";
import { Wrapper } from "./style";
import { sideBar } from "../../utils";
import { Outlet, useNavigate } from "react-router-dom";
import { toggleMenuOpen } from "../../redux/menuSlice";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
  const { menuOpen } = useSelector(({ menu }) => menu);
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(toggleMenuOpen());
  };
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Wrapper.Sidebar className={menuOpen && "close"}>
          {sideBar(handler).map((value, index) => {
            return (
              <Wrapper.MenuItem
                close={menuOpen}
                className={index !== 0 && "item"}
                onClick={() => value.id !== 0 && navigate(`${value.path}`)}>
                <Wrapper.MenuTitle close={menuOpen}>
                  {value.title}
                </Wrapper.MenuTitle>
                {value.icon}
              </Wrapper.MenuItem>
            );
          })}
        </Wrapper.Sidebar>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Sidebar;
