import React from 'react';
import { Link } from 'react-router-dom';
import dummy from './list.json'
import "../css/ListRow.css"

const ListRow = (props) => {
    return (
        <table>
            {dummy.users.map((user, i)=>(
                    <tr key={i}>
                        <td>{user.name}</td>
                        <td><Link to="/dddd">{user.title}</Link></td>
                        <td>{user.regDt}</td>
                    </tr>
            ))}
        </table>
    );
};

export default ListRow;
