import React from 'react';
import TableRow from '../table-row'

const TableBody = props => <tbody>{props.data.map((b,i)=><TableRow key={i} {...b}></TableRow>)}</tbody>

export default TableBody;