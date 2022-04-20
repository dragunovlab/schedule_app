import React from "react";
import ItemWhite from "./ItemWhite/ItemWhite";
import "./ItemsBlock.css";
import ItemGray from "./ItemGray/ItemGray";
import ItemTitle from "./ItemTitle/ItemTitle";

function ItemsBlock() {
  return (
    <div className="ItemsBlock">

{/* <table id="myTable">
                <tr>
                  <th><input placeholder="№" /></th>
                  <th><input  placeholder="время" /></th>
                  <th><input  placeholder="предмет" /></th>
                  <th><input  placeholder="каб" /></th>
                </tr>

                <tr>
                  <td><input class="i nomber" type="text" name="code1" placeholder="1" /> </td>
                  <td><input class="i time" type="text" name="subject1" placeholder="11:30" /></td>
                  <td><input class="i subject" type="text" name="credit1" placeholder="информатика" /></td>
                  <td><input class="i cabinet" type="text" name="mark1" placeholder="23" /></td>
                </tr>

                <tr>
                  <td><input class="i2 nomber" type="text" name="code2" placeholder="1" /></td>
                  <td><input class="i2 time" type="text" name="subject2" placeholder="11:30" /></td>
                  <td><input class="i2 subject" type="text" name="credit2" placeholder="информатика" /></td>
                  <td><input class="i2 cabinet" type="text" name="mark2" placeholder="23" /></td>
                </tr>
                
                <tr>
                  <td><input class="i nomber" type="text" name="code1" placeholder="1" /> </td>
                  <td><input class="i time" type="text" name="subject1" placeholder="11:30" /></td>
                  <td><input class="i subject" type="text" name="credit1" placeholder="информатика" /></td>
                  <td><input class="i cabinet" type="text" name="mark1" placeholder="23" /></td>
                </tr>

                <tr>
                  <td><input class="i2 nomber" type="text" name="code2" placeholder="1" /></td>
                  <td><input class="i2 time" type="text" name="subject2" placeholder="11:30" /></td>
                  <td><input class="i2 subject" type="text" name="credit2" placeholder="информатика" /></td>
                  <td><input class="i2 cabinet" type="text" name="mark2" placeholder="23" /></td>
                </tr>
                
                <tr>
                  <td><input class="i nomber" type="text" name="code1" placeholder="1" /> </td>
                  <td><input class="i time" type="text" name="subject1" placeholder="11:30" /></td>
                  <td><input class="i subject" type="text" name="credit1" placeholder="информатика" /></td>
                  <td><input class="i cabinet" type="text" name="mark1" placeholder="23" /></td>
                </tr>

                <tr>
                  <td><input class="i2 nomber" type="text" name="code2" placeholder="1" /></td>
                  <td><input class="i2 time" type="text" name="subject2" placeholder="11:30" /></td>
                  <td><input class="i2 subject" type="text" name="credit2" placeholder="информатика" /></td>
                  <td><input class="i2 cabinet" type="text" name="mark2" placeholder="23" /></td>
                </tr>
</table> 

 
       */}
   
















      
      <ItemTitle />
      <ItemWhite />
      <ItemGray />
      <ItemWhite />
      <ItemGray />
      <ItemWhite />
      <ItemGray />
      <ItemWhite />
    </div>
  );
}

export default ItemsBlock;
