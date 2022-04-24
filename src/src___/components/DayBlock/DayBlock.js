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

  const [number, setNumber] = useState("1");

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
          <tr>
            <td>
              <input
                className="i number"
                type="text"
                name="code1"
                defaultValue={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject1"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit1"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i cabinet"
                type="text"
                name="mark1"
                defaultValue="123"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i2 number" type="text" name="code2" defaultValue="2" />
            </td>
            <td>
              <input
                className="i2 time"
                type="text"
                name="subject2"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i2 subject"
                type="text"
                name="credit2"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i2 cabinet"
                type="text"
                name="mark2"
                defaultValue="32"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i number" type="text" name="code3" defaultValue="3" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject3"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit3"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i cabinet"
                type="text"
                name="mark3"
                defaultValue="15"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i2 number" type="text" name="code4" defaultValue="4" />
            </td>
            <td>
              <input
                className="i2 time"
                type="text"
                name="subject4"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i2 subject"
                type="text"
                name="credit4"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i2 cabinet"
                type="text"
                name="mark4"
                defaultValue="54"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i number" type="text" name="code5" defaultValue="5" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject5"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit5"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input className="i cabinet" type="text" name="mark5" defaultValue="5" />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i2 number" type="text" name="code6" defaultValue="6" />
            </td>
            <td>
              <input
                className="i2 time"
                type="text"
                name="subject6"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i2 subject"
                type="text"
                name="credit6"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i2 cabinet"
                type="text"
                name="mark6"
                defaultValue="1421"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i number" type="text" name="code6" defaultValue="7" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject6"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit6"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i cabinet"
                type="text"
                name="mark6"
                defaultValue="1421"
              />
            </td>
          </tr>
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
          <tr>
            <td>
              <input className="i number" type="text" name="code1" defaultValue="1" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject1"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit1"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i cabinet"
                type="text"
                name="mark1"
                defaultValue="123"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i2 number" type="text" name="code2" defaultValue="2" />
            </td>
            <td>
              <input
                className="i2 time"
                type="text"
                name="subject2"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i2 subject"
                type="text"
                name="credit2"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i2 cabinet"
                type="text"
                name="mark2"
                defaultValue="32"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i number" type="text" name="code3" defaultValue="3" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject3"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit3"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i cabinet"
                type="text"
                name="mark3"
                defaultValue="15"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i2 number" type="text" name="code4" defaultValue="4" />
            </td>
            <td>
              <input
                className="i2 time"
                type="text"
                name="subject4"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i2 subject"
                type="text"
                name="credit4"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i2 cabinet"
                type="text"
                name="mark4"
                defaultValue="54"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i number" type="text" name="code5" defaultValue="5" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject5"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit5"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input className="i cabinet" type="text" name="mark5" defaultValue="5" />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i2 number" type="text" name="code6" defaultValue="6" />
            </td>
            <td>
              <input
                className="i2 time"
                type="text"
                name="subject6"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i2 subject"
                type="text"
                name="credit6"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i2 cabinet"
                type="text"
                name="mark6"
                defaultValue="1421"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i number" type="text" name="code6" defaultValue="7" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject6"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit6"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i cabinet"
                type="text"
                name="mark6"
                defaultValue="1421"
              />
            </td>
          </tr>
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
          <tr>
            <td>
              <input className="i number" type="text" name="code1" defaultValue="1" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject1"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit1"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i cabinet"
                type="text"
                name="mark1"
                defaultValue="123"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i2 number" type="text" name="code2" defaultValue="2" />
            </td>
            <td>
              <input
                className="i2 time"
                type="text"
                name="subject2"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i2 subject"
                type="text"
                name="credit2"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i2 cabinet"
                type="text"
                name="mark2"
                defaultValue="32"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i number" type="text" name="code3" defaultValue="3" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject3"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit3"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i cabinet"
                type="text"
                name="mark3"
                defaultValue="15"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i2 number" type="text" name="code4" defaultValue="4" />
            </td>
            <td>
              <input
                className="i2 time"
                type="text"
                name="subject4"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i2 subject"
                type="text"
                name="credit4"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i2 cabinet"
                type="text"
                name="mark4"
                defaultValue="54"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i number" type="text" name="code5" defaultValue="5" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject5"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit5"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input className="i cabinet" type="text" name="mark5" defaultValue="5" />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i2 number" type="text" name="code6" defaultValue="6" />
            </td>
            <td>
              <input
                className="i2 time"
                type="text"
                name="subject6"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i2 subject"
                type="text"
                name="credit6"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i2 cabinet"
                type="text"
                name="mark6"
                defaultValue="1421"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input className="i number" type="text" name="code6" defaultValue="7" />
            </td>
            <td>
              <input
                className="i time"
                type="text"
                name="subject6"
                defaultValue="12:20"
              />
            </td>
            <td>
              <input
                className="i subject"
                type="text"
                name="credit6"
                defaultValue="информатика"
              />
            </td>
            <td>
              <input
                className="i cabinet"
                type="text"
                name="mark6"
                defaultValue="1421"
              />
            </td>
          </tr>
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
