import React from 'react';
import TableRow from '../table-row'

const TableBody = props => <tbody>{props.data.map((b,i)=><TableRow rowId={i} key={i} {...b} onDeleteRow={props.onDeleteRow}></TableRow>)}</tbody>

export default TableBody;