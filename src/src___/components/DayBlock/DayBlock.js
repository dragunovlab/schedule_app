import React from "react";
import ItemsBlock from "../ItemsBlock/ItemsBlock";
import Line from "../LineGray/LineGray";
import s from "./DayBlock.module.css";
const days = ["ПОНЕДЕЛЬНИК", "ВТОРНИЕК", "СР", "ЧТ", "ПЯТНИЦА"];
function DayBlock() {
  return (
    <div className={s.DayBlock}>
      <table id={s.myTable}>
        <tr>
          <th>№</th>
          <th>время</th>
          <th>предмет</th>
          <th>каб</th>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i} ${s.number}`}
              type="text"
              name="code1"
              value="1"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.time}`}
              type="text"
              name="subject1"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.subject}`}
              type="text"
              name="credit1"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.cabinet}`}
              type="text"
              name="mark1"
              value="123"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code2"
              value="2"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject2"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit2"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark2"
              value="32"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i} ${s.number}`}
              type="text"
              name="code3"
              value="3"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.time}`}
              type="text"
              name="subject3"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.subject}`}
              type="text"
              name="credit3"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.cabinet}`}
              type="text"
              name="mark3"
              value="15"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code4"
              value="4"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject4"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit4"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark4"
              value="54"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i} ${s.number}`}
              type="text"
              name="code5"
              value="5"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.time}`}
              type="text"
              name="subject5"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.subject}`}
              type="text"
              name="credit5"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.cabinet}`}
              type="text"
              name="mark5"
              value="5"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code6"
              value="6"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject6"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit6"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark6"
              value="1421"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code6"
              value="6"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject6"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit6"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark6"
              value="1421"
            />
          </td>
        </tr>
      </table>

      {/* <!-- LineBlue --> */}
      <Line />
      {/* <!-- LineBlue --> */}

      <span class="material-icons md-48">add_circle_outline</span>
      <input type="button" value="Add Subject" onclick="addRow('myTable')" />

      <table id={s.myTable}>
        <tr>
          <th>№</th>
          <th>время</th>
          <th>предмет</th>
          <th>каб</th>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i} ${s.number}`}
              type="text"
              name="code1"
              value="1"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.time}`}
              type="text"
              name="subject1"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.subject}`}
              type="text"
              name="credit1"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.cabinet}`}
              type="text"
              name="mark1"
              value="123"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code2"
              value="2"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject2"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit2"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark2"
              value="32"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i} ${s.number}`}
              type="text"
              name="code3"
              value="3"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.time}`}
              type="text"
              name="subject3"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.subject}`}
              type="text"
              name="credit3"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.cabinet}`}
              type="text"
              name="mark3"
              value="15"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code4"
              value="4"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject4"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit4"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark4"
              value="54"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i} ${s.number}`}
              type="text"
              name="code5"
              value="5"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.time}`}
              type="text"
              name="subject5"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.subject}`}
              type="text"
              name="credit5"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.cabinet}`}
              type="text"
              name="mark5"
              value="5"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code6"
              value="6"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject6"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit6"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark6"
              value="1421"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code6"
              value="6"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject6"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit6"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark6"
              value="1421"
            />
          </td>
        </tr>
      </table>

      {/* <!-- LineBlue --> */}
      <Line />
      {/* <!-- LineBlue --> */}

      <span class="material-icons md-48">add_circle_outline</span>
      <input type="button" value="Add Subject" onclick="addRow('myTable')" />

      <table id={s.myTable}>
        <tr>
          <th>№</th>
          <th>время</th>
          <th>предмет</th>
          <th>каб</th>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i} ${s.number}`}
              type="text"
              name="code1"
              value="1"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.time}`}
              type="text"
              name="subject1"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.subject}`}
              type="text"
              name="credit1"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.cabinet}`}
              type="text"
              name="mark1"
              value="123"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code2"
              value="2"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject2"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit2"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark2"
              value="32"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i} ${s.number}`}
              type="text"
              name="code3"
              value="3"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.time}`}
              type="text"
              name="subject3"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.subject}`}
              type="text"
              name="credit3"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.cabinet}`}
              type="text"
              name="mark3"
              value="15"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code4"
              value="4"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject4"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit4"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark4"
              value="54"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i} ${s.number}`}
              type="text"
              name="code5"
              value="5"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.time}`}
              type="text"
              name="subject5"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.subject}`}
              type="text"
              name="credit5"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i} ${s.cabinet}`}
              type="text"
              name="mark5"
              value="5"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code6"
              value="6"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject6"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit6"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark6"
              value="1421"
            />
          </td>
        </tr>

        <tr>
          <td>
            <input
              className={`${s.i2} ${s.number}`}
              type="text"
              name="code6"
              value="6"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.time}`}
              type="text"
              name="subject6"
              value="12:20"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.subject}`}
              type="text"
              name="credit6"
              value="информатика"
            />
          </td>
          <td>
            <input
              className={`${s.i2} ${s.cabinet}`}
              type="text"
              name="mark6"
              value="1421"
            />
          </td>
        </tr>
      </table>

      {/* <!-- LineBlue --> */}
      <Line />
      {/* <!-- LineBlue --> */}

      <span class="material-icons md-48">add_circle_outline</span>
      <input type="button" value="Add Subject" onclick="addRow('myTable')" />

      {/* <ItemsBlock />
      <Line />
      <ItemsBlock />
      <Line />
      <ItemsBlock />
      <Line /> */}
    </div>
  );
}

export default DayBlock;
