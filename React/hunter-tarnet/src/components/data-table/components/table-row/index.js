import React from 'react';

const TableRow = props => <tr><td><a href="#" onClick={() => props.removeAction(props['id'])}><i className="trash icon"/></a></td>{Object.keys(props).map((item, index) => <td key={index}>{props[item]}</td>)}</tr>

export default TableRow;