import React from 'react';
import TableRow from '../table-row'

const TableBody = props => <tbody>{props.data.map((b,i)=><TableRow removeAction={props.removeAction} key={i} {...b}></TableRow>)}</tbody>

export default TableBody;