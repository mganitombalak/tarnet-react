

import React from 'react';
import Row from '../row'

const Header = props=>{

return <thead>
    <Row>
        {props.headers.map((x,index)=><th key={index}>x</th>)}
    </Row>

</thead>





 
}

export default Header ;