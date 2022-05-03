import React from "react";
import { titles } from "../../mockApi";
import "./TitleHead.css";

const TitleHead = () => {
  return (
    <thead>
      {titles.map((item, index) => (
        <tr>
          <th>{item.idTitle}</th>
          <th>{item.timeTitle}</th>
          <th>{item.itemTitle}</th>
          <th>{item.roomTitle}</th>
        </tr>
      ))}
    </thead>
  );
};

export default TitleHead;
