import React, { useState } from "react";
import ItemsBlock from "../ItemsBlock/ItemsBlock";
import LineGray from "../LineGray/LineGray";
import TextBody from "../TextBody/TextBody";
import TitleHead from "../TitleHead/TitleHead";
import "./DayBlock.css";

const DayBlock = (props) => {
  // console.log(props, "123");

  let element1 = document.createElement("input");
  let element2 = document.createElement("input");
  let element3 = document.createElement("input");
  let element4 = document.createElement("input");

  function addRow(myTable) {
    let table = document.getElementById("myTable");

    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);

    let cell1 = row.insertCell(0);

    element1.classList.add("i");
    element1.classList.add("number");
    cell1.appendChild(element1);

    let cell2 = row.insertCell(1);

    element2.classList.add("i");
    element2.classList.add("time");
    cell2.appendChild(element2);

    let cell3 = row.insertCell(2);

    element3.classList.add("i");
    element3.classList.add("subject");
    cell3.appendChild(element3);

    let cell4 = row.insertCell(3);

    element4.classList.add("i");
    element4.classList.add("cabinet");
    cell4.appendChild(element4);
  }

  function removeRow() {
    element1.remove();
    element2.remove();
    element3.remove();
    element4.remove();
  }

  return (
    <div className="DayBlock">
      <table id="myTable">
        <TitleHead />
        <TextBody />
      </table>

      {/* <LineGray /> */}

      <span className="add-icon material-icons md-48" onClick={addRow}>
        add
      </span>

      <span className="remove-icon material-icons md-48" onClick={removeRow}>
        remove
      </span>

      <table id="myTable">
        <TitleHead />
        <TextBody />
      </table>

      {/* <LineGray /> */}

      <span className="add-icon material-icons md-48" onClick={addRow}>
        add
      </span>

      <span className="remove-icon material-icons md-48" onClick={removeRow}>
        remove
      </span>

      <table id="myTable">
        <TitleHead />
        <TextBody />
      </table>

      {/* <LineGray /> */}

      <span className="add-icon material-icons md-48" onClick={addRow}>
        add
      </span>

      <span className="remove-icon material-icons md-48" onClick={removeRow}>
        remove
      </span>
    </div>
  );
};

export default DayBlock;
