import React from 'react';
import TableHeader from './components/table-header'
import TableBody from './components/table-body'
const DataTable = props => {
    const headers = Object.keys(props.data[0]).map(key => key.toUpperCase());
    return <table className="ui selectable celled table">
        <TableHeader headers={headers}></TableHeader>
        <TableBody data={props.data} removeAction={props.removeAction}></TableBody>
    </table>
}

export default DataTable;