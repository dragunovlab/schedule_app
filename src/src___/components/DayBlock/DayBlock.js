import React from "react";
import ItemsBlock from "../ItemsBlock/ItemsBlock";
import Line from "../LineGray/LineGray";
import s from "./DayBlock.module.css";
const days = ["ПОНЕДЕЛЬНИК", "ВТОРНИЕК", "СР", "ЧТ", "ПЯТНИЦА"];
function DayBlock() {

  function addRow(myTable) {
    var table = document.getElementById("myTable");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

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
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code1" value="1" /></td>
                  <td><input className={`${s.i} ${s.time}`} type="text" name="subject1" value="12:20" />
                  </td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit1" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark1" value="123" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i2} ${s.number}`} type="text" name="code2" value="2" /></td>
                  <td><input  className={`${s.i2} ${s.time}`} type="text" name="subject2" value="12:20" /></td>
                  <td><input className={`${s.i2} ${s.subject}`} type="text" name="credit2" value="информатика" /></td>
                  <td><input className={`${s.i2} ${s.cabinet}`} type="text" name="mark2" value="32" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code3" value="3" /></td>
                  <td><input className={`${s.i} ${s.time}`} type="text" name="subject3" value="12:20" /></td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit3" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark3" value="15" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i2} ${s.number}`} type="text" name="code4" value="4" /></td>
                  <td><input className={`${s.i2} ${s.time}`} type="text" name="subject4" value="12:20" /></td>
                  <td><input className={`${s.i2} ${s.subject}`} type="text" name="credit4" value="информатика" /></td>
                  <td><input className={`${s.i2} ${s.cabinet}`} type="text" name="mark4" value="54" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code5" value="5" /></td>
                  <td><input  className={`${s.i} ${s.time}`} type="text" name="subject5" value="12:20" /></td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit5" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark5" value="5" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i2} ${s.number}`} type="text" name="code6" value="6" /></td>
                  <td><input className={`${s.i2} ${s.time}`} type="text" name="subject6" value="12:20" /></td>
                  <td><input className={`${s.i2} ${s.subject}`} type="text" name="credit6" value="информатика" /></td>
                  <td><input className={`${s.i2} ${s.cabinet}`} type="text" name="mark6" value="1421" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code6" value="7" /></td>
                  <td><input className={`${s.i} ${s.time}`} type="text" name="subject6" value="12:20" /></td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit6" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark6" value="1421" /></td>
                </tr>

              </table>

              {/* <!-- LineBlue --> */}
              <Line />
              {/* <!-- LineBlue --> */}

              <span class="material-icons md-48" onClick="addRow('myTable')">add_circle_outline</span>
   
   
              <table id={s.myTable}>
                <tr>
                  <th>№</th>
                  <th>время</th>
                  <th>предмет</th>
                  <th>каб</th>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code1" value="1" /></td>
                  <td><input className={`${s.i} ${s.time}`} type="text" name="subject1" value="12:20" />
                  </td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit1" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark1" value="123" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i2} ${s.number}`} type="text" name="code2" value="2" /></td>
                  <td><input  className={`${s.i2} ${s.time}`} type="text" name="subject2" value="12:20" /></td>
                  <td><input className={`${s.i2} ${s.subject}`} type="text" name="credit2" value="информатика" /></td>
                  <td><input className={`${s.i2} ${s.cabinet}`} type="text" name="mark2" value="32" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code3" value="3" /></td>
                  <td><input className={`${s.i} ${s.time}`} type="text" name="subject3" value="12:20" /></td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit3" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark3" value="15" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i2} ${s.number}`} type="text" name="code4" value="4" /></td>
                  <td><input className={`${s.i2} ${s.time}`} type="text" name="subject4" value="12:20" /></td>
                  <td><input className={`${s.i2} ${s.subject}`} type="text" name="credit4" value="информатика" /></td>
                  <td><input className={`${s.i2} ${s.cabinet}`} type="text" name="mark4" value="54" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code5" value="5" /></td>
                  <td><input  className={`${s.i} ${s.time}`} type="text" name="subject5" value="12:20" /></td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit5" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark5" value="5" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i2} ${s.number}`} type="text" name="code6" value="6" /></td>
                  <td><input className={`${s.i2} ${s.time}`} type="text" name="subject6" value="12:20" /></td>
                  <td><input className={`${s.i2} ${s.subject}`} type="text" name="credit6" value="информатика" /></td>
                  <td><input className={`${s.i2} ${s.cabinet}`} type="text" name="mark6" value="1421" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code6" value="7" /></td>
                  <td><input className={`${s.i} ${s.time}`} type="text" name="subject6" value="12:20" /></td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit6" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark6" value="1421" /></td>
                </tr>

              </table>

              {/* <!-- LineBlue --> */}
              <Line />
              {/* <!-- LineBlue --> */}

              <span class="material-icons md-48" onClick="addRow('myTable')">add_circle_outline</span>

              <table id={s.myTable}>
                <tr>
                  <th>№</th>
                  <th>время</th>
                  <th>предмет</th>
                  <th>каб</th>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code1" value="1" /></td>
                  <td><input className={`${s.i} ${s.time}`} type="text" name="subject1" value="12:20" />
                  </td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit1" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark1" value="123" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i2} ${s.number}`} type="text" name="code2" value="2" /></td>
                  <td><input  className={`${s.i2} ${s.time}`} type="text" name="subject2" value="12:20" /></td>
                  <td><input className={`${s.i2} ${s.subject}`} type="text" name="credit2" value="информатика" /></td>
                  <td><input className={`${s.i2} ${s.cabinet}`} type="text" name="mark2" value="32" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code3" value="3" /></td>
                  <td><input className={`${s.i} ${s.time}`} type="text" name="subject3" value="12:20" /></td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit3" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark3" value="15" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i2} ${s.number}`} type="text" name="code4" value="4" /></td>
                  <td><input className={`${s.i2} ${s.time}`} type="text" name="subject4" value="12:20" /></td>
                  <td><input className={`${s.i2} ${s.subject}`} type="text" name="credit4" value="информатика" /></td>
                  <td><input className={`${s.i2} ${s.cabinet}`} type="text" name="mark4" value="54" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code5" value="5" /></td>
                  <td><input  className={`${s.i} ${s.time}`} type="text" name="subject5" value="12:20" /></td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit5" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark5" value="5" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i2} ${s.number}`} type="text" name="code6" value="6" /></td>
                  <td><input className={`${s.i2} ${s.time}`} type="text" name="subject6" value="12:20" /></td>
                  <td><input className={`${s.i2} ${s.subject}`} type="text" name="credit6" value="информатика" /></td>
                  <td><input className={`${s.i2} ${s.cabinet}`} type="text" name="mark6" value="1421" /></td>
                </tr>

                <tr>
                  <td><input className={`${s.i} ${s.number}`} type="text" name="code6" value="7" /></td>
                  <td><input className={`${s.i} ${s.time}`} type="text" name="subject6" value="12:20" /></td>
                  <td><input className={`${s.i} ${s.subject}`} type="text" name="credit6" value="информатика" /></td>
                  <td><input className={`${s.i} ${s.cabinet}`} type="text" name="mark6" value="1421" /></td>
                </tr>

              </table>

              {/* <!-- LineBlue --> */}
              <Line />
              {/* <!-- LineBlue --> */}

              <span class="add-icon material-icons md-48" onClick="addRow('myTable')">add_circle_outline</span>

   
   
   
   
   
   
   
   
   
   
   
   
   
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
