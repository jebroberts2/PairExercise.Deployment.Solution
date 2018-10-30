import React from "react";

export default props => (
  <tr>
    <td className="user--first-name">{props.lastName}</td>
    <td className="user--last-name">{props.lastName}</td>
    <td className="user--email">{props.email}</td>
  </tr>
);
