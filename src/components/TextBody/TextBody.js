import React from "react";
import { subject } from "../../mockApi";
import "./TextBody.css";

const TextBody = () => {
  return (
    <tbody>
      {subject.map((item, index) => (
        <tr key={index}>
          <td>
            <input className="i number" type="text" defaultValue={item.id} />
          </td>
          <td>
            <input className="i time" type="text" defaultValue={item.time} />
          </td>
          <td>
            <input
              className="i subject"
              type="text"
              defaultValue={item.subject}
            />
          </td>
          <td>
            <input className="i cabinet" type="text" defaultValue={item.room} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TextBody;
