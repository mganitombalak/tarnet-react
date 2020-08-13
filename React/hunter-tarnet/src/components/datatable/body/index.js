

import React from 'react';

import Row from '../row';

const Body = props=>{


return <tbody>
{props.data.map((x,index)=><Row>
    {props.columns.map((column,index)=><td>x[column]</td>)}
</Row>)}


</tbody>




 
}

export default Body ;