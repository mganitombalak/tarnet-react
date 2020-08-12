import React from 'react'
import{NavLink} from 'react-router-dom'

const MenuItem = props => <NavLink to={props.url} exact activeClassName="active" className="item">{props.children}</NavLink>

export default MenuItem;