import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

function MenuList() {
  return (
    <div className="box">
      <ul>
        <li>
          <button className={s.boutton}>{<MenuListItem />}</button>
        </li>
        <li>
          <button className={s.boutton}>{<MenuListItem />}</button>
        </li>
        <li>
          <button className={s.boutton}>{<MenuListItem />}</button>
        </li>
        <li>
          <button className={s.boutton}>{<MenuListItem />}</button>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
