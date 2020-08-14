import React from 'react';


const TableRow = props => <tr>{Object.keys(props).map((item, index) => <td key={index}>{props[item]}</td>)}
                        <td> <a onClick={()=>props.onDeleteRow(props.rowId) }>Sil</a> </td>
                        </tr>

export default TableRow;