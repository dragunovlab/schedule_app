import React, { useState } from "react";
import ItemsBlock from "../ItemsBlock/ItemsBlock";
import LineGray from "../LineGray/LineGray";
import s from "./DayBlock.css";
const days = ["ПОНЕДЕЛЬНИК", "ВТОРНИЕК", "СР", "ЧТ", "ПЯТНИЦА"];
const DayBlock = (props) => {
  console.log(props, "123");
  function addRow(myTable) {
    var table = document.getElementById("myTable");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    // var subjects: Subject[] = [];

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    var element2 = document.createElement("input");
    cell2.appendChild(element2);

    var cell3 = row.insertCell(2);
    var element2 = document.createElement("input");
    cell3.appendChild(element2);

    var cell4 = row.insertCell(3);
    var element3 = document.createElement("input");
    cell4.appendChild(element3);
  }

  const subject = [
    {
      id: 1,
      time: "08:00",
      subject: "математика",
      room: "12",
    },
    {
      id: 2,
      time: "09:00",
      subject: "русский",
      room: "15",
    },
    {
      id: 3,
      time: "10:00",
      subject: "английский",
      room: "18",
    },
    {
      id: 4,
      time: "11:00",
      subject: "физра",
      room: "21",
    },
    {
      id: 5,
      time: "12:00",
      subject: "литература",
      room: "23",
    },
    {
      id: 6,
      time: "11:20",
      subject: "история",
      room: "25",
    },
    {
      id: 7,
      time: "11:20",
      subject: "труд",
      room: "28",
    },
  ];

  return (
    <div className="DayBlock">
      <table id="myTable">
        <thead>
          <tr>
            <th>№</th>
            <th>время</th>
            <th>предмет</th>
            <th>каб</th>
          </tr>
        </thead>

        <tbody>
          {subject.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  className="i2 number"
                  type="text"
                  defaultValue={item.id}
                />
              </td>
              <td>
                <input
                  className="i2 time"
                  type="text"
                  defaultValue={item.time}
                />
              </td>
              <td>
                <input
                  className="i2 subject"
                  type="text"
                  defaultValue={item.subject}
                />
              </td>
              <td>
                <input
                  className="i2 cabinet"
                  type="text"
                  defaultValue={item.room}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <!-- LineBlue --> */}
      <LineGray />
      {/* <!-- LineBlue --> */}

      <span
        className="add-icon material-icons md-48"
        // onClick={addRow('myTable')}
      >
        add_circle_outline
      </span>

      <table id="myTable">
        <thead>
          <tr>
            <th>№</th>
            <th>время</th>
            <th>предмет</th>
            <th>каб</th>
          </tr>
        </thead>

        <tbody>
          {subject.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  className="i number"
                  type="text"
                  defaultValue={item.id}
                />
              </td>
              <td>
                <input
                  className="i time"
                  type="text"
                  defaultValue={item.time}
                />
              </td>
              <td>
                <input
                  className="i subject"
                  type="text"
                  defaultValue={item.subject}
                />
              </td>
              <td>
                <input
                  className="i cabinet"
                  type="text"
                  defaultValue={item.room}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <!-- LineBlue --> */}
      <LineGray />
      {/* <!-- LineBlue --> */}

      <span
        className="add-icon material-icons md-48"
        // onClick={addRow('myTable')}
      >
        add_circle_outline
      </span>

      <table id="myTable">
        <thead>
          <tr>
            <th>№</th>
            <th>время</th>
            <th>предмет</th>
            <th>каб</th>
          </tr>
        </thead>
        <tbody>
          {subject.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  className="i2 number"
                  type="text"
                  defaultValue={item.id}
                />
              </td>
              <td>
                <input
                  className="i2 time"
                  type="text"
                  defaultValue={item.time}
                />
              </td>
              <td>
                <input
                  className="i2 subject"
                  type="text"
                  defaultValue={item.subject}
                />
              </td>
              <td>
                <input
                  className="i2 cabinet"
                  type="text"
                  defaultValue={item.room}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <!-- LineBlue --> */}
      <LineGray />
      {/* <!-- LineBlue --> */}

      <span
        className="add-icon material-icons md-48"
        // onClick={addRow('myTable')}
      >
        add_circle_outline
      </span>
    </div>
  );
};

export default DayBlock;
