import React from 'react'

const MenuItem = props => <a href={props.url} className="item">{props.children}</a>

export default MenuItem;