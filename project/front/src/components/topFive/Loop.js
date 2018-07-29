import React from 'react';

export default function Loop(props) {

  return (
    <tr>
        <td>
            <a  href={props.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="red-chaordic">
                {props.shortUrl}
            </a>
        </td>
        <td className="right-align">
            {props.hits}
        </td>
    </tr>
  );

}