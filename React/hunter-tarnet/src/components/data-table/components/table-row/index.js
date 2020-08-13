import React from 'react';


const TableRow = props => <tr>{Object.keys(props).map((item, index) => <td key={index}>{props[item]}</td>)}</tr>

export default TableRow;