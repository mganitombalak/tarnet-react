import React from 'react';

const TableHeader = props => <thead>
    <tr>
        <th>Action</th>
        {props.headers.map((h, i) => <th key={i}>{h}</th>)}
    </tr>
</thead>

export default TableHeader;